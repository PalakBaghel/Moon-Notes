console.log("Welcome to moon notes");
//shownotes  phele call kia toh toh purane vale add notes aa jayenge jo phele add kia honge
showNotes();

//If user adds a note, add it to localstorage
let addBtn = document.getElementById('addBtn');
//addBtn vo button h jiski id addBtn h , jab koi isse click karega toh ek function run hoga
addBtn.addEventListener('click', function (e) {
    //e - event object // addTxt id is textarea of note and addBtn is addnote button
    let addTxt = document.getElementById('addTxt');
    //localstorage mai jo phele se item/notes h vo dedo
    //shownotes localstorage m se notes id vale div m saare note read karega display kra dega in notes id div
    let notes = localStorage.getItem("notes");
    //agar notes null ho toh
    if (notes == null) {
        //blank array and notesObej is object/array
        notesObj = [];
    }
    else {
        //agar koi string milti h usse parse kardo array m
        notesObj = JSON.parse(notes);
    }
    //ek aur note daldo 
    notesObj.push(addTxt.value);
    //localstorage ko update kar do
    localStorage.setItem("notes", JSON.stringify(notesObj));
    //blank kardo ab addTxt ki value
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
})

//show notes
//function to show notes from local storage
//localstorage m saare elements ko read karega and display karega

function showNotes() {
    let notes = localStorage.getItem("notes");
    //agar notes null ho toh
    if (notes == null) {
        //blank array
        notesObj = [];
    }
    else {
        //agar koi string milti h usse parse kardo
        notesObj = JSON.parse(notes);
    }
    //blank string html
    let html = "";
    //notesObj = array
    notesObj.forEach(function (element, index) {
        //html m card aad kardo  html += matlab append kardo
        //array k andar jo bhi h vo array mai aajayega p tag m
        html += `
              <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
               <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
            
            <button id = "${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>  
         `;
    });
    //
    let notesElem = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElem.innerHTML = html;
    }
    else {
        notesElem.innerHTML = `Nothing to show! Use "Add a Note section above to add notes"`
    }
}

//function to delete note
//button in delete Note have id = index and when we click on it it will delete that note
//this.id = object k andar usi element ki id jis pr abhi click kia h
function deleteNote(index) {
    console.log('I am deleting', index);

    let notes = localStorage.getItem("notes");
    //agar notes null ho toh
    if (notes == null) {
        //blank array
        notesObj = [];
    }
    else {
        //agar koi string milti h usse parse kardo
        notesObj = JSON.parse(notes);
    }
    // splice will delete and take arguments as starting index and element(1 element hi delete krna h)
    notesObj.splice(index, 1);
    //localstorage ko update kar do
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}


//search bar m search krne k liye
// let search = document.getElementById('searchTxt');
// search.addEventListener("input", function(){

//   let inputVal = search.value.toLowerCase();

// //    console.log("Input event fired", inputVal);
//   //noteCard class vale elements lelo
//   let noteCards = document.getElementsByClassName('noteCard');

//   Array.from(noteCards).forEach(function(element){
//     //p tag m elements
//     let cardTxt = element.getElementsByTagName("p")[0].innerText;
//     // console.log(cardTxt);
//     if(cardTxt.includes(inputVal)){
//         element.style.display = "block";
//     }
//     else{
//         element.style.diplay = "none";
//     }
//   })
 
// })