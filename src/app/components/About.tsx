import Image from 'next/image';   
import { FaUsers, FaBriefcase, FaGlobe, FaClipboardList } from 'react-icons/fa'; 

const About = () => {  
  return (  
    <div className="flex flex-col items-center min-h-screen bg-black text-white">  
      <Image src={'/public/images/1 6.png'} alt="Astronaut" className="object-cover h-60" />  

      <div className="text-center mt-8">  
        <h2 className="text-3xl font-bold">— ABOUT US</h2>  
        <p className="mt-2">Our expertise, as well as our passion for web design, sets us apart from other agencies.</p>  
      </div>  

      <div className="flex justify-around w-full mt-10">  
        <div className="flex flex-col items-center">  
          <div className="bg-blue-500 text-white rounded-full p-6">  
            <FaUsers size={30} />  
          </div>  
          <span className="text-4xl font-bold mt-2">10</span>  
          <span>Years of Experience</span>  
        </div>  

        <div className="flex flex-col items-center">  
          <div className="bg-blue-500 text-white rounded-full p-6">  
            <FaBriefcase size={30} />  
          </div>  
          <span className="text-4xl font-bold mt-2">15</span>  
          <span>Skilled Professionals</span>  
        </div>  

        <div className="flex flex-col items-center">  
          <div className="bg-blue-500 text-white rounded-full p-6">  
            <FaClipboardList size={30} />  
          </div>  
          <span className="text-4xl font-bold mt-2">21</span>  
          <span>Visited Conferences</span>  
        </div>  

        <div className="flex flex-col items-center">  
          <div className="bg-blue-500 text-white rounded-full p-6">  
            <FaGlobe size={30} />  
          </div>  
          <span className="text-4xl font-bold mt-2">1K</span>  
          <span>Projects Worldwide</span>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default About;