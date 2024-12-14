import Image from 'next/image';  
import astronaut from '../public/astronaut.png'; // مسیر تصویر فضانورد  
import laptopMockup from '../public/laptop-mockup.png'; // تصویر لپ‌تاپ  
import mockup1 from '../public/mockup1.png'; // تصویر موکاپ 1  
import mockup2 from '../public/mockup2.png'; // تصویر موکاپ 2  
import mockup3 from '../public/mockup3.png'; // تصویر موکاپ 3  

const News = () => {  
  return (  
    <div className="bg-black text-white py-16">  
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">  
        <div className="w-full md:w-1/2 flex flex-col items-start p-6">  
          <h2 className="text-3xl font-bold">— What’s News?</h2>  
          <p className="mt-4">  
            Our expertise, as well as our passion for web design, sets us apart from other agencies.  
          </p>  

          <div className="mt-8">  
            <h3 className="text-2xl font-semibold">Web Design</h3>  
            <p className="mt-2">  
              Our expertise, as well as our passion for web design, sets us apart from ...  
            </p>  
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">  
              Read More  
            </button>  
          </div>  
        </div>  

        <div className="w-full md:w-1/2">  
          <Image src={astronaut} alt="Astronaut" className="object-cover h-80 md:h-full" />  
        </div>  
      </div>  

      <div className="mt-12 flex flex-wrap justify-center">  
        <div className="bg-gray-800 rounded-lg overflow-hidden m-2">  
          <Image src={laptopMockup} alt="Laptop Mockup" className="w-full h-full" />  
        </div>  
        <div className="bg-gray-800 rounded-lg overflow-hidden m-2">  
          <Image src={mockup1} alt="Mockup 1" className="w-full h-full" />  
        </div>  
        <div className="bg-gray-800 rounded-lg overflow-hidden m-2">  
          <Image src={mockup2} alt="Mockup 2" className="w-full h-full" />  
        </div>  
        <div className="bg-gray-800 rounded-lg overflow-hidden m-2">  
          <Image src={mockup3} alt="Mockup 3" className="w-full h-full" />  
        </div>  
      </div>  
    </div>  
  );  
};  

export default News;