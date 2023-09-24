import items from "../game-data/items/items.json" assert { type: "json" };

export const getAllItems = async () => {
  return items;
};
