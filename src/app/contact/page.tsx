import NavBar from "../NavBar";  
import ContactForm from "../ContactForm";  
import Image from 'next/image';  

function Contact() {  
  return (  
    <div className="text-white pt-10 contact-page h-screen px-56 flex flex-col items-center">  
      <NavBar />  
      <div className="flex">  
        <Image  
          src="/images/Contactusimage.png"  
          alt="Astronaut floating in space"  
          width={675}  
          height={727}  
          className="animate-float"  
        />  
       
      <div className="flex flex-col items-end">  
        <h1 className="text-6xl font-bold mb-6 mt-14 text-right">  
          CONTACT  
          <br />  
          US  
        </h1>  
        <p className="text-lg text-gray-300 mb-8 text-right">  
          Our expertise, as well as our passion for   
          web design, sets us apart from other agencies.  
        </p>  
        <ContactForm />  
      </div> 
      </div> 
    </div>  
  );  
}  

export default Contact;