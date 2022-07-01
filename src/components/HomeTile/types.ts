import { RootStackParamList } from "../../App";

export type HomeTileProps = {
  content: Tile,
  onPress: () => void
};

export type Tile = {
  id: Number;
  backgroundImage: any;
  label: String;
  navigate: keyof RootStackParamList;
  paramType?: String;
}

export const tileList: Array<Tile> = [
  {
    id: 1,
    backgroundImage: null,
    label: "Shadow Stones",
    navigate: "Stats"
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
