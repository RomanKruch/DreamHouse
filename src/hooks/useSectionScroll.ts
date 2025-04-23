import { useEffect, useRef } from 'react';

export const useSectionScroll = (sectionIds: string[]) => {
  const currentIndexRef = useRef(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      let newIndex = currentIndexRef.current + direction;

      if (newIndex < 0) newIndex = 0;
      if (newIndex >= sectionIds.length) newIndex = sectionIds.length - 1;

      if (newIndex !== currentIndexRef.current) {
        isScrolling.current = true;
        currentIndexRef.current = newIndex;

        const target = document.getElementById(sectionIds[newIndex]);
        target?.scrollIntoView({ behavior: 'smooth' });

        setTimeout(() => {
          isScrolling.current = false;
        }, 500); 
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [sectionIds]);
};