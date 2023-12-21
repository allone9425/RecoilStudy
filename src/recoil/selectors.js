import { selector } from "recoil";
import { isLoggedInState } from "./atoms";

export const userNameSelector = selector({
  key: "userNameSelector",
  get: ({ get }) => {
    const isLoggedIn = get(isLoggedInState);
    return isLoggedIn ? "홍길동" : "방문자";
  },
});
