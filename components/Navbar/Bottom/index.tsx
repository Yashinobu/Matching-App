import { PropsWithChildren } from "react";

export default function BottomNav({ children }: PropsWithChildren) {
    return (
        <div className="flex bg-[#A5A5A5] w-full h-[98pt] mt-[30.85pt] rounded-t-2xl justify-between gap-10 pt-[17pt] pl-[45pt] pr-[35pt] sm:w-[40%]">
            {children}
        </div>
    );
}
