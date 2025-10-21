import React from "react";
import { motion } from "framer-motion";

const SkillBadge = ({ skill }) => {
  return (
    <motion.div
      className="bg-white px-4 py-2 rounded-full shadow-md hover:bg-blue-500 hover:text-white transition-colors"
      whileHover={{ scale: 1.1 }}
    >
      {skill}
    </motion.div>
  );
};

export default SkillBadge;
