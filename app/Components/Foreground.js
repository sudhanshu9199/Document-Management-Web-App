"use client";
import React, {useRef} from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "Project Proposal - Final.pdf card in which I am.",
      fileSize: "1.2Mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now!", tagColor: "green" },
    },
    {
      desc: "Resume_2025.pdf .",
      fileSize: "850KB",
      close: true,
      tag: { isOpen: true, tagTitle: "Uploaded", tagColor: "green" },
    },
    {
      desc: "Client Contract - Signed.pdf Used for the Server approve.",
      fileSize: "2.1Mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now!", tagColor: "green" },
    },
    {
      desc: "Meeting Notes - Q2.docx.",
      fileSize: "600Kb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now!", tagColor: "blue" },
    },
    {
      desc: "Market Research Report.pdf.",
      fileSize: "1.8Mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now!", tagColor: "green" },
    },
  ];
  return (
    <div
      ref={ref}
      className="bg-transparent w-full h-full fixed top-0 left-0 z-[3] flex gap-8 flex-wrap p-2"
    >
      {data.map((item, index) => (
        <>
          <Card key={index} data={item} reference={ref} />
        </>
      ))}
    </div>
  );
};

export default Foreground;
