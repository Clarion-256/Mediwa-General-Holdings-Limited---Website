import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import projComImg from '@assets/generated_images/project-commercial.jpg';
import projEduImg from '@assets/generated_images/project-school.jpg';
import projResImg from '@assets/generated_images/project-residential.jpg';

const PROJECTS = [
  {
    title: 'Gulu City Commercial Complex',
    location: 'Gulu City CBD',
    type: 'Commercial',
    status: 'Completed',
    year: '2023',
    image: projComImg,
  },
  {
    title: 'St. Mary\'s School Extension',
    location: 'Pece-Laroo Division',
    type: 'Institutional',
    status: 'Completed',
    year: '2022',
    image: projEduImg,
  },
  {
    title: 'Acholi Quarters Housing Development',
    location: 'Gulu District',
    type: 'Residential',
    status: 'Ongoing',
    year: '2024',
    image: projResImg,
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-wider text-secondary uppercase mb-3">Our Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Landmark Projects
            </h3>
            <p className="text-lg text-gray-400">
              A selection of our most significant builds. Each project represents our commitment to structural integrity, aesthetic value, and timely completion.
            </p>
          </div>
          <a href="#gallery" className="hidden md:inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors">
            View All Projects <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/5] relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex gap-3 mb-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                      {project.type}
                    </span>
                    <span className={`px-3 py-1 text-white text-xs font-bold rounded-full ${project.status === 'Completed' ? 'bg-secondary' : 'bg-gray-600'}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                  
                  <div className="flex items-center justify-between text-gray-300 text-sm">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <a href="#gallery" className="inline-flex items-center gap-2 text-primary font-bold">
            View All Projects <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
