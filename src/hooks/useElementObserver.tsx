import { useEffect, useRef, useState } from "react";

const useElementObserver = (elRef: any) => {
  const [size, setSize] = useState(0);
  const observer = useRef(
    new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      setSize(width);
    })
  );

  useEffect(() => {
    if (elRef.current) {
      observer.current.observe(elRef.current);
    }
    return () => {
      observer.current.unobserve(elRef.current);
    };
  }, [elRef, observer]);
  return size;
};
export default useElementObserver;
