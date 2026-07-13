import React from 'react';
import { Play, Plus, ThumbsUp, X, Volume2, Info } from 'lucide-react';

// All data is hardcoded here to keep this file self-contained
const movieData = {
  title: "Money Heist",
  match: "98% Match",
  year: "2023",
  seasons: "5 Seasons",
  rating: "TV-MA",
  description: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
  cast: "Álvaro Morte, Itziar Ituño, Pedro Alonso, more",
  genres: "Heist, Crime, Drama",
  episodes: [
    { id: 1, title: "Pilot", duration: "48m", description: "The Professor recruits eight people to carry out the biggest heist in history." },
    { id: 2, title: "Upside Down", duration: "45m", description: "The first problems arise inside the Mint, and the police begin their investigation." },
    { id: 3, title: "The Perfect Plan", duration: "42m", description: "The Professor monitors the police from the outside while tensions rise inside." },
  ]
};

export default function MovieDetails() {
  return (
    <div className="bg-[#141414] text-white min-h-screen">
      {}
      <div 
        className="relative h-[400px] w-full bg-slate-800 flex items-end p-8 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'linear-gradient(to top, #141414, transparent), url("https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1000&auto=format&fit=crop")' 
        }}
      >
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{movieData.title}</h1>
          <div className="flex gap-4 items-center">
            <button className="bg-white text-black px-8 py-2 rounded font-bold flex items-center gap-2 hover:bg-gray-200">
              <Play size={20} fill="black" /> Play
            </button>
            <button className="bg-gray-600/50 p-3 rounded-full hover:bg-gray-600 border border-gray-500">
              <Plus size={20} />
            </button>
            <button className="bg-gray-600/50 p-3 rounded-full hover:bg-gray-600 border border-gray-500">
              <ThumbsUp size={20} />
            </button>
          </div>
        </div>
      </div>

      {}
      <div className="p-8 grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-green-500 font-bold">{movieData.match}</span>
            <span>{movieData.year}</span>
            <span className="border px-1 text-xs">{movieData.rating}</span>
            <span>{movieData.seasons}</span>
          </div>
          <p className="text-gray-300 text-sm">{movieData.description}</p>
        </div>
        <div className="text-sm space-y-2 text-gray-400">
          <p><span className="text-gray-500">Cast:</span> {movieData.cast}</p>
          <p><span className="text-gray-500">Genres:</span> {movieData.genres}</p>
        </div>
      </div>

      <div className="px-8 pb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Episodes</h2>
          <select className="bg-[#242424] text-white p-2 rounded border border-gray-600">
            <option>Season 1</option>
          </select>
        </div>
        
        {movieData.episodes.map((ep) => (
          <div key={ep.id} className="flex items-center gap-4 py-4 border-b border-gray-700 hover:bg-[#242424] px-2 rounded transition">
            <span className="text-xl text-gray-400 w-8">{ep.id}</span>
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-semibold">{ep.title}</h3>
                <span className="text-gray-400 text-sm">{ep.duration}</span>
              </div>
              <p className="text-gray-400 text-xs mt-1">{ep.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}