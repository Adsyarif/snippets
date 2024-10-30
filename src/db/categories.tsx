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
        link: "/snippets/new",
        icon: <FilePlus />,
        text: "Create",
      },
      {
        link: "/snippets/view",
        icon: <Tv />,
        text: "Read",
      },
      {
        link: "/snippets/update",
        icon: <RefreshCcwDot />,
        text: "Update",
      },
      {
        link: "/snippets/delete",
        icon: <Trash2 />,
        text: "Delete",
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
