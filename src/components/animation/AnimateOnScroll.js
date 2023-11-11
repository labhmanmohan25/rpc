import { useEffect, useRef, useState } from "react";

const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const makeAppear = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) setIsVisible(true);
  };

  const makeAppearRepeating = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const callBack = options.reappear ? makeAppearRepeating : makeAppear;

  useEffect(() => {
    const containerRefCurrent = containerRef.current;
    const observer = new IntersectionObserver(callBack, options);
    if (containerRefCurrent) observer.observe(containerRefCurrent);

    return () => {
      if (containerRefCurrent) {
        observer.unobserve(containerRefCurrent);
      }
    };
  }, [containerRef, options, callBack]);

  return [containerRef, isVisible];
};

const AnimateOnScroll = ({ children, reappear, threshold = 0.5, index }) => {
  const [containerRef, isVisible] = useElementOnScreen({
    threshold: threshold,
    reappear: reappear,
  });

  return (
    <>
      <div
        ref={containerRef}
        className={`transition duration-[1500ms] ${
          isVisible
            ? "opacity-100 blur-none translate-y-0"
            : index === 4
            ? "opacity-0 blur-none -translate-y-[5rem]"
            : "opacity-0 blur-none translate-y-[5rem]"
        }  motion-reduce:transition-none motion-reduce:hover:transform-none ${
          index === 0
            ? "delay-[0ms]"
            : index === 1
            ? "delay-[100ms]"
            : index === 2
            ? "delay-[200ms]"
            : index === 3
            ? "delay-[300ms]"
            : index === 4
            ? "delay-[400ms]"
            : "delay-[0ms]"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default AnimateOnScroll;
