import { cookies } from "next/headers";
import { ThemeValue } from "../components/ThemeControl";

export const ThemeCookie = {
  _key: "theme",
  get() {
    return cookies().get(this._key)?.value;
  },

  set(value: ThemeValue) {
    cookies().set(this._key, value);
  },
};
