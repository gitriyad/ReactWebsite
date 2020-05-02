import React from 'react';
import SinglePortfolioComponent from './SinglePortfolioComponent.jsx';
import classes from './PortfolioComponent.module.css';
const PortfolioComponent=()=>{
    const ProjectImageArray=[
        {
            id: 1,
            src: "https://thumbs.dreamstime.com/b/beautiful-dandelion-flower-flying-feathers-colorful-bokeh-background-macro-shot-summer-nature-scene-beautiful-dandelion-147400154.jpg"
        },
        {
            id:2,
            src:"https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            id:3,
            src:"https://thumbs.dreamstime.com/b/beautiful-winter-landscape-scene-ice-river-snow-covered-trees-84606857.jpg"
        },
        {
            id:4,
            src:"https://www.lovethispic.com/uploaded_images/82613-Beautiful-Spring-Flowers.jpg"
        },
        {
            id:5,
            src:"https://www.floraqueen.com/blog/wp-content/uploads/2020/02/shutterstock_1009843408.jpg"
        },
        {
            id:6,
            src:"https://www.architectureartdesigns.com/wp-content/uploads/2013/04/tumblr_m7oynl386H1qa7gx5o1_500.jpg"
        },
        {
            id:7,
            src:"https://images.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
        
    ];
    
    return(
        <div>
           <h1 className={classes.headline}>our projects</h1>
            <div className={classes.portContainer}>
           
            {
                ProjectImageArray.map((val,i)=>{
                    return <SinglePortfolioComponent src={val.src} key={val.id} id={i}/>
                })
            }
        </div>
        </div>
        
    );
}
export default PortfolioComponent;