const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

const saveNotes = () => {
  const allNotes = document.querySelectorAll(".note textarea");
  const data = [];
  allNotes.forEach((item) => data.push(item.value));

  if (data.length === 0) localStorage.removeItem("allNotes");
  else localStorage.setItem("allNotes", JSON.stringify(data));
};

addBtn.addEventListener("click", () => addNote());
document.querySelector("#main");

const addNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
        <div class="tool">
          <i class=" save fa-solid fa-floppy-disk"></i>
          <i class="trash fa-solid fa-trash"></i>
        </div>
        <textarea>${text}</textarea>
    `;
  note.querySelector(".trash").addEventListener("click", () => {
    note.remove();
    saveNotes();
  });

  note.querySelector(".save").addEventListener("click", () => saveNotes());
  note
    .querySelector("textarea")
    .addEventListener("focusout", () => saveNotes());
  main.appendChild(note);
  saveNotes();
};

//IIFE
(function () {
  const lsNotes = JSON.parse(localStorage.getItem("allNotes"));
  if (lsNotes === null) addNote();
  else lsNotes.forEach((lsNote) => addNote(lsNote));
})();
