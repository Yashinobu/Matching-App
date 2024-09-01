import { PropsWithChildren } from "react";

export default function BottomNav({ children }: PropsWithChildren) {
    return (
        <div className="flex bg-[#A5A5A5] w-full h-[98px] mt-[30.85px] rounded-t-2xl justify-between gap-10 py-[17px] pl-[45px] pr-[35px] sm:w-[40%]">
            {children}
        </div>
    );
}
