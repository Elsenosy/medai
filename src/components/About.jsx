import { FaPlay } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Image with Video Button */}
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Lab Researcher"
                            className="rounded-lg shadow-xl w-full object-cover h-[500px]"
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <button className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl animate-pulse hover:scale-110 transition-transform shadow-lg cursor-pointer">
                                <FaPlay className="ml-2" />
                            </button>
                        </div>
                        {/* Floating Experience Box */}
                        <div className="absolute bottom-8 left-8 bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary hidden md:block">
                            <h3 className="text-4xl font-bold text-primary">25+</h3>
                            <p className="text-gray-600 font-semibold">Years Experience</p>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div>
                        <span className="text-primary font-bold uppercase tracking-wider mb-2 block">About Us</span>
                        <h2 className="text-4xl font-bold text-secondary mb-6 leading-tight">
                            Our Laboratory Story <br />
                            <span className="italic font-light text-primary">Since 1998</span>
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We are committed to providing precise and timely diagnostic services. Our state-of-the-art technology and expert team ensure accurate results for better patient care.
                        </p>

                        {/* Progress Bars */}
                        <div className="space-y-6">
                            {[
                                { label: 'Advanced Microscopy', pct: '90%' },
                                { label: 'Molecular Diagnostics', pct: '85%' },
                                { label: 'Expert Team', pct: '95%' }
                            ].map((skill) => (
                                <div key={skill.label}>
                                    <div className="flex justify-between mb-2 font-semibold text-secondary">
                                        <span>{skill.label}</span>
                                        <span>{skill.pct}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-3">
                                        <div
                                            className="bg-primary h-3 rounded-full transition-all duration-1000"
                                            style={{ width: skill.pct }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="mt-10 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-3 rounded-md font-bold transition-colors">
                            More About Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
