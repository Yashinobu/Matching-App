import { PropsWithChildren } from "react";
type Props = PropsWithChildren<{
    title?: string
}>;
export default function RefreshBtn({ children, title }: Props) {
    return (
        <button className="flex rounded-full text-[#5C5F5D] bg-[#FAFB64] text-[20px] font-bold mt-[19px] pl-[23px] pr-[10px] py-[8px] drop-shadow-xl sm:w-[30%]">
            {children}
            {title}
        </button>
    );
}
