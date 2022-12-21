

const myEmojis = [];
const emojiContainer = document.getElementById("emoji-container");
const emojiInput = document.getElementById("emoji-input");
const buttonWrapper1 = document.getElementById("buttons-wrapper")


renderBtns();

function renderBtns() {
  //Only show the "Add Emoji!" button if emoji array is empty
  if (myEmojis.length < 1) {
    buttonWrapper1.innerHTML = `<button id="add-btn">Add Emoji!</button>`;
    const addBtn = document.getElementById("add-btn");
    addBtn.addEventListener("click", function () {
      updateEmojis("push");
    });
  } else {
    buttonWrapper1.innerHTML = `
        <button id="push-btn">+</button>
        <button id="unshift-btn">+</button>
        <button id="pop-btn">-</button>
        <button id="shift-btn">-</button>`;
  }
}

function renderEmojis() {
  emojiContainer.innerHTML = "";
  for (let i = 0; i < myEmojis.length; i++) {
    emojiContainer.innerHTML += `<span>${myEmojis[i]}</span>`;
  }
}

function updateEmojis(action) {
  if (emojiInput.value) {
    if (action === "push") {
      myEmojis.push(emojiInput.value);
    } else if (action === "unshift") {
      myEmojis.unshift(emojiInput.value);
      renderEmojis();
    }
    emojiInput.value = "";
    renderEmojis();
    renderBtns();
    checkBtns();
  }
}

function checkBtns() {
  if (myEmojis.length > 0) {
    const pushBtn = document.getElementById("push-btn");
    const unshiftBtn = document.getElementById("unshift-btn");
    const popBtn = document.getElementById("pop-btn");
    const shiftBtn = document.getElementById("shift-btn");

    pushBtn.addEventListener("click", function () {
      updateEmojis("push");
    });

    unshiftBtn.addEventListener("click", function () {
      updateEmojis("unshift");
    });

    popBtn.addEventListener("click", function () {
      myEmojis.pop();
      renderEmojis();
    });

    shiftBtn.addEventListener("click", function () {
      myEmojis.shift();
      renderEmojis();
    });
  }
}
