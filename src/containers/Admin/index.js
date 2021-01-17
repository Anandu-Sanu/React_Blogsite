import React from "react";
import './style.css';

const Admin = props => {
   return(
    <div className='a'>
        <div className='container'>
        <form action="/home/uploadfiles" method="post" enctype="multipart/form-data">
            <label>Title   : </label>
            <input type='text' />
            <label for="subject">Add Content   :</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{height:'200px'}}></textarea>
            <label>Upload Image/Video   :  </label>
            <input type='file'/><br/>
            <br/>
            <input type="submit" value="Submit"/>
        </form>
        </div>
        <div className='author' style={{marginTop:'20px'}}>
            <p style={{paddingTop:'40px'}}>Anandu Sanu <br/>Phone : 7012114737<br/>Email : Anandhuzanu@gmail.com<br/>Instagram : worldonthe_rim</p>
            
        </div>
    </div>  
    
   ) 
}
export default Admin;

