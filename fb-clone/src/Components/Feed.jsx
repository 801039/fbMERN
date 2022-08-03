import React from 'react';
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className='feed'>
            {/* Story Carousal */}
            <StoryReel/>
            {/* Post Sender */}
            <MessageSender />

            <Post
            profilePic='https://cdn.hashnode.com/res/hashnode/image/upload/v1625843938622/x6dBrA6-h.jpeg'
            message='Nice'
            timestamp='Just to check'
            username='Tharindu Sanjitha'
            image='https://academy.avast.com/hubfs/New_Avast_Academy/Hackers/Hacker-Thumb-a1.png'
            />

            <Post
            profilePic='http://www.sott.net/image/s14/287961/full/Pauling.jpg'
            message='Nice'
            timestamp='Just to check'
            username='Linus Carl'
            image='https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2014/12/best-linux-soft.jpg'
            />
            
        </div>
    )
}

export default Feed;