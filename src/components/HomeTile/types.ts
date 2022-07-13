import { RootStackParamList } from "../../App";

export type HomeTileProps = {
  content: Tile,
  onPress: () => void
};

export type Tile = {
  id: number;
  backgroundImage: any;
  label: string;
  navigate: keyof RootStackParamList;
  paramType: string;
}

export const tileList: Array<Tile> = [
  {
    id: 1,
    backgroundImage: null,
    label: "Shadow Stones",
    navigate: "Stats",
    paramType: "ShadowStone"
  },
  {
    id: 2,
    backgroundImage: null,
    label: "Adventures",
    navigate: "Filter",
    paramType: "map"
  },
  {
    id: 3,
    backgroundImage: null,
    label: "Items",
    navigate: "Filter",
    paramType: "item"
  },
];
