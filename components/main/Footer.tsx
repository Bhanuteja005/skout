"use client";
import {
    RxDiscordLogo,
    RxLinkedinLogo,
    RxTwitterLogo
} from "react-icons/rx";

import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">


                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[26px]">Community</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer" onClick={() => window.open("https://www.youtube.com/@deepgroove-edits")}>
                            <FaYoutube />
                            <span className="text-[15px] ml-[6px]">Youtube</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxTwitterLogo />
                            <span className="text-[15px] ml-[6px]">X (Twitter)</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">Discord</span>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[26px]">Social Media</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaInstagram />
                            <span className="text-[15px] ml-[6px]">Instagram</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxTwitterLogo />
                            <span className="text-[15px] ml-[6px]">X (Twitter)</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[26px]"><h1>About</h1></div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">

                            <span className="text-[15px] ml-[6px]">Become Sponsor</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">

                            <span className="text-[15px] ml-[6px]">Know About Skout</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">

                            <span className="text-[15px] ml-[6px]">enquiries@skout.com</span>
                        </p>
                    </div>
                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; Skout 2024 Inc. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer