import create from "zustand";
import { persist } from "zustand/middleware";

const useFittingCart = create(
  persist(
    (set) => ({
      fittings: [],
      emptyCart: () => set({ fittings: [] }),
    }),
    {
      name: "cart",
      getStorage: () => localStorage,
    }
  )
);
export default useFittingCart;
