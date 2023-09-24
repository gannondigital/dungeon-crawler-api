import monsters from "../game-data/monsters/monsters.json" assert { type: "json" };

export const getAllMonsters = async () => {
  return monsters;
};
