let addBtn = document.querySelector(".add-note");

function savetext() {
  let data = document.querySelectorAll("textarea");
  let dataArr = [];

  for (let i = 0; i < data.length; i++) {
    dataArr.push(data[i].value);
  }
  console.log(dataArr);
  let noteToString = JSON.stringify(dataArr);
  //    console.log(textNote);
  localStorage.setItem("notetext", noteToString);
}

function datafill() {
  let localStorageitems = localStorage.getItem("notetext");
  let dataArr = [];
  if (localStorageitems) {
    dataArr = JSON.parse(localStorage.getItem("notetext"));
  }

  if (dataArr.length === 0) dataArr = [""];
  for (let i = 0; i < dataArr.length; i++) {
    let storeNote = document.createElement("div");
    storeNote.classList.add("note-store");
    storeNote.innerHTML = `<div class="note">
    <div class="nav">
        <i class="fa-solid fa-trash"></i>
    </div>
    <textarea spellcheck="false"></textarea>
    </div>`;

    storeNote.querySelector("textarea").value = dataArr[i];
    document.body.appendChild(storeNote);
  }

  document.querySelectorAll(".note").forEach((storeNote) => {
    let dltBtn = storeNote.querySelector(".fa-trash");

    dltBtn.addEventListener("click", deletenote);
    function deletenote() {
      storeNote.remove();
      savetext();
    }
  });

  // selecting save btn and adding event listener to it
  let savebtn = document.querySelector(".sav-note");
  savebtn.addEventListener("click", savetext);
}

addBtn.addEventListener("click", addnotefnc);
function addnotefnc() {
  let storeNote = document.createElement("div");
  storeNote.classList.add("note-store");
  storeNote.innerHTML = `<div class="note">
  <div class="nav">
      <i class="fa-solid fa-trash"></i>
  </div>
  <textarea spellcheck="false"></textarea>
</div>`;

  // function locallystore(){
  //     let textNote=storeNote.querySelector("textarea").value;
  //     let noteToString=JSON.stringify(textNote);
  //     console.log(textNote);
  //     localStorage.setItem("notetext",noteToString);
  // }
  let dltBtn = storeNote.querySelector(".fa-trash");
  // setInterval(savetext,5000);

  dltBtn.addEventListener("click", deletenote);
  function deletenote() {
    storeNote.remove();
    savetext();
  }

  console.log(storeNote);
  document.body.appendChild(storeNote);
}
