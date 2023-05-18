import create from "zustand";
import { persist } from "zustand/middleware";

const useJobPacks = create(
  persist(
    (set) => ({
      jobPacks: [],
      emptyCart: () => set({ jobPacks: [] }),
    }),
    {
      name: "jobPacks",
      getStorage: () => localStorage,
    }
  )
);
export default useJobPacks;
