import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const StatsCounter = ({ value, suffix = '', label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);
  
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-deep-green">{count}{suffix}</div>
      <div className="text-gray-600 mt-2">{label}</div>
    </div>
  );
};
export default StatsCounter;