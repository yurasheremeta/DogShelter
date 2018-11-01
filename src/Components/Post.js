import React , {Component} from 'react';
import { mockBreeds } from '../mock';
import Apiclient from '../ApiClient';


     class Post extends Component{
        
        render(){
            return(
                    
                      this.props.breeds.map((title, index) =>(
                        <div key={index}>
                      <img src={title} id="image"></img>
                    
                    <p>{`title ${index+1}`}</p>
                    </div>
                      ))
                      
            )
        }

             
        }



export default Post;

