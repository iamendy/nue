import { motion } from "framer-motion";
import { useState } from "react";
import { v, slide, rotate } from "@/constants/motion";
interface Faq {
  q: string;
  a: string;
}

const Accordion = ({ faq }: { faq: Faq }) => {
  const [isSelected, setSelected] = useState<boolean>(false);

  return (
    <motion.div
      variants={v}
      initial="hidden"
      animate={isSelected ? "visible" : "hidden"}
      className={`pt-5 pb-4 rounded-t-xl border-b border-b-features/20`}
    >
      <div
        className="relative flex items-start space-x-5 z-10 cursor-pointer py-3"
        onClick={() => setSelected(!isSelected)}
      >
        <div className=" mt-1">
          <motion.div variants={rotate} className="cross relative w-4 h-4" />
        </div>
        <h3 className="font-manrope text-[18px] font-medium leading-[130%] pr-3 lg:text-[20px]">
          {faq.q}
        </h3>
      </div>

      <motion.div
        variants={slide}
        className=" text-features pl-9 font-inter text-[16px] leading-[1.5em] pr-3 pt-4 lg:w-[60%]"
      >
        {faq.a}
      </motion.div>
    </motion.div>
  );
};
export default Accordion;
