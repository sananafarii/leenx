import Image from 'next/image';  
import astronaut from '../public/astronaut.png'; // تصویر فضانورد  
import { FaHome, FaPhone, FaServicestack, FaBlog, FaEnvelope } from 'react-icons/fa'; // آیکن‌ها  

const Home = () => {  
  return (  
    <div className="relative w-full h-screen bg-black flex flex-col items-center justify-center text-white">  
      <Image  
        src={astronaut}  
        alt="Astronaut"  
        layout="fill"  
        objectFit="cover"  
        className="absolute inset-0 object-cover opacity-50"  
      />  
      <div className="z-10 text-center">  
        <h1 className="text-4xl font-bold">LEENX AGENCY</h1>  
        <p className="mt-2 text-lg">  
          Our expertise, as well as our passion for web design, sets us apart from other agencies.  
        </p>  
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">  
          Call Us  
        </button>  
      </div>  

      <nav className="absolute bottom-5 flex justify-around w-full max-w-xl">  
        <a className="flex flex-col items-center text-gray-200 hover:text-white" href="#">  
          <FaHome size={30} />  
          <span className="text-sm">Home</span>  
        </a>  
        <a className="flex flex-col items-center text-gray-200 hover:text-white" href="#">  
          <FaEnvelope size={30} />  
          <span className="text-sm">Portfolio</span>  
        </a>  
        <a className="flex flex-col items-center text-gray-200 hover:text-white" href="#">  
          <FaPhone size={30} />  
          <span className="text-sm">Contact Us</span>  
        </a>  
        <a className="flex flex-col items-center text-gray-200 hover:text-white" href="#">  
          <FaServicestack size={30} />  
          <span className="text-sm">Our Services</span>  
        </a>  
        <a className="flex flex-col items-center text-gray-200 hover:text-white" href="#">  
          <FaBlog size={30} />  
          <span className="text-sm">Blog</span>  
        </a>  
      </nav>  
    </div>  
  );  
};  

export default Home;