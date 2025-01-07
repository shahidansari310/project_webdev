//Function for masked password
function m(pass){
    let str="";
    for(let i=0;i<pass.length;i++){
        str+="*";
    }
    return str
}

// Function to copy text to clipboard
function copytext(txt) {
    navigator.clipboard.writeText(txt).then(function() {
        document.getElementById("alert").style.display = "inline";
        setTimeout(() => {
        document.getElementById("alert").style.display = "none";},2000)
    }).catch(function(error) {
        alert('Failed to copy text: ' + error);
    });
}

// Function to delete a website entry from localStorage
const d = (website) => {
    let data = localStorage.getItem("passwords");
    let arr = JSON.parse(data);
    arr = arr.filter((e) => e.website !== website);
    localStorage.setItem("passwords", JSON.stringify(arr));
    alert(`Successfully Deleted ${website}`);
    s(); // Refresh the table after deletion
}

// Function to display saved passwords in the table
const s = () => {
    let t = document.querySelector("table");
    let data = localStorage.getItem("passwords");

    // Clear the table before populating it
    if (data == null || JSON.parse(data).length === 0) {
        t.innerHTML = "<tr><td colspan='4'>No data found</td></tr>";
    } else {
        t.innerHTML = `<tr>
                <th>Website</th>
                <th>Username</th>
                <th>Password</th>
                <th>Delete</th>
            </tr>`;

        let arr = JSON.parse(data);
        arr.forEach((element) => {
            let str = `<tr>
                <td>${element.website} <img onclick="copytext('${element.website}')" src="copy.svg" alt="Copy" height="15" width="15" /></td>
                <td>${element.username} <img onclick="copytext('${element.username}')" src="copy.svg" alt="Copy" height="15" width="15" /></td>
                <td>${m(element.password)} <img onclick="copytext('${element.password}')" src="copy.svg" alt="Copy" height="15" width="15" /></td>
                <td><button class="Submit" onclick="d('${element.website}')">Delete</button></td>
            </tr>`;
            t.innerHTML += str;
        });
    }

    // Clear input fields after displaying data
    document.querySelector("#website").value = "";
    document.querySelector("#username").value = "";
    document.querySelector("#password").value = "";
}

// Add event listener for form submission
document.querySelector(".Submit").addEventListener("click", (e) => {
    e.preventDefault();
    let website = document.querySelector("#website").value;
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    if (!website || !username || !password) {
        alert("Please fill all fields");
        return;
    }

    let passwords = localStorage.getItem("passwords");
    let json = passwords ? JSON.parse(passwords) : [];

    // Add new entry to the array
    json.push({ website, username, password });
    localStorage.setItem("passwords", JSON.stringify(json));
    s(); // Refresh the table
});

// Initial call to display data on page load
s();
