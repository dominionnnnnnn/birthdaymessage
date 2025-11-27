import { useState, useEffect, useRef } from 'react';

export default function BirthdayCard({ showCard }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (showCard && videoRef.current) {
      // Force play when card shows
      videoRef.current.play().catch(err => {
        console.error('Video play failed:', err);
      });
    }
  }, [showCard]);

  return (
    <>
      {/* Birthday Card */}
      {showCard && (
        <div className="fixed inset-0 flex items-center justify-center z-40 p-4 pointer-events-none">
          <div className="relative w-[340px] h-[620px] rounded-3xl shadow-2xl animate-float overflow-hidden pointer-events-auto bg-transparent">
            {/* Video Background */}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ zIndex: 0 }}
            >
              <source src="/video.mp4" type="video/mp4" />
            </video>

            {/* Overlay to darken video slightly for text readability */}
            <div className="absolute inset-0 bg-black/40" style={{ zIndex: 1 }}></div>

            {/* Content - Scrollable */}
            <div className="relative h-full overflow-y-auto p-8 flex flex-col items-center justify-start pt-12" style={{ zIndex: 2 }}>
              {/* Header */}
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 animate-colorChange">
                Happy Birthday Teniola
              </h1>

              {/* Body Text */}
              <div className="text-white text-center space-y-4 max-w-xl">
                <p className="leading-relaxed">
                  Hey bby! ❤<br />
                  Happy Birthday!! 🎉
                </p>
                
                <p className="leading-relaxed">
                  Today is all about celebrating you, but honestly, I celebrate you every single day. I walk around with my head held high just knowing how lucky I am to call you mine. I am so proud to have you in my life Teniola. You make my world brighter, calmer, softer, and so much happier just by being in it.
                </p>
                
                <p className="leading-relaxed">
                  I've been watching you closely and it amazes me how far you've come in such a short time. The way you push yourself, the way you stay graceful even when life gets loud, the way you choose growth even when it's uncomfortable it inspires me more than you know.
                </p>
                
                <p className="leading-relaxed">
                  You are constantly evolving, learning, and becoming an even better version of yourself and seeing that journey up close feels like one of the greatest privileges I've ever had.
                </p>
                
                <p className="leading-relaxed">
                  Please never forget that you don't have to carry anything alone. I'm here fully, willingly and with my whole heart. Whatever you want to pursue, whatever direction you decide to take, I'm in your corner. Whether it's a big career move, a new dream you're chasing, or even a small personal hobby that makes you smile, I'll always be right beside you as your number one supporter as long as it makes you happy.
                </p>
                
                <p className="leading-relaxed">
                  Thank you for letting me love you. Thank you for trusting me with your heart. Thank you for being you, effortlessly special, naturally beautiful, and truly one of one.
                </p>
                
                <p className="leading-relaxed">
                  Let's make this new year of your life the sweetest, calmest, and most fulfilling one yet. More joy, more wins, more laughter, more growth, and more moments we'll look back on and smile.
                </p>
                
                <p className="leading-relaxed font-semibold">
                  I love you wholeheartedly Giggles 🫠🤍
                </p>
                
                <p className="leading-relaxed text-lg border-b pb-6 ">
                  Happy birthday once again my love😍 🫶
                </p>

                <div className="bg-gray-400 h-1px w-62" ></div>

                <p className="leading-relaxed text-xm">
                  With love from Olamide
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes colorChange {
          0% {
            color: #ff6b9d;
          }
          25% {
            color: #ffd93d;
          }
          50% {
            color: #6bcf7f;
          }
          75% {
            color: #4d96ff;
          }
          100% {
            color: #ff6b9d;
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-colorChange {
          animation: colorChange 8s ease-in-out infinite;
        }

        /* Custom scrollbar for the content */
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </>
  );
}