import { ReactNode } from "react";

type ButtonTypes = {
    children: ReactNode;
    color?: "blue";
};

type ButtonStylsProps = {
    color?: "blue";
};

function getButtonStyles({ color = "blue" }: ButtonStylsProps) {
    const baseStyles = "bg-none border-none py-[0.8rem] px-[2rem]";

    const variants = {
        color: {
            blue: "bg-blue-100",
        },
    };

    const colorClasses = variants.color[color];

    return `${baseStyles} ${colorClasses}`;
}

export default function Button({ children, color }: ButtonTypes) {
    return <button className={getButtonStyles({ color })}>{children}</button>;
}
