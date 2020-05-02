import React from 'react';
import classes from './MarqueeComponent.module.css';
const MarqueeComponent=()=>{
    
    return(
        <div className={classes.marContainer}>
            <ul className={classes.marulelement}>
                <li><img src="https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297__340.jpg" alt="marqueeimage"/></li>
                <li><img src="https://www.bigstockphoto.com/images/homepage/module-6.jpg" alt="marqueeimage"/></li>
                <li><img src="https://images.unsplash.com/photo-1541233349642-6e425fe6190e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="marqueeimage"/></li>
                <li><img src="https://images.pexels.com/photos/433539/pexels-photo-433539.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="marqueeimage"/></li>
                <li><img src="https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687" alt="marqueeimage"/></li>
                <li><img src="https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg" alt="marqueeimage"/></li>
                <li><img src="https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297__340.jpg" alt="marqueeimage"/></li>
                <li><img src="https://www.bigstockphoto.com/images/homepage/module-6.jpg" alt="marqueeimage"/></li>
                <li><img src="https://images.unsplash.com/photo-1541233349642-6e425fe6190e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="marqueeimage"/></li>
                <li><img src="https://images.pexels.com/photos/433539/pexels-photo-433539.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="marqueeimage"/></li>
            </ul>
            
        </div>
    
    );
}
export default MarqueeComponent;