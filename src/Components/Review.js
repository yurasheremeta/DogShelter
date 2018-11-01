import React , {Component} from 'react';


export const Review = (props) => {
    return(
        <div className="row">
        <form id="reviewTable">
            <h3>Leave your review</h3>
            <div id = "input1">
            <input type="text" placeholder="First name" id="input"/>
            </div>
           <div id="description">
           <textarea placeholder="Description"  rows="5" cols="50"/>
           <button id="submitButton">Submit</button>
           </div>
           

        </form>
        </div>
    )
}