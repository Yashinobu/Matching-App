import { PropsWithChildren } from "react";
type Props = PropsWithChildren<{
    title?: string
}>;
export default function TopNav({ children, title }: Props) {
    return (
        <div className="flex justify-center text-[#5C5F5D] pt-4 drop-shadow-md text-[22pt] font-bold w-full h-[70px] shadow-md shadow-b-2 sm:w-[40%]">{title}
            {children}
        </div>
    );
}
