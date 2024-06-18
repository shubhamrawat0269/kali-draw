import { actionItemClick, menuItemClick } from "@/slices/menuSlice";
import { MENU_ITEMS } from "@/utils/Namespaces";
import React from "react";
import {
  FaPencilAlt,
  FaEraser,
  FaUndoAlt,
  FaRedoAlt,
  FaFilePdf,
} from "react-icons/fa";
import { useDispatch } from "react-redux";

const Toolbox = () => {
  const dispatch = useDispatch();

  const handleMenuClick = (itemName) => {
    dispatch(menuItemClick(itemName));
  };

  const handleActionItemClick = (itemName) => {
    dispatch(actionItemClick(itemName));
  };

  return (
    <div className="">
      <div className="flex justify-center items-center gap-[2.5rem] absolute left-1/2 top-5 px-5 py-1 border-2 rounded-lg border-neutral-200 w-1/4 trans-x-50">
        <div
          onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}
          className="cursor-pointer hover:bg-neutral-300 active:bg-neutral-300 transition-all p-2"
        >
          <FaPencilAlt size={15} />
        </div>
        <div
          onClick={() => handleMenuClick(MENU_ITEMS.ERASER)}
          className="cursor-pointer hover:bg-neutral-300 active:bg-neutral-300 transition-all p-2"
        >
          <FaEraser size={15} />
        </div>
        <div
          onClick={() => handleActionItemClick(MENU_ITEMS.UNDO)}
          className="cursor-pointer hover:bg-neutral-300 active:bg-neutral-300 transition-all p-2"
        >
          <FaUndoAlt size={15} />
        </div>
        <div
          onClick={() => handleActionItemClick(MENU_ITEMS.REDO)}
          className="cursor-pointer hover:bg-neutral-300 active:bg-neutral-300 transition-all p-2"
        >
          <FaRedoAlt size={15} />
        </div>
        <div
          onClick={() => handleActionItemClick(MENU_ITEMS.DOWNLOAD)}
          className="cursor-pointer hover:bg-neutral-300 active:bg-neutral-300 transition-all p-2"
        >
          <FaFilePdf size={15} />
        </div>
      </div>
    </div>
  );
};

export default Toolbox;
