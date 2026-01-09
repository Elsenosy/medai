import { FaFlask, FaDna, FaMicroscope, FaStethoscope } from 'react-icons/fa';

const servicesData = [
    {
        icon: <FaFlask />,
        title: 'Chemical Research',
        desc: 'Advanced chemical analysis for precise diagnostics and research applications.',
    },
    {
        icon: <FaDna />,
        title: 'Pathology Testing',
        desc: 'Comprehensive pathology services using the latest molecular techniques.',
    },
    {
        icon: <FaMicroscope />,
        title: 'Genetics Testing',
        desc: 'Unlocking genetic insights for personalized medicine and health.',
    },
    {
        icon: <FaStethoscope />,
        title: 'Lab Services',
        desc: 'Full range of clinical laboratory services for patients and providers.',
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-light">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary font-bold uppercase tracking-wider">Our Services</span>
                    <h2 className="text-4xl font-bold text-secondary mt-2">
                        Excellence in <span className="text-primary italic">Science</span>
                    </h2>
                    <p className="text-gray-600 mt-4">
                        We offer a comprehensive portfolio of diagnostic services to meet all your testing needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300 group"
                        >
                            <div className="text-5xl text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.desc}
                            </p>
                            <a href="#" className="inline-block text-secondary font-bold hover:text-primary transition-colors hover:translate-x-1 duration-200">
                                Read More →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
