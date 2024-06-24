import { changeTheme } from "../lib/actions";
import { ThemeCookie } from "../lib/cookie";

export type ThemeValue = "light" | "dark";

export default async function ThemeControl() {
  const value = ThemeCookie.get();
  const action = changeTheme.bind(null, value === "light" ? "dark" : "light");
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold">Current Theme: {value}</h1>
      <form action={action} className="flex">
        <button className="mt-10 rounded-md bg-rose-500 w-full text-white text-xl p-3">
          Toggle Theme
        </button>
      </form>
    </div>
  );
}
