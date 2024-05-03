import { useEffect, useState } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    function handleChange() {
      setMatches(window.matchMedia(query).matches);
    }

    const matchMedia = window.matchMedia(query);
    setMatches(matchMedia.matches);

    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
