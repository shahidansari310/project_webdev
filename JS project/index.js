//Logic for table
let t=document.querySelector("table")
let data=localStorage.getItem("passwords")
if(data==null){
    t.innerHTML="No data found"
}
else{
    let arr=JSON.parse(data)
    for(let i=0;i<arr.length;i++){
        const element=arr[i];


str = `<tr>
    <td>${element.website}</td>
    <td>${element.username}</td>
    <td>${element.password}</td>
    <td>${"Delete"}</td>
</tr>`
t.innerHTML=t.innerHTML+str
}
}


console.log("Working");
document.querySelector(".Submit").addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("Clicked")
    console.log(username.value, password.value)
    let passwords=localStorage.getItem("passwords")
    console.log(passwords)
    if(passwords==null){
        let json=[]
        json.push({username:username.value,password:password.value})
        localStorage.setItem("passwords",JSON.stringify(json))
    }
    else{
        let json=JSON.parse(passwords)
        json.push({username:username.value,password:password.value})
        localStorage.setItem("passwords",JSON.stringify(json))
    }

})