"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Play, Pause, Maximize, Volume2 } from "lucide-react";
import Image from "next/image";

export default function MoviePlayer() {
  const { id } = useParams();
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Check auth
    if (!localStorage.getItem("popstream_token")) {
      router.push("/signin");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col">
      
      {/* Mock Video Player Layer */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image 
          src={id === '2' ? '/images/landing-pic2.png' : id === '3' ? '/images/landing-pic3.png' : '/images/landing-pic1.png'} 
          alt="Movie" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-40" 
        />
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Play State Overlay */}
        {!isPlaying && (
          <button 
            onClick={() => setIsPlaying(true)}
            className="z-10 bg-white/10 backdrop-blur-md p-6 rounded-full hover:bg-white/20 transition-all hover:scale-110"
          >
            <Play className="w-16 h-16 fill-white text-white" />
          </button>
        )}
      </div>

      {/* Top Controls Overlay */}
      <div className="absolute top-0 w-full p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent z-20">
        <button onClick={() => router.back()} className="flex items-center gap-2 hover:text-gray-300 transition-colors">
          <ArrowLeft className="w-6 h-6" /> Back to Browse
        </button>
      </div>

      {/* Bottom Controls Overlay */}
      <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent z-20">
        
        {/* Progress Bar */}
        <div className="w-full h-1 bg-gray-600 rounded-full mb-6 cursor-pointer group relative">
          <div className="h-full bg-red-600 w-1/3 rounded-full relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform scale-150"></div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-gray-300">
              {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current" />}
            </button>
            <button className="hover:text-gray-300">
              <Volume2 className="w-6 h-6" />
            </button>
            <span className="text-sm font-medium">
              34:12 <span className="text-gray-500">/</span> 1:52:43
            </span>
          </div>

          <div className="flex items-center gap-6 text-xl font-bold tracking-widest text-gray-300 font-righteous">
            {id === '2' ? 'RAW' : id === '3' ? 'ASCEND' : 'COSMIC DRIFT'}
          </div>

          <div className="flex items-center gap-6">
            <button className="hover:text-gray-300">
              <Maximize className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
