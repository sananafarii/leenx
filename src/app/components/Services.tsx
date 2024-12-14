import Image from 'next/image';  
import astronaut from '../public/astronaut.png'; // مسیر تصویر فضانورد  

const Services = () => {  
  return (  
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">  
      <div className="relative w-full h-full flex justify-center">  
        <Image src={astronaut} alt="Astronaut" className="object-cover h-full" />  
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50">  
          <h1 className="text-4xl font-bold mb-4">OUR SERVICES</h1>  
          <p className="text-center mb-8">Our expertise, as well as our passion for web design, sets us apart from other agencies.</p>  
          <div className="flex space-x-4">  
            <div className="flex flex-col items-center">  
              <div className="bg-blue-500 text-white rounded-full p-4">  
                {/* SVG آیکون مربوط به سرویس 1 */}  
                <svg width="24" height="24" fill="currentColor" className="w-6 h-6"><path d="..."></path></svg>  
              </div>  
              <span>Service 1</span>  
            </div>  
            <div className="flex flex-col items-center">  
              <div className="bg-blue-500 text-white rounded-full p-4">  
                {/* SVG آیکون مربوط به سرویس 2 */}  
                <svg width="24" height="24" fill="currentColor" className="w-6 h-6"><path d="..."></path></svg>  
              </div>  
              <span>Service 2</span>  
            </div>  
            <div className="flex flex-col items-center">  
              <div className="bg-blue-500 text-white rounded-full p-4">  
                {/* SVG آیکون مربوط به سرویس 3 */}  
                <svg width="24" height="24" fill="currentColor" className="w-6 h-6"><path d="..."></path></svg>  
              </div>  
              <span>Service 3</span>  
            </div>  
 
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Services;