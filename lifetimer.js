let isDOBOpen=false;
const cogel=document.getElementById("cog");
const scontel=document.getElementById("scont");

const toggle = () => {
    if (isDOBOpen) {
        scontel.classList.add("hide");
    } else {
        scontel.classList.remove("hide");
    }
    isDOBOpen = !isDOBOpen;
    console.log("toggle", isDOBOpen);
};

cogel.addEventListener("click",toggle);