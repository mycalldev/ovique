import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b border-accent/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="font-display text-2xl font-medium">
            Ovique <span className="text-accent">Timepieces</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#" className="hover:text-accent transition-colors">Home</Link>
            {/* <Link href="#collection" className="hover:text-accent transition-colors">Collection</Link> */}
            <Link href="#about" className="hover:text-accent transition-colors">About</Link>
            {/* <Link href="#craftsmanship" className="hover:text-accent transition-colors">Craftsmanship</Link> */}
            <Link href="#contact" className="hover:text-accent transition-colors">Contact</Link>
          </div>
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/womens_hand.jpg" 
            alt="Luxury watch on woman's wrist" 
            fill 
            priority
            className="object-cover brightness-[0.85]"
          />
        </div>
        <div className="absolute inset-0 bg-dark/40 z-10"></div>
        <div className="container mx-auto px-4 z-20 text-center text-light">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-4">Ovique Elegance</h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">For the modern woman who appreciates the artistry of fine watchmaking</p>
          <Link 
            href="#collection" 
            className="inline-block px-8 py-3 border border-accent text-tertiary hover:bg-accent hover:text-light transition-colors duration-300"
          >
            Explore Collection
          </Link>
        </div>
      </section>

      {/* 2. Collection Section */}
      <section id="collection" className="py-20 bg-tertiary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl mb-4 text-dark">Our Signature Collection</h2>
            <div className="w-24 h-[1px] bg-accent mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-primary">Meticulously crafted timepieces that blend artistry with precision</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "The Duchess",
                description: "18K gold with diamond bezel",
                image: "/rolex_watch.png"
              },
              {
                name: "Celestial Blue",
                description: "Sapphire crystal with mother of pearl dial",
                image: "/watches_plus.jpg"
              },
              {
                name: "Rose Petal",
                description: "Rose gold with chronograph movement",
                image: "/works.jpg"
              }
            ].map((watch, index) => (
              <div key={index} className="group">
                <div className="relative h-80 mb-4 overflow-hidden">
                  <div className="absolute inset-0 bg-dark/10 group-hover:bg-dark/0 transition-all duration-300 z-10"></div>
                  <Image 
                    src={watch.image} 
                    alt={watch.name} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-display text-xl mb-2 text-dark">{watch.name}</h3>
                <p className="text-primary mb-4">{watch.description}</p>
                <Link href="#" className="text-accent hover:underline">View Details</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Us Section */}
      <section id="about" className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px]">
              <Image 
                src="/womens_hand1.jpg" 
                alt="Our luxury watches collection" 
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl mb-6 text-dark">About Ovique Timepieces</h2>
              <div className="w-24 h-[1px] bg-accent mx-auto mb-8"></div>
              <p className="mb-6 text-primary">
                For over three decades, Ovique Timepieces has been crafting exceptional watches that combine traditional 
                Swiss watchmaking expertise with contemporary design sensibilities.
              </p>
              <p className="mb-6 text-primary">
                Our dedication to quality and precision has made us a trusted name in luxury timepieces for the discerning woman.
                Each watch is a testament to our commitment to excellence, designed to be both a functional accessory and an heirloom piece.
              </p>
              <p className="mb-8 text-primary">
                We believe that a fine watch is more than just a way to tell time—it's an expression of personal style, 
                a celebration of craftsmanship, and a companion for life's most important moments.
              </p>
              <Link 
                href="#" 
                className="inline-block px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-light transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Craftsmanship Section */}
      <section id="craftsmanship" className="py-20 bg-tertiary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl mb-4 text-dark">The Art of Craftsmanship</h2>
            <div className="w-24 h-[1px] bg-accent mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-primary">Every timepiece is a masterpiece of precision and artistry</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Swiss Movement",
                description: "Each watch features a precision Swiss movement, the heart of exceptional timekeeping.",
                icon: "⚙️"
              },
              {
                title: "Hand Finishing",
                description: "Our master craftspeople meticulously finish each component by hand for unparalleled quality.",
                icon: "🔍"
              },
              {
                title: "Sustainable Luxury",
                description: "We source materials ethically and craft watches designed to last for generations.",
                icon: "♻️"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-8 bg-light shadow-sm">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-display text-xl mb-4 text-dark">{feature.title}</h3>
                <p className="text-primary">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              href="#" 
              className="inline-block px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-light transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section id="testimonials" className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl mb-4 text-dark">Client Testimonials</h2>
            <div className="w-24 h-[1px] bg-accent mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-primary">What our distinguished clients say about their Ovique timepieces</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "My Ovique watch has accompanied me through the most important moments of my career. It's more than an accessory—it's part of my journey.",
                author: "Scooby Doo",
                title: "CEO, Global Dog treats.... lol"
              },
              {
                quote: "The attention to detail is extraordinary. After five years, my Celestial Blue still receives compliments wherever I go.",
                author: "Bingo",
                title: "Art Director"
              },
              {
                quote: "I inherited my mother's Ovique watch, and now I've purchased my own. The timeless design transcends generations.",
                author: "Sophia Rodriguez",
                title: "Architect"
              }
            ].map((testimonial, index) => (
              <div key={index} className="p-8 border border-accent/20">
                <svg className="w-10 h-10 text-accent mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="mb-6 text-primary italic">{testimonial.quote}</p>
                <div>
                  <p className="font-display text-lg text-dark">{testimonial.author}</p>
                  <p className="text-sm text-primary">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-dark text-light py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-display text-2xl mb-6">Ovique <span className="text-accent">Timepieces</span></h3>
              <p className="mb-6 text-secondary">Crafting exceptional timepieces for the modern woman since 1985.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-light hover:text-accent">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                </a>
                <a href="#" className="text-light hover:text-accent">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="text-light hover:text-accent">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-secondary/20 mt-12 pt-8 text-center text-secondary">
            <p>© {new Date().getFullYear()} Ovique Timepieces. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
