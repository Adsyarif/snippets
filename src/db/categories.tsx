import {
  FilePlus,
  MessageSquareWarning,
  RefreshCcwDot,
  Trash2,
  Tv,
  User,
  Wrench,
} from "lucide-react";

export const menuList = [
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
