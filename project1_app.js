showNotes();


let btn1 = document.getElementById('btn1');
btn1.addEventListener("click", function (e) {
  let mainNote = document.getElementById("mainNote");
  let topic = document.getElementById("topic");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    topic: topic.value,
    text: mainNote.value
  };
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  mainNote.value = "";
  topic.value = "";
  // console.log(notesObj);
  showNotes();
});
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
          <div id="saved" class="saveNotes">
           <h3 class="savedCard">${element.topic}</h3><hr>
           <p class="savedText"> ${element.text}</p>
           <button id="${index}"onclick="remove(this.id)" class="dltBtn">Remove</button>
          </div>`;
  });
  let notesElm = document.getElementById('notes');
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `<h4>NO, Notes Are Saved By You..</h4>`;
  }
}

function remove(index) {
  console.log('removed', index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}


let search = document.getElementById('search');
search.addEventListener("input", function () {

  let inputVal = search.value;
  console.log('search found', inputVal);
  let saveNotes = document.getElementsByClassName('saveNotes');
  Array.from(saveNotes).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    }
    else {
      element.style.display = "none";
    }
  })
});
let mode= document.getElementById("mode");
let check= document.getElementById("check");
let slider= document.getElementById("slider");

slider.addEventListener('click',()=>{
  if(check.checked){
    mode.innerText='Dark Mode';
    document.body.style.backgroundColor = "black";
    mode.style.color='White';
    mainNote.style.color='white';
    topic.style.color='white';
  }
  else {
    mode.innerText='Light Mode';
    document.body.style.backgroundColor = "rgba(253, 232, 112, 0.918)";
    mode.style.color='#f36421';
    mainNote.style.color='black';
    topic.style.color='black';
  }
});
  
/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server
*/