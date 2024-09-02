import { PropsWithChildren } from "react";
type Props = PropsWithChildren<{
    title?: string
}>;
export default function TopNav({ children, title }: Props) {
    return (
        <div className="flex justify-center text-[#5C5F5D] py-[5px] drop-shadow-md text-[40px] font-bold w-full h-[68px] shadow-md shadow-b-2 sm:h-[68px] sm:text-[40px] sm:py-[5px] 2xs:h-[63px] 2xs:text-[37px] 2xs:py-[4px] xs:h-[55px] xs:text-[32px] xs:py-[4px] ">{title}
            {children}
        </div>
    );
}
