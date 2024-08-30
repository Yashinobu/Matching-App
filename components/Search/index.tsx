import { PropsWithChildren } from "react";
export default function SearchContent({ children }: PropsWithChildren) {
    return (
        <div className="flex justify-center mt-7 w-[76%] h-[65px] gap-7">{children}</div>
    );
}
