import Image from 'next/image';  
import astronaut from '../public/astronaut.png'; // تصویر فضانورد  

const Contact = () => {  
  return (  
    <div className="bg-black text-white flex flex-col md:flex-row items-center justify-between p-10">  
      <div className="w-full md:w-1/2">  
        <Image src={astronaut} alt="Astronaut" className="w-full h-auto rounded-lg" />  
      </div>  
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10">  
        <h2 className="text-3xl font-bold">— CONTACT US</h2>  
        <p className="mt-2">  
          Our expertise, as well as our passion for web design, sets us apart from other agencies.  
        </p>  
        <form className="mt-4 bg-gray-800 p-6 rounded-lg shadow-lg">  
          <div className="mb-4">  
            <label htmlFor="name" className="block text-sm font-semibold">Name</label>  
            <input  
              type="text"  
              id="name"  
              placeholder="Your Name"  
              className="w-full p-2 mt-1 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-blue-500"  
              required  
            />  
          </div>  
          <div className="mb-4">  
            <label htmlFor="email" className="block text-sm font-semibold">Your Email</label>  
            <input  
              type="email"  
              id="email"  
              placeholder="Your Email"  
              className="w-full p-2 mt-1 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-blue-500"  
              required  
            />  
          </div>  
          <div className="mb-4">  
            <label htmlFor="message" className="block text-sm font-semibold">Your Message</label>  
            <textarea  
              id="message"  
              placeholder="Your Text"  
              className="w-full p-2 mt-1 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-blue-500"  
              rows={4}  
              required  
            />  
          </div>  
          <button  
            type="submit"  
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"  
          >  
            Send  
          </button>  
        </form>  
      </div>  
    </div>  
  );  
};  

export default Contact;