let isDOBOpen=false;
let dob
const cogel=document.getElementById("cog");
const scontel=document.getElementById("scont");
const initialel=document.getElementById("initial");
const afterel=document.getElementById("after");
const dobButtonel=document.getElementById("dobButton");
const dobInputel=document.getElementById("dobInput");



const toggle = () => {
    if (isDOBOpen) {
        scontel.classList.add("hide");
    } else {
        scontel.classList.remove("hide");
    }
    isDOBOpen = !isDOBOpen;
    console.log("toggle", isDOBOpen);
};

const setdobhandler =() =>{
    dateofbirth=dobInputel.value;
    console.log(dateofbirth);

}

cogel.addEventListener("click",toggle);
dobButtonel.addEventListener("click",setdobhandler);