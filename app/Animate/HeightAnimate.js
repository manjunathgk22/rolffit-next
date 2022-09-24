import { motion } from "framer-motion";

function HeightAnimate({ children, duration = 0.4, style = {} }) {
  return (
    <motion.div
      // initial="hidden"
      whileInView="visible"
      initial={{ opacity: 0, height: 0 }}
      viewport={{ once: true }}
      transition={{ duration }}
      style={style}
      variants={{
        visible: { opacity: 1, height: "auto", overflow: "hidden" },
        hidden: { opacity: 1, height: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default HeightAnimate;
