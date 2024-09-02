import { PropsWithChildren } from "react";
export default function SearchContent({ children }: PropsWithChildren) {
    return (
        <div className="flex justify-center mt-[25px] w-[90%] h-[106px] gap-7 2xs:mt-[40px] xs:h-[85px] xs:mt-[10px] sm:h-[106px] sm:mt-[25px] md:h-[115px] md:mt-[28px]">{children}</div>
    );
}
