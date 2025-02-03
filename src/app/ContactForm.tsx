
import React from "react";  

const ContactForm = () => {  
  return (  
    <div className="bg-transparent bg-opacity-50 backdrop-blur-md rounded-[50px] p-6 shadow-lg w-80 mx-auto">  
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>  
      <form>  
        <div className="mb-4">  
          <label className="block text-sm font-medium text-white-700" htmlFor="name">  
            Name  
          </label>  
          <input  
            type="text"  
            id="name"  
            placeholder="Your Name"  
            className="bg-transparent mt-1 block w-full border border-white-300 rounded-full p-2"  
          />  
        </div>  
        <div className="mb-4">  
          <label className="bg-transparent block text-sm font-medium text-white-700" htmlFor="email">  
            Your Email  
          </label>  
          <input  
            type="email"  
            id="email"  
            placeholder="Your Email"  
            className="bg-transparent mt-1 block w-full border border-white-300 rounded-full p-2"  
          />  
        </div>  
        <div className="mb-4">  
          <label className="bg-transparent block text-sm font-medium text-white-700" htmlFor="message">  
            Your Message  
          </label>  
          <textarea  
            id="message"  
            placeholder="Your Text"  
            className="bg-transparent mt-1 block w-full border border-white-300 rounded-xl p-2"  
            rows={4}  
          />  
        </div>  
        <button className="w-full bg-transparent-500 border text-white py-2 rounded-full hover:bg-blue-600 transition-colors">  
          Send  
        </button>  
      </form>  
    </div>  
  );  
};  

export default ContactForm;