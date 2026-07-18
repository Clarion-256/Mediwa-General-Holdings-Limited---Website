import { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export function FloatingElements() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Scroll to top */}
      <div className={`transition-all duration-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-lg hover:bg-primary transition-colors focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      </div>

      {/* WhatsApp Button */}
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href="https://wa.me/256785191280"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform focus:outline-none"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={30} />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-gray-900 text-white border-0 font-medium">
          <p>Chat with us</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
