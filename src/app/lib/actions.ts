"use server";

import { ThemeCookie } from "./cookie";

export async function changeTheme(theme: "light" | "dark") {
  ThemeCookie.set(theme);
}
