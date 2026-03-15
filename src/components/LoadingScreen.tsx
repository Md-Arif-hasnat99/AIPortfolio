import { useEffect, useState } from 'react';

const FADE_START_MS = 3500;

const LOADING_CARDS = [
  { letter: 'A', color: '#ff5555' },
  { letter: 'R', color: '#5555ff' },
  { letter: 'I', color: '#55aa55' },
  { letter: 'F', color: '#ffaa00' },
];

export default function LoadingScreen() {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => {
      setIsFadingOut(true);
    }, FADE_START_MS);

    return () => {
      window.clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <div className={`loading-splash ${isFadingOut ? 'loading-splash-fade' : ''}`}>
      <div className="loading-card-scene" aria-hidden="true" role="presentation">
        {LOADING_CARDS.map(({ letter, color }, index) => (
          <div key={letter} className={`loading-uno-card loading-card-${index}`} style={{ backgroundColor: color }}>
            <span className="loading-uno-corner loading-uno-corner-top">{letter}</span>

            <div className="uno-card-white-oval loading-uno-oval">
              <div className="loading-uno-letter">{letter}</div>
            </div>

            <span className="loading-uno-corner loading-uno-corner-bottom">{letter}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
