import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Placeholder images from unsplash
const slides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        subtitle: 'Welcome to Mednix',
        title: 'Highest Standards of Clinical Laboratory',
        desc: 'Our clinical laboratory sets the standard for high-quality care and accurate diagnostics.'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        subtitle: 'Modern Technology',
        title: 'Accurate Results & Fast Turnaround',
        desc: 'Using state-of-the-art technology to provide precise results you can trust.'
    }
];

const Hero = () => {
    return (
        <section id="home" className="relative h-[600px] md:h-[800px]">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="h-full w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="relative h-full w-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="container mx-auto px-4 text-center text-white">
                                    <span className="block text-primary font-bold text-lg md:text-xl mb-4 tracking-wider animate-fadeIn">
                                        {slide.subtitle}
                                    </span>
                                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
                                        {slide.title}
                                    </h1>
                                    <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                                        {slide.desc}
                                    </p>
                                    <div className="flex justify-center gap-4">
                                        <button className="bg-primary hover:bg-green-700 text-white px-8 py-4 rounded-md font-bold transition-all transform hover:scale-105">
                                            Explore Services
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Hero;
