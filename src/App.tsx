import { useEffect, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Portfolio from './pages/Portfolio';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => window.clearTimeout(loadingTimer);
  }, []);

  return isLoading ? <LoadingScreen /> : <Portfolio />;
}

export default App;
