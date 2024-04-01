document.addEventListener("DOMContentLoaded", () => {
    // 1. Remove the <main> element with id 'main' from the DOM
    const mainElement = document.getElementById('main');
    if (mainElement) {
      mainElement.remove();
    }
  
    // 2. Create a new <h1> element
    const newHeader = document.createElement('h1');
  
    // 3. Set the id attribute of the <h1> element to 'victory'
    newHeader.id = 'victory';
  
    // 4. Set the text content of the <h1> element
    newHeader.textContent = 'REGINA NGUNGA is the champion'; // Replace YOUR-NAME with your actual name
  
    // Append the <h1> element to the document body
    document.body.appendChild(newHeader);
  });
  
    
    