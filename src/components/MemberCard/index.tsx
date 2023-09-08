import Image from "next/image";

type MemberCardTypes = {
    name: string;
    about: string;
};

export default function MemberCard({ name, about }: MemberCardTypes) {
    return (
        <div className="bg-gray-100 rounded-lg shadow-lg">
            <div className="h-[200px]">
                <Image src="/placeholder.webp" alt="placeholder" width="900" height="200" className="rounded-md" />
            </div>
            <div className="p-[1rem]">
                <h2 className="text-[1.25rem]">{name}</h2>
                <p className="mt-1">{about}</p>
                <div className="flex items-center gap-[1rem] mt-[2rem]">
                    <Image src="/github.svg" alt="github" width="30" height="30" />
                    <Image src="/twitter.svg" alt="twitter" width="30" height="30" />
                    <Image src="/linkedin.svg" alt="linkedin" width="30" height="30" />
                </div>
            </div>
        </div>
    );
}
