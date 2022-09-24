import { motion } from "framer-motion";

export function FadeInWhenVisible({ children, duration = 0.5 }) {
  return (
    <motion.div
      // initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration }}
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 200 },
      }}
    >
      {children}
    </motion.div>
  );
}
