import SaveIcon from "../public/images/actions/save.svg";
import RemoveIcon from "../public/images/actions/remove.svg";
import EditIcon from "../public/images/actions/edit.svg";
import LoadIcon from "../public/images/actions/load.svg";
import ClearIcon from "../public/images/actions/clear.svg";

export const jobPackActionsMap = {
  Save: {
    title: "Save List",
    message: "Save your current selections as a List/Template.",
    icon: SaveIcon,
  },
  Remove: {
    title: "Remove Selected List",
    message: "will be removed from you saved list.",
    icon: RemoveIcon,
  },
  Edit: {
    title: "Edit List",
    message: "Please enter new name for your list.",
    icon: EditIcon,
  },
  Load: {
    title: "Load List",
    message: "Current selections will be overridden with the selected list.",
    icon: LoadIcon,
  },
  Clear: {
    title: "Clear Selection",
    message: "Current selections will be cleared.",
    icon: ClearIcon,
  },
};
