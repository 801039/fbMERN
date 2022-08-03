import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import {FaHospital,FaChevronDown,FaFacebookMessenger,FaYoutube,FaUserFriends,FaFlag} from "react-icons/fa";
import {BsShopWindow} from "react-icons/bs";
import { Avatar } from "@material-ui/core";

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow src='https://cdn.hashnode.com/res/hashnode/image/upload/v1625843938622/x6dBrA6-h.jpeg?w=400&h=400&fit=crop&crop=faces&auto=compress' 
        title={'Tharindu Sanjitha'} />
      <SidebarRow Icon={FaHospital} title='Covin 19 Information Center' />
      <SidebarRow Icon={FaFlag} title='Pages'/>
      <SidebarRow Icon={FaUserFriends} title='Friends'/>
      <SidebarRow Icon={FaFacebookMessenger} title='Messenger'/>
      <SidebarRow Icon={BsShopWindow} title='Marketplace'/>
      <SidebarRow Icon={FaYoutube} title='Video'/>
      <SidebarRow Icon={FaChevronDown} title='Other'/>
    </div>
  )
}

export default Sidebar;

