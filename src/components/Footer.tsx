import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground w-full relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-secondary blur-[120px]" />
        <div className="absolute top-[60%] -right-[10%] w-[40%] h-[60%] rounded-full bg-accent blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
        
        {/* Big CTA Section */}
        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/10 pb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Ready to make magic happen?
            </h2>
            <p className="text-white/70 font-light text-lg">
              Whether it's a grand wedding or an intimate birthday party, our experts are here to bring your vision to life.
            </p>
          </div>
          <Link 
            href="https://wa.me/919035106677" 
            target="_blank"
            className="flex items-center gap-3 px-8 py-4 bg-secondary text-white rounded-full font-medium hover:bg-secondary/90 transition-all shadow-lg hover:shadow-secondary/30 shrink-0 group"
          >
            Start Planning
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6">
          
          {/* About */}
          <div className="lg:col-span-4 pr-0 lg:pr-8">
            <h4 className="text-2xl font-serif font-bold mb-6 text-white tracking-wide">My Balloons My Prop's</h4>
            <p className="text-white/70 font-light mb-8 leading-relaxed">
              Specializing in creating unforgettable experiences for every occasion. We handle every detail with precision and creativity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-widest opacity-80">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-white/70 hover:text-white hover:pl-1 transition-all">Home</Link></li>
              <li><Link href="#services" className="text-white/70 hover:text-white hover:pl-1 transition-all">Services</Link></li>
              <li><Link href="#gallery" className="text-white/70 hover:text-white hover:pl-1 transition-all">Gallery</Link></li>
              <li><Link href="#contact" className="text-white/70 hover:text-white hover:pl-1 transition-all">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-widest opacity-80">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-white/70">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10 shrink-0">
                  <MapPin className="text-secondary" size={18} />
                </div>
                <span className="leading-relaxed">No.144/129/363 Ground Floor, Mico Layout, Begur, Bengaluru 560068</span>
              </li>
              <li className="flex items-center gap-4 text-white/70">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10 shrink-0">
                  <Phone className="text-secondary" size={18} />
                </div>
                <span>+91 090351 06677</span>
              </li>
              <li className="flex items-center gap-4 text-white/70">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10 shrink-0">
                  <Mail className="text-secondary" size={18} />
                </div>
                <span>info@myballoonsmyprops.com</span>
              </li>
            </ul>
          </div>

          {/* Google Maps */}
          <div className="lg:col-span-3 h-[300px] lg:h-[100%] min-h-[250px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
            <div className="absolute inset-0 bg-primary/20 pointer-events-none group-hover:opacity-0 transition-opacity z-10" />
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.373468571439!2d77.6272!3d12.8797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150041112bc5%3A0x6b49dc30f2526e95!2sBegur%2C%20Bengaluru%2C%20Karnataka%20560068!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            ></iframe>
          </div>

        </div>

        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between text-white/40 text-sm font-light">
          <p>Copyright © {new Date().getFullYear()} My Balloons My Prop's. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
