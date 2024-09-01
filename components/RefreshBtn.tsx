import { PropsWithChildren } from "react";
type Props = PropsWithChildren<{
    title?: string
}>;
export default function RefreshBtn({ children, title }: Props) {
    return (
        <button className="flex rounded-full w-[67%] text-[#5C5F5D] bg-[#FAFB64] text-[20pt] font-bold mt-[19pt] pl-[23pt] pr-[10pt] py-[8pt] drop-shadow-xl sm:w-[30%]">
            {children}
            {title}
        </button>
    );
}
