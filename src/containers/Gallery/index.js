import React from 'react';
import './style.css';

const Gallery = props => {
    return(
        <div className='gallery'>
            <section class="gallery-block cards-gallery">
   	        <div class="container">
   		     <div class="heading">
               <h2>Gallery</h2>
            <div className='block' style={{padding:'60px 0'}}>   
   		     <div class="row">
   			 <div>
   				<div>
                   <a class="lightbox" href="www.google.com" target="_blank" >
					   <img src="./images/china2.jpg" class="card-img-top" alt="image1"/></a>
   					<div class="card-body">
   						<h6>China</h6>	
   					</div>
                </div>	
                </div>	
   			 
   			 <div>
   				<div>
					   <a class="lightbox" href="www.google.com" target="_blank">
						   <img src="./images/german.jpg" class="card-img-top"alt="image2"/></a>
   					<div class="card-body">
   						<h6>Germany</h6>
   						
   					</div>
   				</div>
   			</div>
   			
   			<div>
   				<div>
   					<a class="lightbox" href="www.google.com" target="_blank">
						   <img src="./images/maldevis.jpg" class="card-img-top" alt="image3"/></a>
   					<div class="card-body">
   						<h6>Maldevis</h6>
   						
   					</div>
   				</div>
   			</div>
         </div>
   		 </div>
   		
   		
   		<div class="row">
   			<div>
   				<div>
   					<a class="lightbox" href="www.google.com" target="_blank" >
						   <img src="./images/europe.jpg" class="card-img-top" alt="image4"/></a>
   					<div class="card-body">
   						<h6>Europe</h6>
   						
   					</div>
   				</div>
   			</div>
   			
   			<div>
   				<div>
   					<a class="lightbox" href="www.google.com" target="_blank">
						   <img src="./images/singapore.jpg" class="card-img-top"alt="image5"/></a>
   					<div class="card-body">
   						<h6>singapore</h6>
   						
   					</div>
   				</div>
   			</div>
   			
   			<div>
   				<div>
   					<a class="lightbox" href="www.google.com" target="_blank">
						   <img src="./images/turkey2.jpg" class="card-img-top" alt="image6"/></a>
   					<div class="card-body">
   						<h6>Turkey</h6>
   					
   					</div>
   				</div>
   			</div>
   		</div>
   	</div>
       </div>
   </section>
        </div>
    )
}

export default Gallery;