import { useCallback, useState } from "react";

function useResize(): [number, (el: HTMLDivElement | null) => void] {
  const [width, setWidth] = useState(0);

  const ref = useCallback((el: HTMLDivElement | null) => {
    if (el) setWidth(el.clientWidth);
  }, []);

  return [width, ref];
}

export default useResize;
