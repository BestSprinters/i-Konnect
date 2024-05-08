import { useState } from 'react';

import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

const IS_SERVER = typeof window === 'undefined';

const useMediaQuery = (
  query,
  { defaultValue = false, initializeWithValue = true } = {},
) => {
  const getMatches = (mediaQuery) => {
    if (IS_SERVER) {
      return defaultValue;
    }
    return window.matchMedia(mediaQuery).matches;
  };

  const [matches, setMatches] = useState(() => {
    if (initializeWithValue) {
      return getMatches(query);
    }
    return defaultValue;
  });

  function handleChange() {
    setMatches(getMatches(query));
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);

    handleChange();

    if (matchMedia.addEventListener) {
      matchMedia.addEventListener('change', handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }

    return () => {
      if (matchMedia.removeEventListener) {
        matchMedia.removeEventListener('change', handleChange);
      } else {
        matchMedia.removeEventListener('change', handleChange);
      }
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
