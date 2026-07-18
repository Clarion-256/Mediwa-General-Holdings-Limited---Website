import { Building2, Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-lg bg-primary text-white">
                <Building2 size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-tight">
                  Mediwa General
                </span>
                <span className="text-[10px] font-medium tracking-widest uppercase text-primary">
                  Holdings
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Northern Uganda's premier partner for high-grade construction, manufacturing of concrete products, and precision steel fabrication.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white border-b border-gray-800 pb-4 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-primary transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-primary transition-colors text-sm">Our Products</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors text-sm">Construction Services</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-primary transition-colors text-sm">Project Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white border-b border-gray-800 pb-4 inline-block">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-gray-400">
                <MapPin className="text-primary shrink-0" size={20} />
                Obiya Highland Trading Centre, Pece-Laroo Division, Gulu City
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Phone className="text-primary shrink-0" size={20} />
                +256 785 191280
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Mail className="text-primary shrink-0" size={20} />
                info.mediwagholdings@gmail.com
              </li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white border-b border-gray-800 pb-4 inline-block">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to receive updates on new products, projects, and company news.</p>
            <div className="flex gap-2">
              <Input placeholder="Your email address" className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500" />
              <Button className="bg-secondary hover:bg-secondary/90">Join</Button>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Mediwa General Holdings. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
