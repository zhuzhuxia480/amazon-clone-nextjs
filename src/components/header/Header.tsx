import React from 'react';
import Image from "next/image";
import logo from "../../images/logo.png"
import {CiLocationOn} from "react-icons/ci";
import {BiCaretDown} from "react-icons/bi";
import {HiOutlineSearch} from "react-icons/hi";

const Header = () => {
    return (
        <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
            <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
                {/*logo*/}
                <div
                    className="px-2 border border-transparent hover:border-white cursor-pointer duration-500 items-center justify-center h-[70%]">
                    <Image className="w-28 object-cover" src={logo} alt="logo"></Image>
                </div>
                {/*deliver*/}
                <div
                    className="px-2 border border-transparent hover:border-white cursor-pointer duration-500 items-center justify-center h-[70%]">
                    <CiLocationOn/>
                    <div className="text-xs">
                        <p>Deliver to</p>
                        <p className="text-white font-bold uppercase">US</p>
                    </div>
                </div>
                {/*search*/}
                <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
                    <input
                        className="w-full h-full rounded-md px-2 placeholder:text-sm text-black border-[3px] border-transparent focus:outline-none focus:border-amazon_yellow"
                        type="text" placeholder="Search amazon products"/>
                    <span
                        className="w-12 h-full bg-amazon_yellow text-black text-3xl flex items-center justify-center absolute right-0 rounded-md rounded-br-md">
                        <HiOutlineSearch/>
                    </span>
                </div>
                {/*signin*/}
                <div>

                </div>
            </div>
        </div>
    );
}

export default Header;












