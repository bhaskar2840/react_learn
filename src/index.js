import React from "react"; //this is how we import react packages.
import ReactDOM from "react-dom";

const coustomStyle ={color:"red", // it will take the value in {key:"value"} pair only
fontSize:"20px",
boder:"1px solid black"} ;   // this is done to do inline styling in jsx file or you can do that in css style sheets too.


coustomStyle.color = "blue"; // we can edit the style using javascript properties too. 

const img = "https://picsum.photos/200"; 

const date = new Date();
const time= date.getHours();

let greetings;
const coustomStyles ={color:""};

if (time<12){
  greetings="good morning"; 
coustomStyles.color="red";}
else if(time<18){
  greetings="good afternoon";
coustomStyles.color="green"}
else{
  greetings="good night";
coustomStyles.color="blue";}




ReactDOM.render(
  <div>
    <h1 style={coustomStyle}> LET US EAT </h1>
    <p style={coustomStyles}>{greetings}</p>
    <h1 className="heading">My Favourite Foods</h1> 
    <img alt="random" src={img + "?grayscale"} />

    <img
      className="food-img"
      alt="bacon"
      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg?crop=0.645xw:0.967xh;0.170xw,0.0204xh&resize=480:*"
    />
    <img
      className="food-img"
      alt="jamon"
      src="https://images-na.ssl-images-amazon.com/images/I/71lNrnbMXsL._SL1200_.jpg"
    />
    <img
      className="food-img"
      alt="noodles"
      src="https://www.errenskitchen.com/wp-content/uploads/2014/04/quick-and-easy-chinese-noodle-soup3-1.jpg"
    />
  </div>,
  document.getElementById("root")
);
