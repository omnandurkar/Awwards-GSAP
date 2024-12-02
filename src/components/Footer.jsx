import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";



const Footer = () => {
    return (
        <footer className="w-screen bg-[#5542ff] py-4 text-white">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-center text-sm font-light md:text-left">
                    Zentry Re-build 2024.
                </p>

                <div className="flex gap-5">
                    <a href="https://www.omnandurkar.me/" target="_blank" className="text-center group  text-white text-sm font-light hover:underline md:text-right">
                        Re-developed by<span className="underline"> Om Nandurkar</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;