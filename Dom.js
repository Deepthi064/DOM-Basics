/*document.title="DOM in JavaScript";
document.body.style.backgroundColor= "lightblue";
document.getElementById("header").innerHTML="HELLO WORLD!";
document.getElementById("para").innerHTML="Welcome to DOM Manipulation";
document.getElementsByTagName("h1")[1].style.color="red";
document.getElementsByClassName("className")[0].style.color="green";
document.getElementsByClassName("className")[1].style.color="blue";
document.getElementsByClassName("className")[2].style.color="brown";
let deepthi=document.getElementsByClassName("className");
deepthi[0].style.color="purple";
deepthi[1].style.color="blue";
deepthi[2].style.color="pink";*/

/*document.title="DOM in JavaScript";
document.body.style.backgroundColor= "lightblue";
document.getElementById("Mrcet").innerHTML="Hello, World!";
document.getElementById("para").style.color="blue";
document.getElementById("para").style.fontSize="30px";
document.getElementById("Mrcet").style.fontStyle="italic";
document.getElementById("para").style.fontStyle="italic";
document.getElementsByClassName("className").style.color="voilet";
document.getElementsByClassName("className").style.fontSize="30px";*/

document.title="DOM in JavaScript";
document.body.style.backgroundColor= "lightpink";
document.getElementById("header").innerHTML="HELLO WORLD!";
document.getElementById("para").innerHTML="Welcome to DOM Manipulation";
document.getElementsByTagName("h1")[1].style.color="red";
document.getElementsByClassName("DS")[0].style.color="green";
document.getElementsByClassName("DS")[1].style.color="blue";
document.getElementsByClassName("DS")[2].style.color="brown";
let kavya=document.getElementsByClassName("DS");
kavya[0].style.color="red";
kavya[1].style.color="purple";
kavya[2].style.color="black";
kavya[3].style.color="orange";

let kavyaa=document.querySelectorAll(".EB");
kavyaa[0].style.color="red";
kavyaa[1].style.color="purple";
kavyaa[2].style.color="black";
kavyaa[3].style.color="orange";

/*function changeBackground(){
    document.body.style.backgroundColor="skyblue";
    alert("background color is changed to skyblue");
}*/
/*function changeBackground(){
    if (document.body.style.backgroundColor==="red")
    {
        document.body.style.backgroundColor="blue";
    } else {
        document.body.style.backgroundColor="red";
    }
    
}*/

function changeBackground(){
    document.body.style.backgroundColor=document.body.style.backgroundColor==="lightblue"?"red":"yellow";
}
function changetext(){
    document.getElementById("clg").innerHTML="VIT,IIT-Hyderabad";
    document.getElementById("clg").style.backgroundColor="coral";
}