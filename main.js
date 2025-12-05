const list = document.getElementById("list");
const url = "http://localhost:3000/posts/"
const btnAdd = document.getElementById("add")

const fetchStart = async () => {
    list.innerHTML = ""
    const res = await fetch(url, {
        method: "GET",
        headers: {
            // ONLY JSON
            // postman
            "Content-Type": "application/json",
        }
    });
    const data = await res.json();

    data.map((el) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <h1>userId: ${el.userId}</h1>
        <h2>id: ${el.id}</h2>
        <h3>title: ${el.title}</h3>
        <h4>body: ${el.body}</h4>
        `
        const button = document.createElement("button");
        button.textContent = "Удалить";
        li.appendChild(button);
        list.appendChild(li);
        button.addEventListener("click", () => fetchDelete(el.id));
    });
};

fetchStart()


const fetchDelete = async (id) => {
    const res = await fetch(`${url}${id}`, {
        method: "DELETE",
        headers: {
            // ONLY JSON
            // postman
            "Content-Type": "application/json",
        }
    });
    const data = await res.json();
    console.log(data);
    
    fetchStart()
};


    // {
    //   "userId": 1,
    //   "id": "7",
    //   "title": "magnam facilis autem",
    //   "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    // },


btnAdd.addEventListener("click", async () => {
    const bodyItem = {
        userId: 9,
        title: "lorem-778",
        body: "vbrntbjtngbjtnbj",
    };


    const res = await fetch(url, {
        method: "POST",
        headers: {
            // ONLY JSON
            // postman
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyItem)
    });
    const data = await res.json();
})



const fetchChange = async () => {

    const res = await fetch("http://localhost:3000/posts/1", {
        method: "PUT",
        headers: {
            // ONLY JSON
            // postman
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            userId: 9,
            title: "BitchAHHAHHAHHAHAHAH",
            body: "I smarter than you"
            
        })
    })
    const data = await res.json();
}

fetchChange()