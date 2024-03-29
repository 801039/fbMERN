import React, {useState} from 'react';
import './MessageSender.css';
import {Avatar} from "@material-ui/core";
import {BsFillCameraVideoFill} from "react-icons/bs";
import {MdPhotoLibrary,MdTagFaces} from "react-icons/md";

function MessageSender() {
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
	e.preventDefault();

    //some clever db stuff

    setInput('');
    setImageUrl('');

    };

    return (
        <div className='messageSender'>
            <div className='messageSender__top'>
                <Avatar />
                <form>
                    <input value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    className='messageSender__input' 
                    placeholder={'Whats on your mind?'}
                    />
	
                    <input value={imageUrl} 
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder='image URL (Optional)' />

		            <button onClick={handleSubmit} type='submit'>
			            Hidden Submit
		            </button>
		        </form>
	        </div>

            <div className='messageSender__bottom'>
                <div className='messageSender__option'>
                    <div className="messageSender__option">
                    <BsFillCameraVideoFill style={{color:'red'}}/>
                    <h3>Live Video</h3>
                    </div>
                    <div className="messageSender__option">
                    <MdPhotoLibrary style={{color:'green'}} />
                    <h3>Photo/Video</h3>
                    </div>
                    <div className="messageSender__option">
                    <MdTagFaces style={{color:'yellow'}} />
                    <h3>Feeling/Activity</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
