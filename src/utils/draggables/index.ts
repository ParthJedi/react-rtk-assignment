import { arrayMove } from "@dnd-kit/sortable";
import { IActionItemsList } from "../types";

export const rearrangemenentFn = (
  event: import("@dnd-kit/core").DragEndEvent,
  entity: IActionItemsList[]
) => {
  const { active, over } = event;
  let rearangedList: IActionItemsList[] = [];
  if (active.id !== undefined && over?.id !== undefined) {
    const originalPosition = entity?.findIndex((item) => item.id === active.id);
    const newPosition = entity?.findIndex((item) => item.id === over?.id);
    if (originalPosition !== undefined && newPosition !== undefined) {
      rearangedList = arrayMove(entity ?? [], originalPosition, newPosition);
    }
  }
  // if (active.id === over?.id) return;
  return rearangedList;
};
