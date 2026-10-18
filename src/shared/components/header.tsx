import { author, mail } from "@/constants/strings";
import { Link } from "@tanstack/react-router";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Roll from "./ui/roll";

const nav = [
  { name: "WORK ©", hash: "work" },
  { name: "ABOUT", hash: "about" },
  { name: "REACH OUT", hash: "contact" },
];

function useLocalTime() {
  const [time, setTime] = useState<string>();
  useEffect(() => {
    const format = () =>
      new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        timeZone: "Asia/Phnom_Penh",
      });
    setTime(format());
    const id = setInterval(() => setTime(format()), 15_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="label hover:opacity-60"
      aria-label="Toggle theme"
    >
      <span className="dark:hidden">[DARK]</span>
      <span className="hidden dark:inline">[LIGHT]</span>
    </button>
  );
}

function Clock() {
  const time = useLocalTime();
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase leading-none tracking-[0.1em] text-[#080707]">
      PNH[KH]
      <span className="tabular-nums">{time ?? "--:--"}</span>
      <span className="blink h-1.5 w-1.5 rounded-full bg-[#080707]" />
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  const links = nav.map((item) => (
    <Link
      key={item.hash}
      to="/"
      hash={item.hash}
      onClick={() => setOpen(false)}
      className="label"
    >
      <Roll>{item.name}</Roll>
    </Link>
  ));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line/20 bg-paper">
      <div className="gutter grid h-14 grid-cols-[1fr_auto] items-center gap-4 md:grid-cols-3">
        <Link to="/" className="label" onClick={() => setOpen(false)}>
          <Roll>[{author.toUpperCase()}]</Roll>
        </Link>
        <nav className="hidden items-center justify-center gap-10 md:flex lg:gap-[70px]">
          {links}
        </nav>
        <div className="flex items-center justify-end gap-5">
          <ThemeButton />
          <span className="hidden sm:inline-flex">
            <Clock />
          </span>
          <button
            type="button"
            className="label md:hidden"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? "[CLOSE]" : "[MENU]"}
          </button>
        </div>
      </div>
      {open && (
        <nav className="gutter flex flex-col gap-5 border-t border-line/20 py-6 md:hidden">
          {links}
          <a href={"mailto:" + mail} className="label">
            SAY HELLO
          </a>
          <span className="sm:hidden">
            <Clock />
          </span>
        </nav>
      )}
    </header>
  );
}

export default Header;
