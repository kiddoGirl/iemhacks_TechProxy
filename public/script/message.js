function sendMessage() {
            
    var messageText = document.getElementById("messageInput").value;

    
    var messageElement = document.createElement("div");
    messageElement.className = "message sender-message";

    
    var messageTextNode = document.createTextNode(messageText);

    
    messageElement.appendChild(messageTextNode);

    
    document.getElementById("messageArea").appendChild(messageElement);

    
    document.getElementById("messageInput").value = "";
}
