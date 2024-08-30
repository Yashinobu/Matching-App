import { PropsWithChildren } from "react";
type Props = PropsWithChildren<{
    title?: string
}>;
export default function RefreshBtn({ children, title }: Props) {
    return (
        <button className="flex rounded-full text-[#5C5F5D] bg-[#FAFB64] text-[15px] font-bold mt-3 px-[10px] py-[7px] drop-shadow-lg">
            {children}
            {title}
        </button>
    );
}
