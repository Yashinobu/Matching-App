import { PropsWithChildren } from "react";

export default function BottomNav({ children }: PropsWithChildren) {
    return (
        <div className="flex bg-[#A5A5A5] w-full h-[98px] mt-[30.85px] rounded-t-2xl justify-between gap-10 py-[17px] pl-[45px] pr-[35px]
        xs:mt-[10px] 2xs:mt-[32px] 2xs:h-[95px] xs:h-[70px] xs:py-[9px] sm:h-[106px] sm:py-[20px] sm:mt-[30.85px] md:h-[117px] md:py-[22px]">
            {children}
        </div>
    );
}
