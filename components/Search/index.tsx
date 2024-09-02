import { PropsWithChildren } from "react";
export default function SearchContent({ children }: PropsWithChildren) {
    return (
        <div className="flex justify-center mt-[25px] w-[90%] h-[106px] gap-7">{children}</div>
    );
}
