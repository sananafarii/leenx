import Image from 'next/image';
// import astronaut from '../public/astronaut.png';
import styles from './Services.module.css';

const ServiceIcon = ({ icon, title, rotate }: { icon: string; title: string; rotate: number }) => (
  <div className={`${styles['service-icon']} ${styles['service-icon-rotate']}`} style={{ '--rotate': `${rotate}deg` } as React.CSSProperties}>
    <div className="relative" style={{ transform: `rotate(${rotate}deg)` }}>
      <div className="w-[170px] h-[170px] bg-gradient-to-r from-[#EFEFEF]/25 to-[#5CA8FF]/25 
                      rounded-[87px] border border-[#FFFFFF] backdrop-blur-[80px]
                      flex items-center justify-center">
        <Image src={icon} alt={title} width={24} height={24} className="w-6 h-6" />
      </div>
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-blue-400">{title}</span>
    </div>
  </div>
);

const Services = () => {
  const services = [
    { icon: '/icons/customer.svg', title: 'customer', rotate: 0 },
    { icon: '/icons/search.svg', title: 'Search', rotate: -45 },
    { icon: '/icons/pen.svg', title: 'pen', rotate: -90 },
    { icon: '/icons/vector 1.svg', title: 'Launch', rotate: -135 },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white p-8">
     <Image src={'/public/images/p0 1 (1).png'} alt={'background'} />
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <Image
          src={'/public/images/IMG_0473 (1).png'}
          alt="Astronaut"
          width={500}
          height={600}
          className="object-contain"
        />
      </div>

      {/* محتوای اصلی */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">OUR SERVICES</h1>
        <p className="mb-12">
          Our expertise, as well as our passion for web design, sets us apart from other agencies.
        </p>

        {/* دایره آیکون‌ها */}
        <div className="relative">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="absolute"
              style={{
                transform: `rotate(${index * 45}deg) translateX(200px)`,
                transformOrigin: 'center center'
              }}
            >
              <ServiceIcon {...service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;