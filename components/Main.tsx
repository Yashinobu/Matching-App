import { PropsWithChildren } from "react";
export default function MainContent({ children }: PropsWithChildren) {
    return (
        <div className='flex flex-col w-full h-[100%] bg-white items-center'>{children}</div>
    );
}
