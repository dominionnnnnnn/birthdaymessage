import React, { useEffect, useState } from 'react';

const ConfettiBackground = ({ isActive = false }) => {
  const [particles, setParticles] = useState([]);
  const [balloons, setBalloons] = useState([]);
  const [confetti, setConfetti] = useState([]);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    // Generate confetti
    const newConfetti = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 2,
      color: ['#FF6B9D', '#C44569', '#FFA07A', '#FFD700', '#87CEEB', '#9B59B6'][Math.floor(Math.random() * 6)],
      rotation: Math.random() * 360
    }));
    setConfetti(newConfetti);

    // Generate balloons
    const newBalloons = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 90,
      delay: Math.random() * 3,
      duration: 8 + Math.random() * 4,
      color: ['#FF69B4', '#FF1493', '#FFB6C1', '#FFC0CB', '#DB7093', '#C71585'][Math.floor(Math.random() * 6)],
      size: 40 + Math.random() * 30
    }));
    setBalloons(newBalloons);

    // Generate particles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 4 + Math.random() * 3,
      color: ['#FFB6C1', '#FF69B4', '#87CEEB', '#FFD700', '#DDA0DD'][Math.floor(Math.random() * 5)],
      size: 3 + Math.random() * 5
    }));
    setParticles(newParticles);

    // Generate sparkles
    const newSparkles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 2 + Math.random() * 2
    }));
    setSparkles(newSparkles);
  }, []);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200 overflow-hidden">
      {/* Confetti */}
      {confetti.map((item) => (
        <div
          key={`confetti-${item.id}`}
          className="absolute w-3 h-3 animate-fall"
          style={{
            left: `${item.left}%`,
            top: '-20px',
            backgroundColor: item.color,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            transform: `rotate(${item.rotation}deg)`
          }}
        />
      ))}

      {/* Balloons */}
      {balloons.map((balloon) => (
        <div
          key={`balloon-${balloon.id}`}
          className="absolute animate-float"
          style={{
            left: `${balloon.left}%`,
            bottom: '-100px',
            animationDelay: `${balloon.delay}s`,
            animationDuration: `${balloon.duration}s`,
          }}
        >
          <div
            className="relative rounded-[100%] shadow-lg"
            style={{
              width: `${balloon.size}px`,
              height: `${balloon.size * 1.2}px`,
              backgroundColor: balloon.color,
            }}
          >
            <div
              className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2"
              style={{
                width: '2px',
                height: '40px',
                backgroundColor: '#888',
              }}
            />
          </div>
        </div>
      ))}

      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={`particle-${particle.id}`}
          className="absolute rounded-full animate-drift opacity-60"
          style={{
            left: `${particle.left}%`,
            bottom: '-20px',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={`sparkle-${sparkle.id}`}
          className="absolute animate-twinkle"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
          }}
        >
          <div className="relative w-2 h-2">
            <div className="absolute inset-0 bg-yellow-300 rotate-45 transform scale-x-150" />
            <div className="absolute inset-0 bg-yellow-300 transform scale-y-150" />
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-100vh) translateX(20px);
          }
          100% {
            transform: translateY(-120vh) translateX(-10px);
          }
        }

        @keyframes drift {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(-100vh) translateX(30px);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fall {
          animation: fall linear infinite;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-drift {
          animation: drift linear infinite;
        }

        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ConfettiBackground;