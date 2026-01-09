import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteRight, FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Patient",
        text: "The medical services provided were outstanding. The staff is professional, caring, and the results were delivered very quickly.",
        img: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Doctor",
        text: "Mednix has been our trusted partner for years. Their laboratory diagnostics are precise, which helps us make better treatment decisions.",
        img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 3,
        name: "Emily Davis",
        role: "Researcher",
        text: "Exceptional facilities and a highly skilled team. Their attention to detail in chemical research is commendable.",
        img: "https://randomuser.me/api/portraits/women/68.jpg"
    }
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
                <span className="text-primary font-bold uppercase tracking-wider">Testimonial</span>
                <h2 className="text-4xl font-bold text-secondary mt-2 mb-12">
                    What Clients <span className="text-primary italic">Say</span>
                </h2>

                <div className="max-w-4xl mx-auto">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000 }}
                        loop={true}
                        className="pb-12"
                    >
                        {testimonials.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="flex flex-col items-center">
                                    <div className="mb-6 text-primary text-5xl opacity-30">
                                        <FaQuoteRight />
                                    </div>
                                    <p className="text-xl md:text-2xl text-gray-600 italic mb-8 px-8 md:px-20 leading-relaxed">
                                        "{item.text}"
                                    </p>

                                    {/* Rating */}
                                    <div className="flex text-yellow-500 mb-6 gap-1">
                                        {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-16 h-16 rounded-full border-2 border-primary object-cover"
                                        />
                                        <div className="text-left">
                                            <h4 className="text-lg font-bold text-secondary">{item.name}</h4>
                                            <p className="text-primary font-medium text-sm">{item.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
