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
                <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-500 items-center
              justify-center h-[70%]">
                    <Image className="w-28 object-cover" src={logo} alt="logo"></Image>
                </div>
                <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-500 items-center
              justify-center h-[70%]">
                    <CiLocationOn/>
                    <div className="text-xs">
                        <p>Deliver to</p>
                        <p className="text-white font-bold uppercase">US</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;