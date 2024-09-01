import React, { PropsWithChildren, MouseEvent } from 'react';

type Props = PropsWithChildren<{
    title?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}>;
export default function ItemBtn({ children, title, onClick }: Props) {
    return (
        <button className="flex flex-col items-center" onClick={onClick}>
            {children}
            <label className="text-[16pt] font-bold text-[#c9c9c9]">{title}</label>
        </button>
    );
}
