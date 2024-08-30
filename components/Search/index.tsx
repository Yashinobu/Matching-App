import { PropsWithChildren } from "react";
export default function SearchContent({ children }: PropsWithChildren) {
    return (
        <div className="flex justify-center mt-9 w-[90%] h-[80px] gap-7 sm:w-[35%]">{children}</div>
    );
}
