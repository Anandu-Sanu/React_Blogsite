import React from 'react';
import './style.css';

const Home = props => {
    return(
        <div className='home' style={{marginTop:'0'}}>
            <div className='b'>
            <a href='www.google.com' target="_blank">Posts</a>
            <section class="blog">
        <div class="container" style={{paddingTop:'0px'}}>

            <div class="card" style={{marginTop:'0'}}>
                <div class="image">
                    <img src="./images/card-2.jpg" class="img-fluid" alt=""/>
                    <p class="text-center">Featured</p>
                </div>

                <div class="content text-center">
                    <h3>Live Fitness</h3>
                    <p>posted on July 21, 2016 by Sora Blog</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione veniam eos quae sequi illum earum cumque iure ullam labore delectus, et odio dolore est dicta similique quidem reprehenderit perspiciatis mollitia?
                        <span id="dots">...</span>
                        <span id="more">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus cupiditate rerum perspiciatis officiis quam aut, consequatur iure sed fuga, vero ea magnam ipsa, et minima incidunt temporibus excepturi exercitationem provident.</span>
                    </p>
                    <button onclick="extend()" id="readmore">Read More</button>
                </div>
            </div>

            <div class="card">
                <div class="image">
                    <img src="./images/card-1.jpg" class="img-fluid" alt=""/>
                    <p class="text-center">Featured</p>
                </div>

                <div class="content text-center">
                    <h3>Live Fitness</h3>
                    <p>posted on July 21, 2016 by Sora Blog</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione veniam eos quae sequi illum earum cumque iure ullam labore delectus, et odio dolore est dicta similique quidem reprehenderit perspiciatis mollitia?
                        <span id="dots1">...</span>
                        <span id="more1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus cupiditate rerum perspiciatis officiis quam aut, consequatur iure sed fuga, vero ea magnam ipsa, et minima incidunt temporibus excepturi exercitationem provident.</span>
                    </p>
                    <button onclick="extend()" id="readmore1">Read More</button>
                </div>
            </div>

        </div>
    </section>
            </div>
      <div className='author'>
            <h1>Author</h1>
            <p style={{paddingTop:'60PX'}}>Travel Lovers...!, love to EXPLORE!! 
            </p>
        </div>
       
      
      
        
        </div>
    )
}

export default Home;