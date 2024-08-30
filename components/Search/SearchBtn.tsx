import { PropsWithChildren } from "react";
type Props = PropsWithChildren<{
    title1?: string;
    title2?: string;
}>;
export default function SearchBtn({ children, title1, title2 }: Props) {
    return (
        <button className="flex flex-col items-center bg-[#EEEEEE] drop-shadow-md rounded-lg text-[#5B5B5B] px-[10px] py-[5px] w-[25%]">
            {children}
            <label className="text-[12px]">{title1}</label>
            <label className="text-[12px]">{title2}</label>
        </button>
    );
}
