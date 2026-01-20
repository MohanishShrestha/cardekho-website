import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { type ReactNode } from "react";

type CustomDropdownProps = {
  label: string;
  items: string[];
  className?: string;
  icon?: ReactNode;
};

export default function CustomDropdown({
  label,
  items,
  className = "",
  icon,
}: CustomDropdownProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`flex items-center gap-1 text-lg bg-transparent hover:bg-transparent focus:bg-transparent ${className}`}
          >
            {icon}
            {label}
            {/* <ChevronDown size={16} /> */}
          </NavigationMenuTrigger>

          <NavigationMenuContent
            className="
              w-(--radix-navigation-menu-trigger-width)
              p-2
              ${className}
            "
          >
            <ul className="flex flex-col gap-1">
              {items.map((item) => (
                <li
                  key={item}
                  className="cursor-pointer rounded-md px-2 py-1 text-sm hover:bg-muted whitespace-nowrap"
                >
                  {item}
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
