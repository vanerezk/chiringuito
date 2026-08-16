import {useEffect, useRef, useState} from 'react';

function Reveal({children, className = '', delay = 0}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {threshold: 0.15},
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-item ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{transitionDelay: `${delay}ms`}}>
      {children}
    </div>
  );
}

export default Reveal;
