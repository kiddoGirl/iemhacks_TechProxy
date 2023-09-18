document.getElementById("cropForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const cropYield = 85;

    const cropResult = document.getElementById("cropResult");
    cropResult.style.display = "block";
    const paragraph = document.createElement("p");
    paragraph.style.fontFamily = "Arial, sans-serif";
    paragraph.style.fontSize = "19px";
    paragraph.style.color = "rgb(0,100,0)"; // Text color
    paragraph.style.lineHeight = "28px"; // Background color
    paragraph.style.fontWeight = "bolder"; // Background color
    paragraph.style.padding = "10px"; // Padding

    // Set the content of the paragraph
    paragraph.textContent = `Based on the information provided, the wheat crop is expected to yield well at around ${cropYield}%. However, signs of a pest or disease issue, such as leaf yellowing, have been observed. It's advisable to monitor the crop closely, maintain pest control efforts, and explore disease-resistant crop varieties for future planting.`;

    // Append the paragraph to the cropResult div
    cropResult.appendChild(paragraph);

});
