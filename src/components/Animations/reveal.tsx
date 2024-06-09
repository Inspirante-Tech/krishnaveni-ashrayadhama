import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Reveal = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const control = useAnimation();

  useEffect(() => {
    if (ref.current) {
      console.log((ref.current as HTMLDivElement).getBoundingClientRect().top);
      if (isInView) {
        control.start("visible").catch((err) => console.log(err));
      } else if (
        (ref.current as HTMLDivElement).getBoundingClientRect().top > 0
      ) {
        control.start("hidden").catch((err) => console.log(err));
      }
    }
  }, [isInView, control]);

  return (
    <div ref={ref} style={{ position: "relative" }} {...props}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={control}
        transition={{
          duration: 0.65,
          delay: 0.25,
        }}
      >
        {props.children}
      </motion.div>
    </div>
  );
};

export default Reveal;
