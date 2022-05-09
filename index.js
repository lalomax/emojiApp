let myEmojis = []
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")
const saveBtn = document.getElementById("save-btn")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myEmojis"))

if (leadsFromLocalStorage) {
  myEmojis = leadsFromLocalStorage
  renderEmojis()
}

function renderEmojis() {
  emojiContainer.innerHTML = ""
  for (let i = 0; i < myEmojis.length; i++) {
    const emoji = document.createElement('span')
    emoji.textContent = myEmojis[i]
    emojiContainer.append(emoji)
  }
}

/*renderEmojis()*/

function addElement(onEnd) {
  if (emojiInput.value) {
      if (onEnd) {
         myEmojis.push(emojiInput.value)
      } else {      
      myEmojis.unshift(emojiInput.value)
      }
    emojiInput.value = ""
    renderEmojis()
  }
}

function removeElement(onEnd){
  if (onEnd) {
  myEmojis.pop()
  } else {
  myEmojis.shift()
  }
  renderEmojis()
}

pushBtn.addEventListener("click", function() {
  addElement(true)
})

unshiftBtn.addEventListener("click", function() {
  addElement(false)
})

popBtn.addEventListener("click", function() {
 removeElement(true)
})

shiftBtn.addEventListener("click", function() {
  removeElement(false)
})

saveBtn.addEventListener("click", function() {
  localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
  renderEmojis()
  alert("Saved")
  /* console.log(myEmojis)  */
})

deleteBtn.addEventListener("click", function() {
  if (window.confirm("Do you really want to delete?")) {
    localStorage.clear()
    myEmojis = []
    renderEmojis()
  }

})