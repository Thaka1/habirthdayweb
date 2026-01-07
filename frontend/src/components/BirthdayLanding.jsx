import React, { useState } from 'react';
import { Heart, Sparkles, Music, Video, Image as ImageIcon, Mail, Calendar, Play, Pause, X } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { mockData } from '../mock';

const BirthdayLanding = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleSong = (song) => {
    if (currentSong?.id === song.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-slow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            >
              <Heart className="w-6 h-6 text-pink-200 fill-pink-200 opacity-40" />
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center gap-3">
            <Sparkles className="w-12 h-12 text-rose-400 animate-pulse" />
            <Sparkles className="w-16 h-16 text-pink-500 animate-pulse" style={{ animationDelay: '0.3s' }} />
            <Sparkles className="w-12 h-12 text-rose-400 animate-pulse" style={{ animationDelay: '0.6s' }} />
          </div>

          <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 bg-clip-text text-transparent animate-fade-in">
            {mockData.birthday.name}
          </h1>
          
          <div className="inline-block mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce-slow">
              <Heart className="w-12 h-12 fill-white text-white" />
            </div>
          </div>

          <p className="text-3xl md:text-4xl text-rose-600 font-semibold mb-12 animate-fade-in-delay">
            {mockData.birthday.age}
          </p>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Button 
              onClick={() => scrollToSection('photos')}
              className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white px-6 py-6 rounded-full shadow-lg transition-all hover:scale-105"
            >
              <ImageIcon className="w-5 h-5 mr-2" />
              Photos
            </Button>
            <Button 
              onClick={() => scrollToSection('letter')}
              className="bg-gradient-to-r from-rose-400 to-pink-400 hover:from-rose-500 hover:to-pink-500 text-white px-6 py-6 rounded-full shadow-lg transition-all hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Letter
            </Button>
            <Button 
              onClick={() => scrollToSection('moments')}
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-6 rounded-full shadow-lg transition-all hover:scale-105"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Moments
            </Button>
            <Button 
              onClick={() => scrollToSection('music')}
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-6 py-6 rounded-full shadow-lg transition-all hover:scale-105"
            >
              <Music className="w-5 h-5 mr-2" />
              Music
            </Button>
            <Button 
              onClick={() => scrollToSection('videos')}
              className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-6 py-6 rounded-full shadow-lg transition-all hover:scale-105"
            >
              <Video className="w-5 h-5 mr-2" />
              Videos
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="photos" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-rose-600 mb-4">Beautiful Memories</h2>
            <p className="text-xl text-pink-600">Capturing precious moments together</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockData.photos.map((photo, index) => (
              <div 
                key={photo.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all hover:scale-105 hover:shadow-2xl"
                onClick={() => setSelectedPhoto(photo)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={photo.url} 
                  alt={photo.caption}
                  className="w-full h-80 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-lg font-semibold">{photo.caption}</p>
                    <p className="text-sm text-pink-200">{photo.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Birthday Letter Section */}
      <section id="letter" className="py-20 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Mail className="w-16 h-16 text-rose-500 mx-auto mb-4" />
            <h2 className="text-5xl font-bold text-rose-600 mb-4">{mockData.letter.title}</h2>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm shadow-2xl border-2 border-pink-200">
            <CardContent className="p-12">
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-line text-gray-700 leading-relaxed text-lg">
                  {mockData.letter.content}
                </div>
                <div className="mt-8 text-right">
                  <p className="text-2xl text-rose-500 font-semibold">{mockData.letter.signature}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Moments Timeline Section */}
      <section id="moments" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-rose-600 mb-4">Our Special Moments</h2>
            <p className="text-xl text-pink-600">A timeline of unforgettable memories</p>
          </div>

          <div className="space-y-8">
            {mockData.moments.map((moment, index) => (
              <div 
                key={moment.id}
                className={`flex flex-col md:flex-row gap-6 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-1/2">
                  <img 
                    src={moment.image} 
                    alt={moment.title}
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-2 border-pink-200">
                    <CardContent className="p-6">
                      <p className="text-sm text-pink-500 font-semibold mb-2">{moment.date}</p>
                      <h3 className="text-2xl font-bold text-rose-600 mb-3">{moment.title}</h3>
                      <p className="text-gray-700">{moment.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-20 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Music className="w-16 h-16 text-rose-500 mx-auto mb-4" />
            <h2 className="text-5xl font-bold text-rose-600 mb-4">Birthday Playlist</h2>
            <p className="text-xl text-pink-600">Songs to celebrate you</p>
          </div>

          <div className="space-y-4">
            {mockData.songs.map((song) => (
              <Card 
                key={song.id}
                className="bg-white/80 backdrop-blur-sm shadow-lg border-2 border-pink-200 hover:border-pink-400 transition-all cursor-pointer"
                onClick={() => toggleSong(song)}
              >
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button
                      size="icon"
                      className={`rounded-full ${currentSong?.id === song.id && isPlaying ? 'bg-rose-500 hover:bg-rose-600' : 'bg-pink-400 hover:bg-pink-500'} text-white`}
                    >
                      {currentSong?.id === song.id && isPlaying ? 
                        <Pause className="w-5 h-5" /> : 
                        <Play className="w-5 h-5 ml-0.5" />
                      }
                    </Button>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{song.title}</h3>
                      <p className="text-sm text-gray-600">{song.artist}</p>
                    </div>
                  </div>
                  <span className="text-gray-600">{song.duration}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Video className="w-16 h-16 text-rose-500 mx-auto mb-4" />
            <h2 className="text-5xl font-bold text-rose-600 mb-4">Video Messages</h2>
            <p className="text-xl text-pink-600">Special videos just for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockData.videos.map((video) => (
              <Card 
                key={video.id}
                className="bg-white/80 backdrop-blur-sm shadow-lg border-2 border-pink-200 hover:border-pink-400 transition-all cursor-pointer overflow-hidden group"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-8 h-8 text-rose-500 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{video.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-r from-pink-100 to-rose-100">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-12 h-12 text-rose-500 fill-rose-500 mx-auto mb-4 animate-pulse" />
          <p className="text-2xl text-rose-600 font-semibold mb-2">Wishing you the happiest birthday ever!</p>
          <p className="text-gray-600">May your day be filled with love, joy, and endless smiles</p>
        </div>
      </footer>

      {/* Photo Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <Button
            size="icon"
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full"
            onClick={() => setSelectedPhoto(null)}
          >
            <X className="w-6 h-6" />
          </Button>
          <div className="max-w-4xl max-h-[90vh] overflow-auto">
            <img 
              src={selectedPhoto.url} 
              alt={selectedPhoto.caption}
              className="w-full h-auto rounded-lg"
            />
            <div className="text-center mt-4 text-white">
              <p className="text-2xl font-semibold">{selectedPhoto.caption}</p>
              <p className="text-pink-300 mt-2">{selectedPhoto.date}</p>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedVideo(null)}
        >
          <Button
            size="icon"
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full"
            onClick={() => setSelectedVideo(null)}
          >
            <X className="w-6 h-6" />
          </Button>
          <div className="max-w-4xl w-full">
            <Card className="bg-white/10 backdrop-blur-sm border-pink-400">
              <CardContent className="p-8 text-center">
                <Video className="w-24 h-24 text-white mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">{selectedVideo.title}</h3>
                <p className="text-pink-200 mb-6">Duration: {selectedVideo.duration}</p>
                <p className="text-white/80">Video playback feature - In actual implementation, video would play here</p>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default BirthdayLanding;