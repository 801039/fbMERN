import React from 'react';
import "./Header.css";
import {ImSearch} from "react-icons/im";
import {AiTwotoneHome,AiFillFlag} from "react-icons/ai";
import {BiMoviePlay,BiChevronDown} from "react-icons/bi";
import {BsShopWindow} from "react-icons/bs";
import {HiOutlineUserGroup,HiOutlinePlusSm,HiChatAlt2} from "react-icons/hi";
import { Avatar, IconButton } from "@material-ui/core";
import {MdOutlineNotificationsActive} from "react-icons/md";

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
                alt=""/>
                <div className='header__input'>
                    <ImSearch/>
                    <input type='text'
                      placeholder='Search Facebook'
                    />
                </div>
            </div>

            <div className='header__center'>
                <div className='header__option header__option__active'>
                <AiTwotoneHome className='icon' />
                </div>
                <div className='header__option'>
                <AiFillFlag className='icon' />
                </div>
                <div className='header__option'>
                <BiMoviePlay className='icon' />
                </div>
                <div className='header__option'>
                <BsShopWindow className='icon' />
                </div>
                <div className='header__option'>
                <HiOutlineUserGroup className='icon' />
                </div>
            </div>

            <div className='header__right'>
                <div className='header__info'>
                    <Avatar/>
                    <h4>Tharindu Sanjitha</h4>
                </div>

                <IconButton>
                    <HiOutlinePlusSm/>
                </IconButton>
                <IconButton>
                    <HiChatAlt2/>
                </IconButton>
                <IconButton>
                    <MdOutlineNotificationsActive/>
                </IconButton>
                <IconButton>
                    <BiChevronDown/>
                </IconButton>
            </div>
        </div>
    )
}

export default Header;


