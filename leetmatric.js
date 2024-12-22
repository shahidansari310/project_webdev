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


            if(!response.ok){
               throw new Error("Unable to fetch details");
            }
            const parsedData=await response.json();
            console.log("Loggin data:", parsedData);
            
            displayuserdata(parsedData);
        }
        catch(error){
            statscont.innerHTML=`<p>${error.message}</p>`
        }
        finally{
            searchbutton.textContent="Search";
            searchbutton.disabled=false;
        }
    }
    function updateProgress(solved,total,label,circle){
        const progress=(solved/total)*100;
        circle.style.setProperty("--progress-degree",`${progress}%`);
        label.textContent=`${solved}/${total}`;
    }

    function displayuserdata(parsedData){
        const totalQues = parsedData.data.allQuestionsCount[0].count;
        const totalEasyQues = parsedData.data.allQuestionsCount[1].count;
        const totalMediumQues = parsedData.data.allQuestionsCount[2].count;
        const totalHardQues = parsedData.data.allQuestionsCount[3].count;

        const solvedTotalQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const solvedTotalEasyQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const solvedTotalMediumQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const solvedTotalHardQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count;
       
        updateProgress(solvedTotalEasyQues, totalEasyQues, elabel, easyy);
        updateProgress(solvedTotalMediumQues, totalMediumQues, mlabel, mediumm);
        updateProgress(solvedTotalHardQues, totalHardQues, hlabel, hardd);


        const cardsData = [
            {label: "Overall Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[0].submissions },
            {label: "Overall Easy Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[1].submissions },
            {label: "Overall Medium Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[2].submissions },
            {label: "Overall Hard Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[3].submissions },
        
        ];
        cardstatcont.innerHTML = cardsData.map(
            data => 
                    `<div class="card">
                    <h4>${data.label}</h4>
                    <p>${data.value}</p>
                    </div>`
        ).join("")

    }



    searchbutton.addEventListener('click',function(){
        const username=usernamei.value;
        console.log("loggin user:",username);
        if(validateunsername(username)){
            fetchUserDetails(username);
       }
    })
})