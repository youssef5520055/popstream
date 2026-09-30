import Image from "next/image";
import Link from "next/link";
import { Settings, Globe, Mail, MessageCircle, MoreHorizontal } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F1115] text-[#F8FAFC] font-sans selection:bg-[#3B82F6] selection:text-white flex flex-col relative overflow-hidden">
      
      {/* Starry Background Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40" 
           style={{
             backgroundImage: "radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 50px 160px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 90px 40px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 130px 80px, #ffffff, rgba(0,0,0,0)), radial-gradient(1px 1px at 160px 120px, #ffffff, rgba(0,0,0,0))",
             backgroundRepeat: "repeat",
             backgroundSize: "200px 200px"
           }}>
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0F1115]/80 via-transparent to-[#0F1115]"></div>

      {/* Navigation */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-12">
        <Link href="/" className="text-2xl font-black tracking-widest uppercase text-white hover:text-blue-400 transition-colors">
          POPSTREAM
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/settings" className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
            <Settings className="w-4 h-4" />
            <span className="hidden sm:inline">Settings</span>
          </Link>
          <Link href="/signin" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Sign in
          </Link>
          <Link href="/signup" className="text-sm font-bold bg-[#F97316] text-white px-5 py-2.5 rounded-full hover:bg-[#EA580C] transition-colors shadow-lg shadow-[#F97316]/20">
            Join popstream
          </Link>
        </div>
      </header>

      <main className="flex-1 relative z-10 flex flex-col">
        {/* Hero Section */}
        <section className="text-center pt-20 pb-12 px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-6 text-white font-righteous drop-shadow-lg">
            Igniting Your Passion for Movies, <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]">Unleashing Wonder!</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 font-medium">
            Welcome to POPSTREAM, where the silver screen comes alive, offering a captivating web app
            experience that fuels your love for movies.
          </p>
          <Link href="/home" className="inline-flex items-center justify-center text-lg font-bold bg-[#3B82F6] text-white px-8 py-4 rounded-full hover:bg-[#2563EB] hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-[#3B82F6]/30">
            Discover popstream
          </Link>
        </section>

        {/* Movie Display */}
        <section className="relative w-full max-w-6xl mx-auto px-4 py-10 flex justify-center items-center min-h-[400px]">
          
          {/* Left Floating Movie */}
          <div className="absolute left-0 lg:left-10 z-10 transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 hidden md:block">
            <div className="w-48 lg:w-64 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl shadow-black">
              <Image src="/images/landing-pic2.png" alt="RAW" width={256} height={384} className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Center Movie Grid */}
          <div className="relative z-20 w-full max-w-3xl transform hover:scale-105 transition-all duration-500">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-[#3B82F6]/20 bg-[#1E293B]/50 backdrop-blur-sm p-4">
               <Image src="/images/landing-pic1.png" alt="Center Movie Collection" width={800} height={450} className="w-full h-auto rounded-xl object-cover" priority />
            </div>
          </div>

          {/* Right Floating Movie */}
          <div className="absolute right-0 lg:right-10 z-10 transform rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 hidden md:block">
            <div className="w-48 lg:w-64 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl shadow-black">
              <Image src="/images/landing-pic3.png" alt="ASCEND" width={256} height={384} className="w-full h-auto object-cover" />
            </div>
          </div>

        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#0F1115] pt-12 pb-8 mt-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-4 text-gray-400">
              <a href="#" className="hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"><Globe className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"><Mail className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"><MessageCircle className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"><MoreHorizontal className="w-5 h-5" /></a>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 font-medium">
              <a href="#" className="hover:text-white transition-colors">Media Center</a>
              <a href="#" className="hover:text-white transition-colors">Gift Cards</a>
              <a href="#" className="hover:text-white transition-colors">Legacy Notices</a>
              <a href="#" className="hover:text-white transition-colors">Account</a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-sm text-gray-500">
            <p>&copy; 2026 POPSTREAM Media Direct, LLC. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Help</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Feedback</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
