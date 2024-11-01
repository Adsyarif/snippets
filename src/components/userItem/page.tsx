import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserItem = () => {
  return (
    <div className="flex items-center justify-between gap-2 border rounded-[8px] p-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@adsyarif" />
        <AvatarFallback>MA</AvatarFallback>
      </Avatar>
      <div className="grow">
        <p className="text-[16px] font-bold">Muhammad Adrisa</p>
        <p className="text-[12px] text-neutral-500">@adsyarif</p>
      </div>
    </div>
  );
};

export default UserItem;
