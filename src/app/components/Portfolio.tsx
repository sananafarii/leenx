import Image from 'next/image';  
import astronaut from '../public/astronaut.png'; // مسیر تصویر فضانورد  
import mobile1 from '../public/mobile1.png'; // تصویر موبایل 1  
import mobile2 from '../public/mobile2.png'; // تصویر موبایل 2  
import mobile3 from '../public/mobile3.png'; // تصویر موبایل 3  

const Portfolio = () => {  
  return (  
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">  
      <div className="flex items-center justify-between w-full max-w-5xl mt-10">  
        <Image src={astronaut} alt="Astronaut" className="w-1/3 rounded-lg" />  
        
        <div className="flex flex-col w-2/3 p-6 bg-gray-800 rounded-lg shadow-lg">  
          <h2 className="text-3xl font-bold">PORTFOLIO</h2>  
          <p className="mt-2">  
            Our expertise, as well as our passion for web design, sets us apart from other agencies.  
          </p>  
          <div className="flex flex-col mt-4">  
            <h3 className="text-xl font-semibold">English App Design</h3>  
            <p className="mt-2">  
              Our expertise, as well as our passion for web design, sets us apart from other ...  
            </p>  
            <button className="mt-4 inline-flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">  
              Learn More &rarr;  
            </button>  
          </div>  
        </div>  
      </div>  

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 w-full max-w-5xl px-4">  
        <div className="bg-gray-800 rounded-lg p-4">  
          <Image src={mobile1} alt="Mobile Design 1" className="rounded-lg" />  
        </div>  
        <div className="bg-gray-800 rounded-lg p-4">  
          <Image src={mobile2} alt="Mobile Design 2" className="rounded-lg" />  
        </div>  
        <div className="bg-gray-800 rounded-lg p-4">  
          <Image src={mobile3} alt="Mobile Design 3" className="rounded-lg" />  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Portfolio;