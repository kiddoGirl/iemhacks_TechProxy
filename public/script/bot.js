  const chatDisplay = document.getElementById("chat-display");
  const userInput = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");
  
  const dataset = [

    {
      question: "What is crop rotation?",
      answer: "Crop rotation is the practice of growing different crops in the same field in a planned sequence to improve soil health and prevent pest and disease buildup.",
    },


    {
      question: "How can I control weeds in my garden?",
      answer: "You can control weeds through mulching, using cover crops, manual removal, and using herbicides in moderation.",
    },


    {
      question: "What are the benefits of organic farming?",
      answer: "Organic farming promotes soil health, reduces environmental impact, and produces healthier food by avoiding synthetic pesticides and fertilizers."
    },


    {
      question: "When is the best time to plant tomatoes?",
      answer: "Tomatoes are usually planted after the last frost date in your region. This is typically in spring when the weather has warmed up."
    },


    {
      question: "How do I prevent pest infestations in my crops?",
      answer: "Integrated Pest Management (IPM) techniques include using beneficial insects, practicing crop rotation, and using physical barriers to minimize pest damage."
    },


   
    {
      question: "What is the importance of soil pH in agriculture?",
      answer: "Soil pH affects nutrient availability to plants. Different crops have different pH preferences; adjusting pH can optimize nutrient uptake."
    },


    {
      question: "What is hydroponic farming?",
      answer: "Hydroponic farming is a method of growing plants without soil, using nutrient-rich water solutions to deliver nutrients directly to the plant roots."
    },


    {
      question: "How do I identify and treat common plant diseases?",
      answer: "Identify diseases by observing symptoms like wilting, discoloration, and spots. Treatments include removing affected parts and using appropriate fungicides."
    },



    {
      question: "What are cover crops and their benefits?",
      answer: "Cover crops are plants grown to protect and enrich the soil. They prevent erosion, improve soil structure, and add organic matter when tilled."
    },


    {
      question: "How can I conserve water in agriculture?",
      answer: "Water conservation methods include using drip irrigation, mulching, capturing rainwater, and choosing drought-tolerant plant varieties."
    },


    {
      question: "What are the benefits of organic farming?",
      answer: "Organic farming promotes soil health, reduces environmental impact, and produces healthier food by avoiding synthetic pesticides and fertilizers.",
    },


    {
      question: "When is the best time to plant tomatoes?",
      answer: "Tomatoes are usually planted after the last frost date in your region. This is typically in spring when the weather has warmed up.",
    },



    {
      question: "How do I prevent pest infestations in my crops?",
      answer: "Integrated Pest Management (IPM) techniques include using beneficial insects, practicing crop rotation, and using physical barriers to minimize pest damage.",
    },


    {
      question: "What is the difference between annual and perennial plants?",
      answer: "Annual plants complete their life cycle within one year, while perennial plants live for multiple years, regrowing each season.",
    },



];




sendBtn.addEventListener("click", sendMessage);

function sendMessage() {

  const userMessage = userInput.value.trim();

  if (userMessage !== "") {

    appendMessage(userMessage, "user");
    
    userInput.value = "";

    
    const matchingQuestion = dataset.find(
      (item) => item.question.toLowerCase() === userMessage.toLowerCase()
    );



    if (matchingQuestion) {
      
      const botResponse = matchingQuestion.answer;

      setTimeout(() => {

        appendMessage(botResponse, "bot");
      
      }, 500);


    } else {

      
      const botResponse = "I'm sorry, I don't have an answer for that question.";

      setTimeout(() => {

        appendMessage(botResponse, "bot");

      }, 500);


    }


  }


}





function appendMessage(message, sender) {



  const messageDiv = document.createElement("div");
  messageDiv.innerHTML = message; 

  
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("message-container");


  if (sender === "bot") {

    messageContainer.classList.add("bot-message-container");

  } else {

    messageContainer.classList.add("user-message-container");

  }


  
  messageContainer.appendChild(messageDiv);
  chatDisplay.appendChild(messageContainer);
  chatDisplay.scrollTop = chatDisplay.scrollHeight;



}



  const messageDiv = document.createElement("div");
  messageDiv.innerHTML = message; 


  
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("message-container");



  if (sender === "bot") {

    messageContainer.classList.add("bot-message-container");

  } else {

    messageContainer.classList.add("user-message-container");

  }


  
  messageContainer.appendChild(messageDiv);
  chatDisplay.appendChild(messageContainer);
  chatDisplay.scrollTop = chatDisplay.scrollHeight;



