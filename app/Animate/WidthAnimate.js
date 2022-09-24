import { motion } from "framer-motion";

function WidthAnimate({ children, duration = 0.5, style = {} }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration }}
      style={style}
      variants={{
        visible: { opacity: 1, width: "auto" },
        hidden: { opacity: 1, width: 20 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default WidthAnimate;
