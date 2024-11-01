"use client";

import { BellIcon } from "lucide-react";
import { CommandDemo } from "../command/page";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const Header = () => {
  const [notifications, setNotifications] = useState<any>([
    {
      text: "This is notification",
      date: "02-01-2015",
      read: true,
    },
    {
      text: "This is notification",
      date: "02-01-2015",
      read: false,
    },
  ]);
  return (
    <>
      <div className="grid grid-cols-2 gap-4 border-b p-4 ">
        <CommandDemo />
        <div className="flex items-center justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger className="relative">
              <div
                className={`absolute -top-3 left-3 h-3 w-3 rounded-full my-1 ${
                  notifications.find((x: any) => x.read === true)
                    ? "bg-green-500"
                    : "bg-neutral-200"
                }`}
              ></div>
              <BellIcon className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
              {notifications.map(
                (notification: any, notificationIndex: number) => (
                  <DropdownMenuItem
                    key={notificationIndex}
                    className="p-1 cursonr-pointer hover:bg-neutral-50 transition flex items-start gap-2"
                  >
                    <div
                      className={`h-3 w-3 rounded-full my-1 ${
                        notification.read ? "bg-green-500" : "bg-neutral-200"
                      }`}
                    ></div>
                    <div>
                      <p>{notification.text}</p>
                      <p className="text-xs text-neutral-500 ">
                        {notification.date}
                      </p>
                    </div>
                  </DropdownMenuItem>
                )
              )}
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};

export default Header;
