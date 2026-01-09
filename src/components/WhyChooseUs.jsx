import { FaCheckCircle, FaMicroscope } from 'react-icons/fa';

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-secondary text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 p-20 opacity-5">
                <FaMicroscope className="text-9xl" />
            </div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Content */}
                    <div className="flex-1">
                        <span className="text-primary font-bold uppercase tracking-wider">Why Choose Us</span>
                        <h2 className="text-4xl font-bold mt-2 mb-6">
                            Setting the Standard in <br /> Laboratory Excellence
                        </h2>
                        <p className="text-gray-300 mb-8 max-w-xl">
                            We combine advanced technology with human expertise to deliver results you can rely on. Our commitment to quality is unwavering.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                'Accurate Results', 'Expert Team',
                                'Latest Technology', 'Fast Turnaround',
                                'Affordable Pricing', '24/7 Support'
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <FaCheckCircle className="text-primary text-xl flex-shrink-0" />
                                    <span className="font-semibold text-lg">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image/Stats */}
                    <div className="flex-1 w-full relative">
                        <div className="relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Laboratory"
                                className="rounded-lg shadow-2xl border-4 border-white/10"
                            />
                        </div>
                        {/* Decorative Circle */}
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary rounded-full blur-3xl opacity-20 z-0"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
