import { PropsWithChildren } from "react";
export default function MainContent({ children }: PropsWithChildren) {
    return (
        <div className='flex relative flex-col w-full h-[100%] bg-[#ff8437] items-center md:h-[926px] sm:h-[844px] xs:h-[667px] 2xs:h-[780px]'>{children}</div>
    );
}
