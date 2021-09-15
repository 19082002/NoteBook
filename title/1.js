let card=document.getElementById("card");
let cardbody=document.getElementById("card-body");
let cardtitle=document.getElementById("card-title");
let cardtext=document.getElementById("card-text");
let save=document.getElementById("save");
let btn=document.getElementById("btn");

show();

btn.addEventListener('click',function(e){
let notes=localStorage.getItem("notes");
// let cardtext=document.getElementById("card-text");
if(notes==null){
notesobj=[];}
else{
notesobj=JSON.parse(notes);
}
notesobj.push(cardtext.value);
localStorage.setItem("notes",JSON.stringify(notesobj));
cardtext.value="";
console.log(notesobj);
show();
})
function show(){
  let notes=localStorage.getItem("notes");

if(notes==null){
notesobj=[];}
else{
notesobj=JSON.parse(notes);
}
let html="";
notesobj.forEach(function(element,index) {
   html+=` <div id="show-card"style="height:auto">
    <div style="width:160px" >
      <h3 id="show-title">Note ${index+1}</h3>      
      <div id="show-text" >${element}</div>
      <button onclick="del(${index})"id="delbtn">Delete </button>
      </div>
    </div>  `
  });
    let save =document.getElementById("allnotes");
    if(notesobj.length!=0){
    save.innerHTML=html;}
    else{
      // save.style.display="none";
      save.innerHTML=`<div id="show-text"style="width:160px">No notes</div>`;
    }
}
function del(index){
  let notes=localStorage.getItem("notes");
  if(notes==null){
    notesobj=[];}
    else{
    notesobj=JSON.parse(notes);
    }

notesobj.splice(index,1);
localStorage.setItem("notes",JSON.stringify(notesobj));
show();
 // console.log(index);

}
