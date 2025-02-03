import NavBar from "../NavBar";

function About() {
   return  <div className="text-white pt-10 services-page h-screen px-56">
   <NavBar />
   <div className="flex flex-col flex-end">
          <h1 className="text-6xl font-bold mb-6 mt-14 text-right">
            ABOUT
            <br />
            US
          </h1>

          <p className="text-lg text-gray-300 mb-8 text-right">
            Our expertise, as well as our passion for 
            web design, sets us apart from other agencies.
          </p>
        </div>
        <div className="flex justify-end">
        <button className="bg-transparent border border-blue-500 hover:bg-gray-100 text-white-800 px-9 py-3 rounded-full hover:bg-blue-600 transition-colors">
            Call Us
          </button>
          </div>

       

    </div>;
}

export default About;
