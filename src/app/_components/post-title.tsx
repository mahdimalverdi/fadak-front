import {ReactNode} from "react";

type Props = {
    children?: ReactNode; date: string;
};

export function PostTitle({children, date}: Props) {
    return (<div className="flex flex-row items-center gap-x-5 mb-12 pt-32">
        <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none ">
            {children}
        </h1>
        <h3>{date}</h3>
    </div>);
}
