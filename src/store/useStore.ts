import { create } from "zustand";

type FilterState = {
  gender: string;
  name: string;
  ageRange: [number, number];
  setGender: (gender: string) => void;
  setName: (name: string) => void;
  setAgeRange: (ageRange: [number, number]) => void;
};

export const filterState = create<FilterState>((set) => ({
  gender: "",
  name: "",
  ageRange: [0, 100],
  setGender: (gender) => set(() => ({ gender })),
  setName: (name) => set(() => ({ name })),
  setAgeRange: (ageRange) => set(() => ({ ageRange })),
}));
