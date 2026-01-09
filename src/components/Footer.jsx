import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer" className="bg-secondary text-white pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Col 1: About */}
                    <div>
                        <div className="text-2xl font-bold font-sans mb-6">
                            Med<span className="text-primary italic">nix</span>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            We are committed to providing the best medical diagnostic services. Trust our experts for accurate results.
                        </p>
                        <div className="flex gap-4">
                            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 border-l-4 border-primary pl-3">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'About Us', href: '#about' },
                                { name: 'Our Services', href: '#services' },
                                { name: 'Meet The Team', href: '#team' },
                                { name: 'Case Studies', href: '#portfolio' },
                            ].map(link => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-400 hover:text-primary transition-colors hover:pl-2 flex items-center gap-2">
                                        <span className="text-lg">›</span> {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Contact */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 border-l-4 border-primary pl-3">Contact Info</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-primary mt-1" />
                                <span>123 Medical Center Dr,<br />Science City, NY 10012</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaPhone className="text-primary" />
                                <span>+1 (234) 567-8900</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-primary" />
                                <span>info@mednixlab.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Col 4: Newsletter */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 border-l-4 border-primary pl-3">Newsletter</h3>
                        <p className="text-gray-400 mb-6">
                            Subscribe to our newsletter to get latest updates and news.
                        </p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="w-full bg-white/10 border border-gray-600 rounded px-4 py-3 text-white focus:outline-none focus:border-primary"
                            />
                            <button type="button" className="absolute right-0 top-0 h-full w-12 bg-primary flex items-center justify-center rounded-r hover:bg-green-700 transition-colors">
                                <FaPaperPlane />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                    <p>&copy; 2024 Mednix. All Rights Reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-primary">Privacy Policy</a>
                        <a href="#" className="hover:text-primary">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
