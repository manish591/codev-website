import EventCard from "@/components/EventCard";
import HeroSection from "@/components/HeroSection/HeroSection";
import MemberCard from "@/components/MemberCard";
import Navbar from "@/components/Navbar/Navbar";
import Wrapper from "@/components/Wrapper";

const coreTeamData = [
    { id: 1, name: "Manish Devrani", about: "coding head" },
    { id: 2, name: "Aayush Sharma", about: "coding head" },
    { id: 3, name: "Aniket Kumar", about: "coding head" },
    { id: 4, name: "Name 3", about: "coding head" },
    { id: 5, name: "Name 4", about: "coding head" },
    { id: 6, name: "Name 5", about: "coding head" },
    { id: 7, name: "Name 6", about: "coding head" },
    { id: 8, name: "Name 7", about: "coding head" },
];

export default function Home() {
    return (
        <main className="">
            <Navbar />
            <HeroSection />
            <div className="mt-[10rem]" id="event">
                <Wrapper>
                    <div>
                        <h2 className="text-[2rem] font-medium text-center">Ongoing Events</h2>
                        <div className="mt-[3rem] grid grid-cols-1 lg:grid-cols-3 gap-[2rem]">
                            <EventCard title="Event Name 1" date="12th September 2022" />
                            <EventCard title="Event Name 2" date="20th September 2022" />
                            <EventCard title="Event Name 3" date="23th September 2022" />
                        </div>
                    </div>
                </Wrapper>
            </div>
            <div className="mt-[10rem]" id="#event">
                <Wrapper>
                    <div>
                        <h2 className="text-[2rem] font-medium text-center">Core team</h2>
                        <div className="mt-[2rem] grid grid-cols-1 lg:grid-cols-4 gap-[2rem]">
                            {coreTeamData.map((team) => {
                                return <MemberCard key={team.id} {...team} />;
                            })}
                        </div>
                    </div>
                </Wrapper>
            </div>
            <footer className="mt-[10rem] py-[2rem] bg-gray-100">
                <Wrapper>
                    <h1 className="text-[2rem]">Codev</h1>
                    <ul className="flex gap-4 lg:gap-6">
                        <li className="text-[1.15rem]">
                            <a href="#home">Home</a>
                        </li>
                        <li className="text-[1.15rem]">
                            <a href="#team">Team</a>
                        </li>
                        <li className="text-[1.15rem]">
                            <a href="#event">Event</a>
                        </li>
                    </ul>
                </Wrapper>
            </footer>
        </main>
    );
}
