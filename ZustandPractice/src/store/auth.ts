import create from "zustand";
import { persist} from "zustand/middleware";

type State = {
  token: string;
  profile: any;
};
type Actions = {
  setToken: (token: string) => void;
  setProfile: (profile: any) => void;
  deleteToken: () => void;
};

export const useCreateAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: "",
      profile: null,
      setToken: (token: string) =>
        set((state) => ({
          token,
        })),
      setProfile: (profile: any) => set((state) => ({ profile })),
      deleteToken: () => set({ token: "" }),
    }),
    {
      name: "auth",
    }
  )
);
