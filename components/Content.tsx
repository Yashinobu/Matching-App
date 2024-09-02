import { PropsWithChildren } from "react";
export default function HomeContent({ children }: PropsWithChildren) {
    return (
        <div className="w-[90%] mt-[32px] 2xs:mt-[29px] xs:mt-[25px] sm:mt-[32px] md:mt-[35px] relative">{children}</div>
    );
}
