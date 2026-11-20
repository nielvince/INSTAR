import { Image as RNImage } from "react-native";

export type Pin = {
  id: string;
  title: string;
  image: number; // result of require("...")
  ratio: number; // width / height
  creator: { name: string; avatarUrl: string };
};

const CREATOR = {
  name: "hunny",
  avatarUrl: "https://picsum.photos/seed/hunny-avatar/96/96",
};

function makePin(id: string, file: number, title: string): Pin {
  const imageModule = RNImage as any;
  const src =
    imageModule?.resolveAssetSource?.(file) ?? imageModule?.default?.resolveAssetSource?.(file);
  const width = typeof src?.width === "number" ? src.width : 1;
  const height = typeof src?.height === "number" && src.height !== 0 ? src.height : 1;

  return { id, title, image: file, ratio: width / height, creator: CREATOR };
}

// ADD YOUR OWN PICTURES HERE: [require(...), "Title"]
const PICTURES: [number, string][] = [
  [require("../../assets/images/591d604f-882d-4452-91f3-e982ee041da3 (1).jpg"), "SELFIE"],
  [require("../../assets/images/3caadbd5-4273-464c-a58d-cd06460cd6ff.jpg"), "WITH MY PAPS"],
  [require("../../assets/images/698f9e58-917b-480b-bcd9-54df8ba1bb6f.jpg"), "MOUNTAIN"],
  [require("../../assets/images/5f62e96e-8b2e-43fe-b050-1431e616ee92 (1).jpg"), "BUKID"],
  [require("../../assets/images/b266a3cc-fb82-41a0-af0f-64d16341552d.jpg"), "PIZZA!"],
  [require("../../assets/images/d612bb4b-a1d3-4ecd-abeb-b7a0e7c4d5c6.jpg"), "CHINGAY"],
];

export const BASE_PINS: Pin[] = PICTURES.map(([file, title], i) =>
  makePin(String(i + 1), file, title)
);

/** Page 0 is your list; later pages repeat it (rotated) so the feed keeps scrolling. */
export function makePage(page: number): Pin[] {
  if (page === 0) return BASE_PINS;
  const n = page % BASE_PINS.length;
  return [...BASE_PINS.slice(n), ...BASE_PINS.slice(0, n)].map((p) => ({
    ...p,
    id: `${p.id}~${page}`,
  }));
}
