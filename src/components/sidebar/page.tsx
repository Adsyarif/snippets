import Link from "next/link";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../ui/command";
import UserItem from "../userItem/page";
import { menuList } from "@/db/categories";

const Sidebar = () => {
  return (
    <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command style={{ overflow: "visible" }}>
          <CommandList style={{ overflow: "visible" }}>
            {menuList.map((menu: any, menuIndex: number) => (
              <CommandGroup key={menuIndex} heading={menu.group}>
                {menu.items.map((item: any, itemIndex: number) => (
                  <Link href={item.link} key={itemIndex}>
                    <CommandItem className="flex gap-2 hover:bg-gray-600 cursor-pointer">
                      {item.icon}
                      {item.text}
                    </CommandItem>
                  </Link>
                ))}
              </CommandGroup>
            ))}
            <CommandSeparator />
          </CommandList>
        </Command>
      </div>
    </div>
  );
};

export default Sidebar;
