// src/app/components/Header.js

const Header = () => {
    return (
      <header className="bg-blue-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl">Leenx Agency</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;