import { PropsWithChildren } from "react";
type Props = PropsWithChildren<{
    title?: string
}>;
export default function TopNav({ children, title }: Props) {
    return (
        <div className="flex justify-center text-[#5C5F5D] py-[5px] drop-shadow-md text-[40px] font-bold w-full h-[68px] shadow-md shadow-b-2 sm:w-[40%]">{title}
            {children}
        </div>
    );
}
