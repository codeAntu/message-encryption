
let input = getID("input")
let key = getID("key")



input.addEventListener("keyup", encrypt)
key.addEventListener("keyup", encrypt)

function encrypt() {
   let text = getID("input").value
   let key = getID("key").value
   let output = getID("output")
   let encrypted = ""
   let temp

   if (key != "") {
      for (let i = 0; i < text.length; i++) {
         temp = text.charCodeAt(i) ^ key.charCodeAt(i % key.length)
         encrypted += String.fromCharCode(temp)
      }
   }
   output.value = encrypted

}

// function decrypt() {
//    let text = getID("text").value
//    let key = getID("key").value
//    let output = getID("output")
//    let decrypted = ""
//    if (text == "" || key == "") {
//       alert("Please enter a message and a key")
//    } else {
//       decrypted = CryptoJS.AES.decrypt(text, key).toString(CryptoJS.enc.Utf8)
//       output.value = decrypted
//    }
// }

function getID(id) {
   return document.getElementById(id)
}