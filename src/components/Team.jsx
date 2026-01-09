import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const team = [
    { name: 'Dr. John Doe', role: 'Lab Director', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&w=400&q=80' },
    { name: 'Dr. Jane Smith', role: 'Pathologist', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&w=400&q=80' },
    { name: 'Dr. Alan Brown', role: 'Geneticist', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&w=400&q=80' },
    { name: 'Dr. Sarah White', role: 'Researcher', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&w=400&q=80' },
];

const Team = () => {
    return (
        <section id="team" className="py-20 bg-light">
            <div className="container mx-auto px-4 text-center">
                <span className="text-primary font-bold uppercase tracking-wider">Our Experts</span>
                <h2 className="text-4xl font-bold text-secondary mt-2 mb-12">
                    Meet The <span className="text-primary italic">Team</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                            <div className="relative overflow-hidden">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-80 object-cover object-top"
                                />
                                {/* Social Overlay */}
                                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a href="#" className="p-2 bg-white text-primary rounded-full hover:bg-secondary hover:text-white transition-colors"><FaFacebookF /></a>
                                    <a href="#" className="p-2 bg-white text-primary rounded-full hover:bg-secondary hover:text-white transition-colors"><FaTwitter /></a>
                                    <a href="#" className="p-2 bg-white text-primary rounded-full hover:bg-secondary hover:text-white transition-colors"><FaLinkedinIn /></a>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">{member.name}</h3>
                                <p className="text-gray-500 font-semibold">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
