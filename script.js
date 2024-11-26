// File: script.js

const chatContainer = document.querySelector(".chat-container"); // Chat container
const chatBox = document.getElementById("chat-box");
const notificationBadge = document.getElementById("notification-badge");
const viewMessagesButton = document.getElementById("view-messages");

// Simulated message data with images
const messages = [
  {
    text: "Unlock this video to see more! 😘",
    video: "https://va.media.tumblr.com/tumblr_sn2epsCoLa1ab2fba.mp4",
  },
  {
    text: "Hey there, sweetheart! 😘",
    image:
      "https://64.media.tumblr.com/14573c29b68b436dbfbdad76e3e3f426/71383369a9c10138-23/s540x810/63d890ae7b0cdb04995d37c562bd503ad47f6574.jpg",
  },
];

let newMessagesCount = 0;

// Hide the chat container initially
chatContainer.style.display = "none";

// Function to add new message to chat box
function addMessage(message) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");

  // Add message text
  const messageText = document.createElement("div");
  messageText.classList.add("message-text");
  messageText.textContent = message.text;
  messageDiv.appendChild(messageText);

  // Add image (if exists)
  if (message.image) {
    const messageImage = document.createElement("img");
    messageImage.classList.add("message-image");
    messageImage.setAttribute("src", message.image);
    messageImage.setAttribute("alt", "Message Image");
    messageDiv.appendChild(messageImage);
  }

  // Add video (if exists)
  if (message.video) {
    const messageVideo = document.createElement("video");
    messageVideo.classList.add("message-video");
    messageVideo.setAttribute("controls", "controls");
    messageVideo.setAttribute("src", message.video);
    messageDiv.appendChild(messageVideo);
  }

  // Add unlock button
  const unlockButton = document.createElement("button");
  unlockButton.classList.add("chat-unlock-button");
  unlockButton.innerHTML = `<span>🔥</span> Unlock Now! <span>18+ 😘</span>`;
  unlockButton.onclick = () => {
    window.open("https://onlyfans.com/sofiaavallone", "_blank");
  };
  messageDiv.appendChild(unlockButton);

  // Append message container to chat box
  chatBox.appendChild(messageDiv);
}

// Simulate receiving messages
function receiveMessage() {
  // Show chat container when a message is received
  chatContainer.style.display = "block";

  if (newMessagesCount < messages.length) {
    newMessagesCount++;
    notificationBadge.textContent = newMessagesCount;

    setTimeout(() => {
      addMessage(messages[newMessagesCount - 1]);
    }, 1000 * newMessagesCount); // Delay for simulation
  }
}

// Toggle chat box visibility
viewMessagesButton.addEventListener("click", () => {
  chatBox.classList.toggle("open");
  notificationBadge.textContent = "0";
  newMessagesCount = 0;
});

// Simulate incoming messages
setInterval(receiveMessage, 10000);
