const input = document.getElementById("inputs");
const add = document.getElementById("add");
const textInput = document.getElementById("text-input");

let todo = [];

window.onload = () => {
  todo = JSON.parse(localStorage.getItem("allTasks")) || [];
  todo.forEach((task) => Add(task));
};

add.addEventListener("click", () => {
  if (textInput.value.length > 2 && !todo.includes(textInput.value)) {
    todo.push(textInput.value);
    Add(textInput.value);
    localStorage.setItem("allTasks", JSON.stringify(todo));
  } else {
    alert("Enter a valid task to add");
  }
  textInput.value = "";
});

function Add(task) {
  const container = document.createElement("div");
  const para = document.createElement("p");
  const image = document.createElement("img");

  container.classList.add("flex", "justify-evenly", "w-full");

  para.classList.add(
    "m-2",
    "w-11/12",
    "break-normal",
    "bg-white",
    "text-slate-900",
    "font-serif",
    "pl-3",
    "pb-2",
    "text-2xl",
    "h-auto",
    "relative",
    "pt-2",
    "rounded-md",
    "first-letter:capitalize",
    "first-letter:text-3xl",
    "first-letter:font-bold",
    "first-letter:italic",
    "first-letter:font-sans",
    "first-letter:text-[#ff582f]"
  );

  image.src = "./img/delete.png";

  image.classList.add("w-100", "h-6", "content", "mt-4", "cursor-pointer");

  para.innerText = task;
  container.appendChild(para);
  container.appendChild(image);
  input.appendChild(container);
  image.addEventListener("click", () => {
    input.removeChild(container);
    todo = todo.filter((t) => t !== task);
    localStorage.setItem("allTasks", JSON.stringify(todo));
  });
}
