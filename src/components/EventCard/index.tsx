import Image from "next/image";
import Button from "../Button";

type EventCardProps = {
    title: string;
    date: string;
};

export default function EventCard({ title, date }: EventCardProps) {
    return (
        <div className="bg-gray-100 rounded-md shadow-lg">
            <div className="border h-[200px]">
                <Image src="/placeholder.webp" alt="placeholder" width="900" height="200" className="rounded-md" />
            </div>
            <div className="p-[1rem]">
                <h2 className="text-[1.5rem]">{title}</h2>
                <p className="mt-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibul</p>
                <div className="mt-[1rem]">
                    <p className="font-medium">{date}</p>
                    <p>For Btech ans BCA 2nd year</p>
                </div>
                <div className="mt-[1rem]">
                    <Button>Register Here</Button>
                </div>
            </div>
        </div>
    );
}
