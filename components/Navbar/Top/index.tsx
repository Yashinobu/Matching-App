import { PropsWithChildren } from "react";
type Props = PropsWithChildren<{
    title?: string
}>;
export default function TopNav({ children, title }: Props) {
    return (
        <div className="flex justify-center text-[#5C5F5D] py-[10pt] drop-shadow-md text-[40pt] font-bold w-full h-[68pt] shadow-md shadow-b-2 sm:w-[40%]">{title}
            {children}
        </div>
    );
}
