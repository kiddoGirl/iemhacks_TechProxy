  const chatDisplay = document.getElementById("chat-display");
  const userInput = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");
  
  const dataset = [

    {
      question: "what is crop rotation",
      answer: "Crop rotation is the practice of growing different crops in the same field in a planned sequence to improve soil health and prevent pest and disease buildup.",
    },


    {
      question: "how can i control weeds in my garden",
      answer: "You can control weeds through mulching, using cover crops, manual removal, and using herbicides in moderation.",
    },


    {
      question: "what are the benefits of organic farming",
      answer: "Organic farming promotes soil health, reduces environmental impact, and produces healthier food by avoiding synthetic pesticides and fertilizers."
    },


    {
      question: "when is the best time to plant tomatoes",
      answer: "Tomatoes are usually planted after the last frost date in your region. This is typically in spring when the weather has warmed up."
    },


    {
      question: "how do i prevent pest infestations in my crops",
      answer: "Integrated Pest Management (IPM) techniques include using beneficial insects, practicing crop rotation, and using physical barriers to minimize pest damage."
    },


   
    {
      question: "what is the importance of soil ph in agriculture",
      answer: "Soil pH affects nutrient availability to plants. Different crops have different pH preferences; adjusting pH can optimize nutrient uptake."
    },


    {
      question: "what is hydroponic farming",
      answer: "Hydroponic farming is a method of growing plants without soil, using nutrient-rich water solutions to deliver nutrients directly to the plant roots."
    },


    {
      question: "how do i identify and treat common plant diseases",
      answer: "Identify diseases by observing symptoms like wilting, discoloration, and spots. Treatments include removing affected parts and using appropriate fungicides."
    },



    {
      question: "what are cover crops and their benefits",
      answer: "Cover crops are plants grown to protect and enrich the soil. They prevent erosion, improve soil structure, and add organic matter when tilled."
    },


    {
      question: "how can i conserve water in agriculture",
      answer: "Water conservation methods include using drip irrigation, mulching, capturing rainwater, and choosing drought-tolerant plant varieties."
    },


    {
      question: "what are the benefits of organic farming",
      answer: "Organic farming promotes soil health, reduces environmental impact, and produces healthier food by avoiding synthetic pesticides and fertilizers.",
    },


    {
      question: "when is the best time to plant tomatoes",
      answer: "Tomatoes are usually planted after the last frost date in your region. This is typically in spring when the weather has warmed up.",
    },



    {
      question: "how do i prevent pest infestations in my crops",
      answer: "Integrated Pest Management (IPM) techniques include using beneficial insects, practicing crop rotation, and using physical barriers to minimize pest damage.",
    },


    {
      question: "what is the difference between annual and perennial plants",
      answer: "Annual plants complete their life cycle within one year, while perennial plants live for multiple years, regrowing each season.",
    },



    {
      question: "what is the ideal ph range for most vegetable crops",
      answer: "Most vegetable crops thrive in a pH range of 6.0 to 7.0."
    },
    
    
    
    {
      question: "how can i improve soil fertility naturally",
      answer: "Enhance soil fertility by adding organic matter like compost and using cover crops."
    },
    


    {
      question: "what is the role of bees in pollination",
      answer: "Bees play a crucial role in pollinating flowers, helping plants produce fruits and seeds."
    },
    


    {
      question: "how do i identify and control aphids in my garden",
      answer: "Identify aphids by their small size and use insecticidal soap or natural predators like ladybugs for control."
    },
    


    {
      question: "what are the key elements in a balanced fertilizer",
      answer: "A balanced fertilizer contains nitrogen (N), phosphorus (P), and potassium (K) in appropriate ratios."
    },
    


    {
      question: "how can i extend the growing season for my crops",
      answer: "You can extend the growing season by using techniques like cold frames, row covers, and hoop houses."
    },
    


    {
      question: "what is the importance of pollinator-friendly plants",
      answer: "Pollinator-friendly plants attract bees and other beneficial insects, enhancing pollination and crop yield."
    },
    


    {
      question: "what are some common signs of nutrient deficiencies in plants",
      answer: "Signs include yellowing leaves (nitrogen deficiency), poor fruit development (potassium deficiency), and stunted growth (phosphorus deficiency)."
    },
    


    {
      question: "how can i protect my garden from deer and other wildlife",
      answer: "Use fencing, repellents, and motion-activated devices to deter wildlife from your garden."
    },
    


    {
      question: "what is no-till farming, and what are its benefits",
      answer: "No-till farming is a method that reduces soil disturbance, conserves moisture, and improves soil health."
    },
    


    {
      question: "what are the advantages of companion planting in gardening",
      answer: "Companion planting can deter pests, improve pollination, and enhance the growth of companioned plants."
    },
    


    {
      question: "how do i prevent and manage soil erosion",
      answer: "Prevent erosion by planting ground cover, using mulch, and implementing contour farming practices."
    },
    



    {
      question: "what are the benefits of using organic mulch in gardening",
      answer: "Organic mulch conserves moisture, suppresses weeds, and adds nutrients to the soil as it decomposes."
    },
    


    {
      question: "how can i test my soil nutrient levels",
      answer: "You can perform a soil test using a testing kit or by sending a sample to a soil testing lab."
    },
    


    {
      question: "what is the importance of crop diversity in sustainable agriculture",
      answer: "Crop diversity improves resilience to pests, diseases, and environmental changes in sustainable farming."
    },
    


    {
      question: "how do i create a successful compost pile",
      answer: "Build a compost pile with a mix of green (nitrogen-rich) and brown (carbon-rich) materials, and maintain proper moisture and aeration."
    },
    


    {
      question: "what is the best way to store harvested vegetables",
      answer: "Store vegetables in a cool, dark, and well-ventilated area to prolong their freshness."
    },
    


    {
      question: "how can i protect my garden from fungal diseases",
      answer: "Prevent fungal diseases by practicing good hygiene, proper spacing, and using disease-resistant plant varieties."
    },
    


    {
      question: "what are the advantages of raised bed gardening",
      answer: "Raised bed gardening provides better drainage, soil control, and easier access for gardeners."
    },
    


    {
      question: "how can i attract beneficial insects to my garden",
      answer: "Plant flowers, herbs, and native plants to attract beneficial insects like ladybugs, lacewings, and parasitic wasps."
    },



    {
      question: "what is the purpose of agriculture",
      answer: "Agriculture is the practice of cultivating plants and raising animals for food, fiber, and various other products."
    },



    {
      question: "what is mean by farming",
      answer: "Farming refers to the act of growing crops and raising livestock for agricultural purposes."
    },



    {
      question: "what is horticulture all about",
      answer: "Horticulture is the science and art of growing fruits, vegetables, and ornamental plants."
    },



    {
      question: "can you explain the concept of a greenhouse",
      answer: "A greenhouse is a controlled environment where plants are grown, with transparent walls and roof to allow sunlight in and trap heat."
    },



    {
      question: "why is soil important in farming",
      answer: "Soil is crucial in farming as it provides essential nutrients and a medium for plant growth."
    },


    {
      question: "how do plants grow from seeds",
      answer: "Plants grow from seeds when they germinate, taking in water and nutrients from the soil to develop into mature plants."
    },



    {
      question: "what is the role of water in gardening",
      answer: "Water is essential for plant growth as it helps transport nutrients and maintain turgor pressure within plant cells."
    },


    {
      question: "explain the idea of crop rotation",
      answer: "Crop rotation involves planting different crops in a specific sequence to improve soil health and reduce pests and diseases."
    },



    {
      question: "what are pests in farming",
      answer: "Pests are harmful organisms that can damage crops. They are managed through methods like pesticides, biological control, and crop rotation."
    },



    {
      question: "what is the difference between organic and conventional farming",
      answer: "Organic farming avoids synthetic pesticides and fertilizers, focusing on natural and sustainable practices, while conventional farming uses synthetic inputs for higher yield."
    },

    {
      question: "what is your name",
      answer: "My name is AgriBot. I am here to assist you with agricultural-related questions."
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



