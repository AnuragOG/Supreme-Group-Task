import React, { useState, useEffect, useRef } from 'react';

interface VideoOption {
  id: string;
  label: string;
  videoSrc: string;
  thumbnailSrc: string;
}

export const VehicleShowcase = (): JSX.Element => {
  const [activeSection, setActiveSection] = useState<'passenger' | 'commercial'>('passenger');
  const [passengerActiveVideo, setPassengerActiveVideo] = useState('complete-body');
  const [commercialActiveVideo, setCommercialActiveVideo] = useState('complete-body');
  const [rightContentTransition, setRightContentTransition] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);

  const passengerOptions: VideoOption[] = [
    {
      id: 'complete-body',
      label: 'Complete body',
      videoSrc: '/src/assets/videos/Passenger-Alpha.mp4',
      thumbnailSrc: '/src/assets/images/PA.png'
    },
    {
      id: 'front',
      label: 'Front',
      videoSrc: '/src/assets/videos/Passenger-Front.mp4',
      thumbnailSrc: 'src/assets/images/front.png'
    },
    {
      id: 'cabin',
      label: 'Cabin',
      videoSrc: 'src/assets/videos/cabin.mp4',
      thumbnailSrc: '/src/assets/images/front.png'
    },
    {
      id: 'trunk',
      label: 'Trunk',
      videoSrc: '/src/assets/videos/trunk.mp4',
      thumbnailSrc: '/src/assets/images/trunk.png'
    },
    {
      id: 'exterior',
      label: 'Exterior',
      videoSrc: '/src/assets/videos/exterior.mp4',
      thumbnailSrc: '/src/assets/images/exterior.png'
    }
  ];

  const commercialOptions: VideoOption[] = [
    {
      id: 'complete-body',
      label: 'Complete Body',
      videoSrc: '/src/assets/videos/truck.mp4',
      thumbnailSrc: '/src/assets/images/PA.png'
    },
    {
      id: 'engine',
      label: 'Engine',
      videoSrc: '/src/assets/videos/Commercial-Engine.mp4',
      thumbnailSrc: '/src/assets/images/Front.png'
    },
    {
      id: 'cabin',
      label: 'Cabin',
      videoSrc: '/src/assets/videos/Commercial-Cabin.mp4',
      thumbnailSrc: '/src/assets/images/Trunk.png'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Switch to commercial section when scrolled past 60% of viewport
      const shouldShowCommercial = scrollTop > windowHeight * 0.7;
      
      if (shouldShowCommercial && activeSection !== 'commercial') {
        setRightContentTransition(true);
        setTimeout(() => {
          setActiveSection('commercial');
          setRightContentTransition(false);
        }, 300);
      } else if (!shouldShowCommercial && activeSection !== 'passenger') {
        setRightContentTransition(true);
        setTimeout(() => {
          setActiveSection('passenger');
          setRightContentTransition(false);
        }, 300);
      }
      
      if (shouldShowCommercial && activeSection === 'passenger') {
        setActiveSection('commercial');
      } else if (!shouldShowCommercial && activeSection !== 'commercial') {
        setActiveSection('passenger');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); //

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const handleVideoChange = (videoId: string) => {
    if (activeSection === 'passenger') {
      setPassengerActiveVideo(videoId);
    } else {
      setCommercialActiveVideo(videoId);
    }
  };

  const getCurrentVideoSrc = () => {
    const activeVideoId = activeSection === 'passenger' ? passengerActiveVideo : commercialActiveVideo;
    const options = activeSection === 'passenger' ? passengerOptions : commercialOptions;
    const activeOption = options.find(option => option.id === activeVideoId);
    return activeOption?.videoSrc || options[0].videoSrc;
  };

  const getCurrentVideoOptions = () => {
    return activeSection === 'passenger' ? passengerOptions : commercialOptions;
  };

  const getCurrentActiveVideo = () => {
    return activeSection === 'passenger' ? passengerActiveVideo : commercialActiveVideo;
  };

  return (
    <div ref={containerRef} className="w-full bg-black text-white font-['Manrope',sans-serif]">
      {/*  Header */}
      <header className="sticky top-0 z-50 bg-black backdrop-blur-sm ">
        <div className="text-center py-6 px-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light leading-tight max-w-4xl mx-auto">
            Evolving the drive with{' '}
            <span className="font-semibold">360-degree</span>
            <br />
            comprehensive solutions
          </h1>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="relative overflow-hidden -z-0">
        {/* Left Sidebar  */}
        <div className="fixed left-0 top-20 w-1/2 lg:w-2/5 xl:w-1/3 h-screen flex flex-col justify-center px-6 lg:px-12 xl:px-16 z-40">
          {/* Progress Sidebar */}
          <div className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 w-0.5 h-80 bg-white/20">
            <div 
              className={`absolute top-0 w-full transition-all duration-500 ${
                activeSection === 'passenger' ? 'h-40 bg-white' : 'h-20 bg-white/40'
              }`}
            />
            <div 
              className={`absolute bottom-0 w-full transition-all duration-500 ${
                activeSection === 'commercial' ? 'h-40 bg-white' : 'h-20 bg-white/40'
              }`}
            />
          </div>

          <div className={`mb-16 transition-all duration-500 ${
            activeSection === 'passenger' ? 'opacity-100' : 'opacity-40'
          }`}>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">
              Passenger vehicles
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-md leading-relaxed">
              Revving up innovation from interior to exterior.
            </p>
          </div>

          <div className={`transition-all duration-500 ${
            activeSection === 'commercial' ? 'opacity-100' : 'opacity-40'
          }`}>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">
              Commercial vehicles
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-md leading-relaxed">
              Advancing engineering for heavy-duty vehicles.
            </p>
          </div>
        </div>

        {/* Right Content Area - Fixed Position */}
        <div className="fixed right-0 top-20 w-1/2 lg:w-3/5 xl:w-2/3 h-screen flex items-center justify-center px-4 lg:px-6 xl:px-8 z-30">
          <div className={`w-full max-w-3xl mx-auto transition-all duration-500 ${
            rightContentTransition ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
          }`}>
            {/* Video Player */}
            <div className="relative aspect-video rounded-lg shadow-2xl mb-4 -mt-14 overflow-hidden">
              <video
                key={`${activeSection}-${getCurrentActiveVideo()}`}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                 <source src={getCurrentVideoSrc()} type="video/mp4" />
                
                
              </video>
            </div>

            {/* Video Navigation */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {getCurrentVideoOptions().map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleVideoChange(option.id)}
                  className={`group flex flex-col items-center space-y-2 p-3 rounded-lg transition-all duration-300 ${
                    getCurrentActiveVideo() === option.id
                      ? 'opacity-100 scale-105'
                      : 'opacity-70 hover:opacity-90'
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden -mt-20 border-2 border-transparent group-hover:border-white/30 transition-colors">
                    <img
                      src={option.thumbnailSrc}
                      alt={option.label}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement!.style.backgroundColor = '#374151';
                      }}
                    />
                  </div>
                  
                  {/* Label */}
                  <span className="text-xs md:text-sm font-medium text-center leading-tight">
                    {option.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        
        <div className="ml-[50%] lg:ml-[40%] xl:ml-[33.333%]">
          <div className="h-screen"></div> {/* Passenger scroll area */}
          <div className="h-screen"></div> {/* Commercial scroll area */}
        </div>
      </div>
    </div>
  );
};