import React from "react";
import {
  FaPencilAlt,
  FaEraser,
  FaUndoAlt,
  FaRedoAlt,
  FaFilePdf,
} from "react-icons/fa";

const Toolbox = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center gap-[2.5rem] absolute left-1/2 top-5 px-5 py-1 bg-neutral-200 w-1/4 trans-x-50">
        <div className="cursor-pointer hover:bg-neutral-300 transition-all p-2">
          <FaPencilAlt size={15} />
        </div>
        <div className="cursor-pointer hover:bg-neutral-300 transition-all p-2">
          <FaEraser size={15} />
        </div>
        <div className="cursor-pointer hover:bg-neutral-300 transition-all p-2">
          <FaUndoAlt size={15} />
        </div>
        <div className="cursor-pointer hover:bg-neutral-300 transition-all p-2">
          <FaRedoAlt size={15} />
        </div>
        <div className="cursor-pointer hover:bg-neutral-300 transition-all p-2">
          <FaFilePdf size={15} />
        </div>
      </div>
    </div>
  );
};

export default Toolbox;
