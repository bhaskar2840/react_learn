import react from "react";

function Heading(){
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

return <div><h1 className="heading">My Favourite Foods</h1> 
<p style={coustomStyles}>{greetings}</p> </div>

}

export default Heading;