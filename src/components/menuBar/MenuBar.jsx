import { COLORS } from "@/utils/Namespaces";

const MenuBar = () => {
  const updateBrushSize = () => {};

  return (
    <div className="p-5 absolute top-1/4 left-5 w-64 rounded-md shadow-lg">
      <div className="mb-5">
        <h4 className="text-sm font-bold text-neutral-800">Stroke Color</h4>
        <div className="flex justify-between mt-2">
          <div
            className="h-5 w-5 mr-1 rounded-sm cursor-pointer hover:border-2 hover:border-neutral-700"
            style={{ backgroundColor: COLORS.BLACK }}
          />
          <div
            className="h-5 w-5 mr-1 rounded-sm cursor-pointer hover:border-2 hover:border-neutral-700"
            style={{ backgroundColor: COLORS.BLUE }}
          />
          <div
            className="h-5 w-5 mr-1 rounded-sm cursor-pointer hover:border-2 hover:border-neutral-700"
            style={{ backgroundColor: COLORS.GREEN }}
          />
          <div
            className="h-5 w-5 mr-1 rounded-sm cursor-pointer hover:border-2 hover:border-neutral-700"
            style={{ backgroundColor: COLORS.ORANGE }}
          />
          <div
            className="h-5 w-5 mr-1 rounded-sm cursor-pointer hover:border-2 hover:border-neutral-700"
            style={{ backgroundColor: COLORS.RED }}
          />
          <div
            className="h-5 w-5 mr-1 rounded-sm cursor-pointer hover:border-2 hover:border-neutral-700"
            style={{ backgroundColor: COLORS.YELLOW }}
          />
        </div>
      </div>
      <div>
        <h4 className="text-sm font-bold text-neutral-800">Brush Size</h4>
        <div>
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            onChange={updateBrushSize}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
