const text = document.getElementById('count-people')

//click on incr btn -> incr count -> display text in doc
let count = 0;
function increment(){
    count += 1;
    text.innerText = count;
}
//save btn: put count as dummy -> display 0 as text in doc
let dummy = 0;
function save(){
    dummy = count
    count = 0
    text.innerText = count
    entries()
}
//make str previous entries: 
const entry = document.getElementById('entries')
function entries(){
    let ent = dummy + "-"
    entry.textContent += ent //innertext vs textcontent (it reads spaces)
}
