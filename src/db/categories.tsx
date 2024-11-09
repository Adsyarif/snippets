import { FilePlus, MessageSquareWarning, Tv, User, Wrench } from "lucide-react";
import { ReactNode } from "react";

export interface MenuItem {
  link: string;
  icon: ReactNode;
  text: string;
}

export interface MenuGroup {
  group: string;
  items: MenuItem[];
}

export const menuList: MenuGroup[] = [
  {
    group: "General",
    items: [
      {
        link: "/",
        icon: <Tv />,
        text: "All Snippet",
      },
      {
        link: "/snippets/new",
        icon: <FilePlus />,
        text: "Create Snippet",
      },
    ],
  },
  {
    group: "Settings",
    items: [
      {
        link: "#",
        icon: <Wrench />,
        text: "General Settings",
      },
      {
        link: "#",
        icon: <User />,
        text: "Privacy",
      },
      {
        link: "#",
        icon: <MessageSquareWarning />,
        text: "Log",
      },
    ],
  },
];
