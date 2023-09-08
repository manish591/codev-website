import Wrapper from "../Wrapper";

export default function Navbar() {
    return (
        <nav className="py-4">
            <Wrapper>
                <div className="flex justify-between items-center">
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
                </div>
            </Wrapper>
        </nav>
    );
}
