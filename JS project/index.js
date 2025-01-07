//Logic for table
const s=() => {
    let t = document.querySelector("table")
    let data = localStorage.getItem("passwords")
    if (data == null) {
        t.innerHTML = "No data found"
    }
    else {
        t.innerHTML = `<tr>
                <th>Website</th>
                <th> Username</th>
                <th>Password</th>
                <th>Delete</th>
            </tr>`
        let arr = JSON.parse(data)
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];


            str = `<tr>
    <td>${element.website}</td>
    <td>${element.username}</td>
    <td>${element.password}</td>
    <td>${"Delete"}</td>
    </tr>`
            t.innerHTML = t.innerHTML + str
        }
    }
}

console.log("Working");
s()
document.querySelector(".Submit").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Clicked")
    console.log(website.value, username.value, password.value)
    let passwords = localStorage.getItem("passwords")
    console.log(passwords)
    if (passwords == null) {
        let json = []
        json.push({ website: website.value, username: username.value, password: password.value })
        localStorage.setItem("passwords", JSON.stringify(json))
    }
    else {
        let json = JSON.parse(passwords)
        json.push({ website: website.value, username: username.value, password: password.value })
        localStorage.setItem("passwords", JSON.stringify(json))
    }
s();
})