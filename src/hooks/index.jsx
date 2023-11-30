import { useEffect, useRef, useState } from "react";

export const useAnimate = (threshold) => {
  const [isObserve, setIsObserve] = useState(false);
  const detectedRef = useRef();
  const observer = useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        setIsObserve(entries[0].isIntersecting);
      },
      { threshold: threshold }
    );

    observer.current.observe(detectedRef.current);

    return () => observer.current.unobserve(detectedRef.current);
  }, []);

  return { detectedRef, isObserve };
};
