import { COLORS, MENU_ITEMS } from "@/utils/Namespaces";
import { useSelector, useDispatch } from "react-redux";
import { changeColor, changeBrushSize } from "@/slices/toolboxSlice";

const MenuBar = () => {
  const { activeMenuItem } = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBrushToolOption =
    activeMenuItem === MENU_ITEMS.PENCIL || MENU_ITEMS.ERASER;

  const updateBrushSize = (e) => {
    dispatch(changeBrushSize({ item: activeMenuItem, size: e.target.value }));
  };

  const updateColor = (newColor) => {
    dispatch(changeColor({ item: activeMenuItem, color: newColor }));
  };

  return (
    <div className="p-5 absolute top-1/4 left-5 w-64 rounded-md shadow-lg">
      {showStrokeToolOption && (
        <div className="mb-5">
          <h4 className="text-sm font-bold text-neutral-800">Stroke Color</h4>
          <div className="flex justify-between mt-2">
            <div
              style={{ backgroundColor: COLORS.BLACK }}
              onClick={() => updateColor(COLORS.BLACK)}
              className="h-5 w-5 mr-1 rounded-sm cursor-pointer hover:border-2 hover:border-neutral-700"
            />
            <div
              style={{ backgroundColor: COLORS.BLUE }}
              onClick={() => updateColor(COLORS.BLUE)}
              className="h-5 w-5 mr-1 rounded-sm cursor-pointer hover:border-2 hover:border-neutral-700"
            />
            <div
              style={{ backgroundColor: COLORS.GREEN }}
              onClick={() => updateColor(COLORS.GREEN)}
              className="h-5 w-5 mr-1 rounded-sm cursor-pointer hover:border-2 hover:border-neutral-700"
            />
            <div
              style={{ backgroundColor: COLORS.ORANGE }}
              onClick={() => updateColor(COLORS.ORANGE)}
              className="h-5 w-5 mr-1 rounded-sm cursor-pointer hover:border-2 hover:border-neutral-700"
            />
            <div
              style={{ backgroundColor: COLORS.RED }}
              onClick={() => updateColor(COLORS.RED)}
              className="h-5 w-5 mr-1 rounded-sm cursor-pointer hover:border-2 hover:border-neutral-700"
            />
            <div
              style={{ backgroundColor: COLORS.YELLOW }}
              onClick={() => updateColor(COLORS.YELLOW)}
              className="h-5 w-5 mr-1 rounded-sm cursor-pointer hover:border-2 hover:border-neutral-700"
            />
          </div>
        </div>
      )}
      {showBrushToolOption && (
        <div>
          <h4 className="text-sm font-bold text-neutral-800">
            Brush Size {activeMenuItem}
          </h4>
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
      )}
    </div>
  );
};

export default MenuBar;
