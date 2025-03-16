"use client";
import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{bounceStiffness: 100, bounceDamping: 30}}
      className="relative flex-shrink-0 w-60 h-70 rounded-[45px] bg-zinc-600/90 px-3 py-5 overflow-hidden"
    >
      <FaRegFileAlt color="#fff"/>
      <p className="text-xl text-cyan-400 font-light leading-5 font-roboto mt-2">
        {data.desc}
      </p>
      <div className="footer absolute bottom-0 left-0 w-full grid">
        <div className="flex justify-between items-center px-8 py-3">
          <h5>{data.fileSize}</h5>
          <span className="w-6 h-6 bg-zinc-200 rounded-full flex items-center justify-center">
            {data.close ? <IoClose /> : <LuDownload size="0.9em" />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } py-3 px-2 flex items-center justify-center`}
          >
            <h3 className="text-md text-white font-semibold">
              {data.tag.tagTitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
