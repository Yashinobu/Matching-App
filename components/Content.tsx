import { PropsWithChildren } from "react";
export default function HomeContent({ children }: PropsWithChildren) {
    return (
        <div className="w-[90%] mt-3 relative">{children}</div>
    );
}
