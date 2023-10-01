let input = getID("input")
let key = getID("key")
let copy = getID("copy")
let clear = getID("clear")

input.addEventListener("keyup", encrypt)
key.addEventListener("keyup", encrypt)
copy.addEventListener("click", textCopy)
clear.addEventListener("click", textClear)

function encrypt() {
   let text = getID("input").value
   let key = getID("key").value
   let output = getID("output")
   let encrypted = ""
   let temp

   if (key != "") {
      let x = '0'
      for(let i = 0; i < key.length; i++){
         x ^= key.charCodeAt(i)
      }
      for (let i = 0; i < text.length; i++) {
         temp = text.charCodeAt(i) ^ key.charCodeAt(i % key.length) ^ x
         encrypted += String.fromCharCode(temp)
      }
   }
   output.value = encrypted

}

function textCopy() {
   let output = getID("output")
   let input = getID("input")
   output.select()
   output.setSelectionRange(0, 99999)
   document.execCommand("copy")
   input.focus()

}

function textClear() {
   let output = getID("output")
   let input = getID("input")
   let key = getID("key")
   output.value = ""
   input.value = ""
   key.value = ""
   input.focus()
}


function getID(id) {
   return document.getElementById(id)
}