let date = new Date().toLocaleDateString();

const myObj = {
  name: "Joe",
  role: "Choose a role",
  date,
  age: 27,
  status: "online",
};

const arr = [];

const role = ["Admin", "Client", "Saler"];

for (let i = 0; i < 10; i++) {
  arr.push(myObj);
}

function builder(dto) {
  const table = document.querySelector(".myTable");

  dto.forEach((item, index) => {
    const row = `<tr>
                     <td>
                        <p>${item.name}</p>
                        <div class="input">
                        <input class="nameInput" type="text"/> 
                        <button class="btn">Change</button>
                        </div>
                     </td>
                     <td>
                        <select name="role" id="role">
                            <option selected disabled>${item.role}</option>
                            <option value="${role[0]}">${role[0]}</option>
                            <option value="${role[1]}">${role[1]}</option>
                            <option value="${role[2]}">${role[2]}</option>
                        </select>
                     </td>
                     <td>${item.date}</td>
                     <td>${item.age}</td>
                     <td>${item.status}</td>
                   </tr>`;
    table.innerHTML += row;
  });
}

const myBtns = document.querySelectorAll(".btn");
const inp = document.querySelectorAll(".nameInput");

myBtns.forEach((item, index) => {
    item.addEventListener("click", () => {
      const value = inp[index].value;
      
      
    })
})

window.onload = builder(arr);






