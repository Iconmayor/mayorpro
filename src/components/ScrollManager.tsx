import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * Centralized scroll management.
 * - New navigation to a page (PUSH/REPLACE) starts at the top.
 * - A hash URL (#section-id) scrolls to that section after it renders,
 *   below the fixed header (see scroll-margin-top in index.css).
 * - Browser Back/Forward (POP) keeps the browser's own scroll restoration.
 */
const ScrollManager: React.FC = () => {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const timer = window.setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        }
      }, 80);
      return () => window.clearTimeout(timer);
    }

    if (navType === 'PUSH' || navType === 'REPLACE') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
    // POP: intentionally left to native browser scroll restoration
  }, [pathname, hash, navType]);

  return null;
};

export default ScrollManager;
