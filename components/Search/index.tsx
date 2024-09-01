import { PropsWithChildren } from "react";
export default function SearchContent({ children }: PropsWithChildren) {
    return (
        <div className="flex justify-center mt-[25pt] w-[90%] h-[106pt] gap-7 sm:w-[35%]">{children}</div>
    );
}
