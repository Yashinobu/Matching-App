import { PropsWithChildren } from "react";
type Props = PropsWithChildren<{
    title?: string
}>;
export default function RefreshBtn({ children, title }: Props) {
    return (
        <button className="flex rounded-full text-[#5C5F5D] bg-[#FAFB64] text-[20px] font-bold mt-[19px] pl-[23px] pr-[10px] py-[8px] drop-shadow-xl 2xs:text-[18px] 2xs:mt-[17px] 2xs:pl-[21px] 2xs:pr-[9px] 2xs:py-[7px] xs:text-[16px] xs:mt-[15px] xs:pl-[18px] xs:pr-[8px] xs:py-[6px] sm:text-[20px] sm:mt-[19px] sm:pl-[23px] sm:pr-[10px] sm:py-[8px] md:text-[22px] md:mt-[21px] md:pl-[25px] md:pr-[11px] md:py-[9px]">
            {children}
            {title}
        </button>
    );
}
