import { IoTriangle } from "react-icons/io5";

interface Props {
    className?: string;
    children: React.ReactNode;
}

export function PriceCard({ children, className }: Props) {
    return <div className={`${className} priceCard`}>{children}</div>;
}

export function PriceCardTitle({ children }: { children: React.ReactNode }) {
    return <div className="w-full shadow-md h-8 lg:h-14 priceCardTitle  bg-primary text-white rounded-t-lg font-bold lg:text-xl flex items-center justify-center flex-col">
        {children}
        <IoTriangle className="text-primary 
         relative -bottom-2 lg:-bottom-6 w-10 h-10 lg:w-20 lg:h-20 rotate-180"/>
    </div>;
}

export function PriceCardAmount({ children }: { children: React.ReactNode }) {
    return <div className="w-full priceCardAmount flex justify-center items-center font-bold text-primary text-2xl lg:text-4xl mt-4 lg:mt-14 ">{children}</div>;
}

export function PriceCardContent({ children }: { children: React.ReactNode }) {
    return <div className="w-full h-full priceCardContent">{children}</div>;
}