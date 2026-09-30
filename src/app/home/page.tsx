"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Info, Settings, LogOut, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HomeDashboard() {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch("/api/movies");
        if (res.ok) {
          const data = await res.json();
          setMovies(data);
        }
      } catch (error) {
        console.error("Failed to load movies", error);
      } finally {
        setLoading(false);
      }
    };
    
    // Check auth
    if (!localStorage.getItem("popstream_token")) {
      router.push("/signin");
      return;
    }
    
    fetchMovies();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("popstream_token");
    router.push("/");
  };

  // Mock movies if DB is empty to showcase the UI
  const displayMovies = movies.length > 0 ? movies : [
    { id: '1', title: 'Cosmic Drift', genre: 'Sci-Fi', posterUrl: '/images/landing-pic1.png' },
    { id: '2', title: 'RAW', genre: 'Action', posterUrl: '/images/landing-pic2.png' },
    { id: '3', title: 'ASCEND', genre: 'Thriller', posterUrl: '/images/landing-pic3.png' },
    { id: '4', title: 'Neon Nights', genre: 'Cyberpunk', posterUrl: '/images/landing-pic4.png' }
  ];

  return (
    <div className="min-h-screen bg-[#0F1115] text-[#F8FAFC]">
      {/* Top Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-[#0F1115] to-transparent px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/home" className="text-2xl font-black tracking-widest uppercase text-white hover:text-blue-400 transition-colors">
            POPSTREAM
          </Link>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="/home" className="text-white">Home</Link>
            <Link href="#" className="text-gray-300 hover:text-white">Series</Link>
            <Link href="#" className="text-gray-300 hover:text-white">Movies</Link>
            <Link href="#" className="text-gray-300 hover:text-white">My List</Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Search className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
          <Settings className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" />
          <button onClick={handleLogout} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Featured Hero Movie */}
      <div className="relative w-full h-[75vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="/images/landing-pic1.png" alt="Featured" layout="fill" objectFit="cover" className="opacity-50" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-[#0F1115]/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1115] via-[#0F1115]/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-6 lg:px-12 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-lg mb-4 font-righteous">
            COSMIC DRIFT
          </h1>
          <p className="text-lg text-gray-300 mb-8 drop-shadow-md line-clamp-3">
            When humanity's last hope rests on an experimental faster-than-light drive, a crew of outcasts must navigate the treacherous void of deep space to find a new home. 
          </p>
          <div className="flex gap-4">
            <Link href="/movie/1" className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-md font-bold hover:bg-gray-200 transition-colors">
              <Play className="w-5 h-5 fill-current" /> Play
            </Link>
            <button className="flex items-center gap-2 bg-gray-500/50 text-white px-8 py-3 rounded-md font-bold hover:bg-gray-500/70 transition-colors backdrop-blur-sm">
              <Info className="w-5 h-5" /> More Info
            </button>
          </div>
        </div>
      </div>

      {/* Movie Rows */}
      <div className="relative z-20 -mt-24 px-6 lg:px-12 pb-20 space-y-12">
        
        <section>
          <h2 className="text-xl font-bold text-white mb-4">Trending Now</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
            {displayMovies.map((movie, idx) => (
              <Link href={`/movie/${movie.id}`} key={idx} className="flex-none w-48 md:w-64 snap-start group relative rounded-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:z-10 shadow-lg">
                <Image src={movie.posterUrl || "/images/landing-pic2.png"} alt={movie.title} width={256} height={144} className="w-full h-36 md:h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div>
                    <h3 className="font-bold text-white text-sm">{movie.title}</h3>
                    <p className="text-xs text-blue-400 font-medium mt-1">{movie.genre}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">Because you watched RAW</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
            {[...displayMovies].reverse().map((movie, idx) => (
              <Link href={`/movie/${movie.id}`} key={idx} className="flex-none w-48 md:w-64 snap-start group relative rounded-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:z-10 shadow-lg">
                <Image src={movie.posterUrl || "/images/landing-pic3.png"} alt={movie.title} width={256} height={144} className="w-full h-36 md:h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div>
                    <h3 className="font-bold text-white text-sm">{movie.title}</h3>
                    <p className="text-xs text-orange-400 font-medium mt-1">{movie.genre}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
