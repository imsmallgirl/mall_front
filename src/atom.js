import { atom } from "recoil";

const loginedAtom = atom({
  key: "logined",
  default: false,
});

export default loginedAtom;
