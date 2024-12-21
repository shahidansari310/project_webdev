document.addEventListener("DOMContentLoaded",function(){


    const searchbutton=document.getElementById("search");
    const usernamei=document.getElementById("userr");
    const statscont=document.querySelector(".downcontent");
    const easyy=document.querySelector(".easy");
    const mediumm=document.querySelector(".medium");
    const hardd=document.querySelector(".hard");
    const elabel=document.querySelector(".easyt");
    const mlabel=document.querySelector(".mediumt");
    const hlabel=document.querySelector(".hardt");
    const cardstatcont=document.querySelector(".statcard");


    // const username=usernamei.value;

    function validateunsername(username){
        if(username.trim()===""){
            alert("Username Should not be empty")
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);
        if(!isMatching) {
            alert("Invalid Username");
        }
        return isMatching;
    }
    async function fetchUserDetails(username) { 
        
        
         try{
            searchbutton.textContent="Searching ....."
            searchbutton.disabled=true;

            // const response=await fetch(url);
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/' 
            const targetUrl = 'https://leetcode.com/graphql/';

            const myHeaders = new Headers();
            myHeaders.append("content-type", "application/json");

            const graphql = JSON.stringify({
                query: "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
                variables: { "username": `${username}` }
             })
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: graphql,
            };
            const response=await fetch(proxyUrl+targetUrl,requestOptions);


            if(response.ok){
               throw new Error("Unable to fetch details");
            }
            const data=await response.json();
            console.log("Loggin data:", data);
            
            displayuserdata(data);
        }
        catch(error){
            statscont.innerHTML="<p>No Data Found !</p>"
        }
        finally{
            searchbutton.textContent="Search";
            searchbutton.disabled=false;
        }
    }

    function displayuserdata(data){
        const 
    }



    searchbutton.addEventListener('click',function(){
        const username=usernamei.value;
        console.log("loggin user:",username);
        if(validateunsername(username)){
            fetchUserDetails(username);
       }
    })
})