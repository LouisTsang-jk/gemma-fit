"use client";
import { Listbox, ListboxItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  UtensilsCrossed,
  Dumbbell,
  Moon,
  Stethoscope,
} from "lucide-react";

/** Navigation items configuration */
const navItems = [
  // {
  //   key: "dashboard",
  //   label: "Dashboard",
  //   href: "/dashboard",
  //   icon: LayoutDashboard,
  // },
  {
    key: "report",
    label: "Report",
    href: "/report",
    icon: LayoutDashboard,
  },
  {
    key: "food",
    label: "Food",
    href: "/food",
    icon: UtensilsCrossed,
  },
  {
    key: "sport",
    label: "Sport",
    href: "/sport",
    icon: Dumbbell,
  },
  {
    key: "sleep",
    label: "Sleep",
    href: "/sleep",
    icon: Moon,
  },
  // {
  //   key: "medical",
  //   label: "Medical",
  //   href: "/medical",
  //   icon: Stethoscope,
  // },
] as const;

export default function Navigation() {
  const pathname = usePathname();

  return (
    <Listbox aria-label="Navigation">
      {navItems.map(({ key, label, href, icon: Icon }) => (
        <ListboxItem
          key={key}
          href={href}
          as={Link}
          startContent={<Icon className="w-4 h-4" />}
          className={`py-4 ${pathname === href ? "bg-default-100" : ""}`}
        >
          {label}
        </ListboxItem>
      ))}
    </Listbox>
  );
}
