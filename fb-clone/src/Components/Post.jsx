import React from 'react';
import './Post.css';
import {Avatar} from "@material-ui/core";
import {BiLike,BiMessage} from "react-icons/bi";
import {RiShareForwardLine} from "react-icons/ri";

function Post({profilePic, image, username, timestamp, message }) {
    return (
        <div className='post'>
            <div className='post__top'>
                <Avatar src={profilePic} className='post__avatar'/>
                <div className='post__topInfo'>
                    <h3>{username}</h3>
                    <p>Timestamp...</p>
                </div>
            </div>

            <div className='post__bottom'>
                <p>{message}</p>
            </div>

            <div className='post__image'>
                <img src={image} alt='' />
            </div>

            <div className='post__options'>
                <div className='post__option'>
                        <BiLike/>
                        <p>Like</p>
                </div>
                <div className='post__option'>
                        <BiMessage/>
                        <p>Comment</p>
                </div>
                <div className='post__option'>
                        <RiShareForwardLine/>
                        <p>Share</p>
                </div>
            </div>

        </div>
    )
}

export default Post;
