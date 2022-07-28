import { useEffect, useState } from "react";

function useDebounce(value: number, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;

// import {useCallback, useEffect, useState} from "react";

// function useDebounce(value: () => void, delay: number): void {
//   const [debouncedValue, setDebouncedValue] = useState(value);
//
//   const debounce = useCallback((func : () => void, delay : number) => {
//
//   }, [])
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       value();
//     }, delay);
//
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [delay]);
// }
//
// export default useDebounce;
