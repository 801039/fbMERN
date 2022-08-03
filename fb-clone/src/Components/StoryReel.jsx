import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story
                image="https://res.cloudinary.com/practicaldev/image/fetch/s--BZKzNZfi--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mm7vbimkwsnnxl7wv2gh.jpg"
                profileSrc="https://cdn.hashnode.com/res/hashnode/image/upload/v1625843938622/x6dBrA6-h.jpeg?w=400&h=400&fit=crop&crop=faces&auto=compress"
                title="Tharindu Sanjitha"
            />
            <Story
                image="https://i.guim.co.uk/img/media/9bbaa85c91fe55de14f83e11ee33e7352388bfdd/430_195_2987_1793/master/2987.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=f9fc787e98bae78e398c432ffb789394"
                profileSrc="https://www.juventus.com/images/image/private/t_portrait_mobile/dev/t5mex3dyn30xi3ox6ii5.jpg"
                title="Cristiano Ronaldo"
            />
            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0MK2l9er0XH8_4mwJoYz5OYk61rJMGBZz9g&usqp=CAU"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Bruce_Lee_1973.jpg/220px-Bruce_Lee_1973.jpg"
                title="Bruce_Lee"
            />
            <Story
                image="https://talksport.com/wp-content/uploads/sites/5/2019/06/goldberg-taker-696x392.jpg?strip=all&w=696&quality=100"
                profileSrc="https://upload.wikimedia.org/wikipedia/commons/0/05/Bill_Goldberg_Boerne_01_%28cropped%29.jpg"
                title="Bill Goldberg"
            />
            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkCJBD2QI3UHwS0-aJm65FoXNHT7BW16sMdw&usqp=CAU"
                profileSrc="https://static.india.com/wp-content/uploads/2015/05/enrique.jpg"
                title="Enrique Iglesias"
            />
        </div>
    )

}

export default StoryReel;
