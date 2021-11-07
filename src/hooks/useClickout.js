import { useState, useRef, useEffect } from "react";

export default function useClickout() {
  const [click, setClick] = useState(false);

  const refClick = useRef(null);

  const handleClick = () => setClick(!click);
  const handleClickOutside = (e) => {
    if (refClick && !refClick.current.contains(e.target)) {
      setClick(click);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [click]);

  return { handleClick, click, refClick };
}
