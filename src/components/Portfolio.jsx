import { useState } from 'react';

const projects = [
    { id: 1, category: 'chemical', title: 'Chemical Research', img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&w=600&q=80' },
    { id: 2, category: 'pathology', title: 'Pathology Lab', img: 'https://images.unsplash.com/photo-1579165466741-7f35a4755657?ixlib=rb-4.0.3&w=600&q=80' },
    { id: 3, category: 'genetics', title: 'Genetics Testing', img: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?ixlib=rb-4.0.3&w=600&q=80' },
    { id: 4, category: 'chemical', title: 'Blood Analysis', img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&w=600&q=80' },
    { id: 5, category: 'pathology', title: 'Microbiology', img: 'https://images.unsplash.com/photo-1582719471384-89d3bc423772?ixlib=rb-4.0.3&w=600&q=80' },
    { id: 6, category: 'genetics', title: 'DNA Sequencing', img: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-4.0.3&w=600&q=80' },
];

const Portfolio = () => {
    const [filter, setFilter] = useState('all');

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    const categories = [
        { id: 'all', label: 'All' },
        { id: 'chemical', label: 'Chemical' },
        { id: 'pathology', label: 'Pathology' },
        { id: 'genetics', label: 'Genetics' },
    ];

    return (
        <section id="portfolio" className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
                <span className="text-primary font-bold uppercase tracking-wider">Case Studies</span>
                <h2 className="text-4xl font-bold text-secondary mt-2 mb-10">
                    Latest <span className="text-primary italic">Projects</span>
                </h2>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`px-6 py-2 rounded-full font-bold transition-all ${filter === cat.id
                                    ? 'bg-primary text-white shadow-lg scale-105'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div className="text-left transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-primary font-bold uppercase text-sm">{project.category}</span>
                                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
