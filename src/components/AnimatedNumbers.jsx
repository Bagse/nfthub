import React, { useState, useEffect } from "react";
import MotionNumber from "motion-number";
import { useInView } from "react-intersection-observer";
export function AnimatedNumbers({ value, sign, text }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    if (inView) {
      setAnimatedValue(value);
    } else {
      setAnimatedValue(0);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      {inView && (
        <>
          <div>
            <MotionNumber
              value={animatedValue}
              format={{ notation: "compact" }} // Formato compacto: muestra "400k+"
              locales="en-US"
              transition={{
                layout: { type: "spring", duration: 0.7, bounce: 0 },
                y: { type: "spring", duration: 0.7, bounce: 0.25 },
                opacity: { duration: 0.7, times: [0, 0.3] },
              }}
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                transition: "all ease-out",
              }}
              className="dark:text-white"
            />
            <span className="font-bold text-5xl dark:text-white">{sign}</span>
          </div>
          <span className="text-[#7B7583] text-xs">{text}</span>
        </>
      )}
    </div>
  );
}
