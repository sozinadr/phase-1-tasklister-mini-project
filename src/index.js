document.addEventListener("DOMContentLoaded", () => {
    // your code here
    let form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        buildToDo(e.target["new-task-description"].value);
        form.reset();
    });

    function buildToDo(todo) {
        let p = document.createElement("p");
        let btn = document.createElement("button");
        btn.addEventListener("click", handleDelete);
        btn.textContent = "Delete";
        p.textContent = `${todo} `;
        p.appendChild(btn);
        document.querySelector("#tasks").appendChild(p);
    }

    function handleDelete(e) {
        e.target.parentNode.remove();
    }
});