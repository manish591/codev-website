import { ReactNode } from "react";

type WrapperTypes = {
    children: ReactNode;
};

export default function Wrapper({ children }: WrapperTypes) {
    return <div className="w-11/12 max-w-[1200px] mx-auto">{children}</div>;
}
