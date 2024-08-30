import { PropsWithChildren } from "react";

export default function BottomNav({ children }: PropsWithChildren) {
    return (
        <div className="flex bg-[#A5A5A5] w-full h-[75px] mt-10 rounded-t-2xl justify-between gap-5 pt-2 pl-4 pr-4 sm:w-[40%]">
            {children}
        </div>
    );
}
