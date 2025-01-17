//My web card
const h1 = document.createElement("h1");
h1.textContent = "My Web";
h1.textContent = "My Store";
h1.style.fontSize = "28px";
h1.style.fontWeight = "bold";
h1.style.color = "white";
h1.style.paddingLeft = "20px";

h1.style.backgroundColor = "black"; // Set background color to black
h1.style.color = "white"; // Set text color to white
h1.style.textAlign = "left"; // Center align the text
h1.style.padding = "20px"; // Add padding
h1.style.margin = "3"; // Remove any default margin
h1.style.fontFamily = "'Arial', sans-serif"; // Set font

h1.style.width = "100%";




//SearchContainer
const searchContainer = document.createElement("input");

searchContainer.setAttribute("type", "text");
searchContainer.placeholder = "Search for products...";
searchContainer.style.display = "left";
searchContainer.style.alignItems = "center";
searchContainer.style.flexGrow = 3;
searchContainer.style.margin = "0 20px";
searchContainer.style.padding = "10px";
searchContainer.style.width = "50%";
searchContainer.style.borderRadius = "4px";
searchContainer.style.border = "none";

//searchButton
const searchButton = document.createElement("button");

searchButton.textContent = "Search";
searchButton.style.backgroundColor = "#FF9900";
searchButton.style.color = "white";
searchButton.style.padding = "10px 15px";
searchButton.style.border = "none";
searchButton.style.borderRadius = "4px";
searchButton.style.marginLeft = "0px";

// Search button click event
searchButton.addEventListener("click", () => {
  const value = searchContainer.value.toLowerCase(); // Access value from the input field
  let filterProducts = allProducts.filter((item) => {
    // Check if product name includes the search value (case-insensitive)
    return item.name.toLowerCase().includes(value);
  });

  displayData(filterProducts); // Display the filtered products
});

//Shortbutton
const dropdown = document.createElement("select");
dropdown.textContent = "Sort  ";
dropdown.style.padding = "10px 15px";
dropdown.style.borderRadius = "5px";
dropdown.style.cursor = "pointer";
dropdown.style.marginTop = "10px";
dropdown.style.width = "100px";
dropdown.style.padding = "8px";
dropdown.style.backgroundColor = "#f8f8f8";
dropdown.style.boxShadow = "2px 0 5px rgba(0,0,0,0.1)";
dropdown.style.display = "left";
dropdown.style.marginRight = "30px";
dropdown.style.marginLeft = "30px";


//Option
const optionDefault = document.createElement("option");
optionDefault.value = "";
optionDefault.textContent = "SORT BY";

const optnhightolow = document.createElement("option");
optnhightolow.value = "hightolow";
optnhightolow.textContent = "high to low";

const optnlotohigh = document.createElement("option");
optnlotohigh.value = "lowtohigh";
optnlotohigh.textContent = "low to high";

const optionIncresing = document.createElement("option");
optionIncresing.value = "AtoZ";
optionIncresing.textContent = "increasing Alphabets";

const optionDecresing = document.createElement("option");
optionDecresing.value = "ZtoA";
optionDecresing.textContent = "Decreasing Alphabets";

dropdown.appendChild(optionDefault);
dropdown.appendChild(optnlotohigh);
dropdown.appendChild(optnhightolow);
dropdown.appendChild(optionIncresing);
dropdown.appendChild(optionDecresing);
root.appendChild(dropdown);


//Functionality Of Sorting
dropdown.addEventListener("change", () => {
  const sortValue = dropdown.value;

 //let sortedProduct = [];
  if (sortValue === "hightolow") {
    let sortedProduct = allProducts.sort((a, b) => b.price - a.price);
    displayData(sortedProduct);

  } else if (sortValue === "lowtohigh") {
    let sortedProduct1 = allProducts.sort((a, b) => a.price - b.price); 
    displayData(sortedProduct1); 
  } else if (sortValue === "AtoZ") {
    let sortedProduct2 = allProducts.sort((a, b) => a.name.localeCompare(b.name)); // Sort by name A-Z
    displayData(sortedProduct2);
  } else if (sortValue === "ZtoA") {
    let sortedProduct3 = [...allProducts].sort((a, b) => b.name.localeCompare(a.name)); // Sort by name Z-A
    displayData(sortedProduct3);
  }

  // Display the sorted products
  // displayData(sortedProduct);
});






//root appending
root.appendChild(h1);
root.style.width="100%";
root.style.display = "flex";
root.style.flexWrap ="wrap";
root.style.justifyContent = "center";
root.style.alignItems="center";
// root.style.padding = "20px";
root.style.gap = "20px";

//Array of all products
let allProducts = [];
//fetch the data

fetch("data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    allProducts = data.products;
    displayData(allProducts);
  });



  let current = 1
  const productperpage = 10;


function displayData(products, page = 1) {
  root.innerHTML = "";
  root.appendChild(h1);

  const startIndex = (page -1) * productperpage;
  const endIndex = startIndex +  productperpage;

  const productsForpage = products.slice(startIndex,endIndex);

  
  products.forEach((item) => {
    
    //Product name
    const card = document.createElement("div");
    card.setAttribute("style",
      `background-color:lightgrey;
      border:1px solid black;
      text-align:center;
      border-radius:8px;
      width:200px`
    )

    const name = document.createElement("h1");
    name.textContent = item.name;
    console.log(item.name);
    name.textContent = item.name;
    name.style.fontSize = "24px";
    name.style.color = "#333";
    name.style.margin = "10px 0";
    name.style.fontWeight = "bold";

    //Product price
    const price = document.createElement("h3");
    price.textContent = item.price;
    price.style.fontSize = "20px";
    price.style.color = "#28a745";
    price.style.margin = "10px 0";

    // Product Description
    const description = document.createElement("div");
    description.textContent = item.description;
    description.style.backgroundColor = "grey";
    description.style.color = "white";
    description.style.border = "12px";
    // description.style.padding = "0px 0px 15px 15p;
    description.style.margin = "0px 15px 15px ";
    description.style.display = "none";
    description.style.borderRadius = "5px";
    description.style.cursor = "pointer";
    description.style.fontSize = "14px";
    // description.style.width = "50%";

    //DecButton
    const desButton = document.createElement("button");
    desButton.textContent = "Description";
    desButton.setAttribute("style",
      `background-color:marine;
      border-radius:4px;
      border:none`
    )     
    desButton.addEventListener("click", () => {
      if (description.style.display === "none") {
        description.style.display = "block";
        console.log("heelo from if ");
        desButton.textContent = "Description ▲";
      } else {
        description.style.display = "none";
        desButton.textContent = "Description ▼";
      }
    });

    //Product Quatitiy
    const quantity = document.createElement("h5");
    quantity.textContent = item.quantity;
    quantity.style.fontSize = "16px";
    quantity.style.color = "#777";
    quantity.style.margin = "10px 0";

    //Product image design
    const img = document.createElement("img");
    img.src = item.image;
    console.log(item.image);
    img.alt = "Product Image";
    img.style.width = "100%";
    img.style.height = "200px";
    img.style.borderRadius = "10px";
    img.style.marginBottom = "15px";












    
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.backgroundColor = "darkred";
    removeBtn.style.color = "white";
    removeBtn.style.border = "none";
    removeBtn.style.marginTop = "10px";
    removeBtn.style.borderRadius = "5px";
    removeBtn.style.cursor = "pointer";
    removeBtn.addEventListener("click", () => {
      // Remove the product card when the button is clicked
      card.remove();  // Remove the current product card element
    });

    //Add to Card
    const addToCartBtn = document.createElement("button");
    addToCartBtn.textContent = "Add to Cart";
    addToCartBtn.style.backgroundColor = "red";
    addToCartBtn.style.color = "white";
    addToCartBtn.style.border = "none";
    // addToCartBtn.style.padding = "12px 10px";
    addToCartBtn.style.marginTop = "5px";
    addToCartBtn.style.borderRadius = "5px";
    addToCartBtn.style.cursor = "pointer";
    addToCartBtn.style.fontSize = "16px";
     
    card.appendChild(removeBtn)
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(quantity);
    card.appendChild(desButton);
    card.appendChild(description);
    card.appendChild(addToCartBtn);

    root.appendChild(card);
  });
  addPaginationControls(productperpage,page);
}

h1.appendChild(searchContainer);
h1.appendChild(searchButton);
h1.appendChild(dropdown);



function addPaginationControls(products, currentPage) {
  const totalPages = Math.ceil(products.length / productperpage); // Calculate total pages
  const paginationContainer = document.createElement('div');
  paginationContainer.style.textAlign = 'center';
  paginationContainer.style.marginTop = '20px';


  const prevButton = document.createElement('button');
  prevButton.textContent = 'Previous';
  prevButton.style.padding = '10px';
  prevButton.style.backgroundColor = '#000000';
  prevButton.style.color = '#fefae0';
  prevButton.style.fontSize = '14px';
  prevButton.disabled = currentPage === 1; // Disable if on the first page
  prevButton.addEventListener('click', () => {
      if (currentPage > 1) {
          currentPage--;
          displayData(products, currentPage); // Correctly call displayData
      }
  });
  paginationContainer.appendChild(prevButton);

  for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.textContent = i;
      pageButton.style.padding = '10px';
      pageButton.style.margin = '0 5px';
      pageButton.style.backgroundColor = currentPage === i ? '#ff9900' : '#f1f1f1'; // Highlight the current page
      pageButton.style.color = currentPage === i ? '#ffffff' : '#000000';
      pageButton.style.border = '1px solid #ddd';
      pageButton.style.fontSize = '14px';
      
      pageButton.addEventListener('click', () => {
          currentPage = i;
          displayData(products, currentPage); // Correctly call displayData
      });
      paginationContainer.appendChild(pageButton);
  }

  // Create "Next" button
  const nextButton = document.createElement('button');
  nextButton.textContent = 'Next';
  nextButton.style.padding = '10px';
  nextButton.style.backgroundColor = '#000000';
  nextButton.style.color = '#fefae0';
  nextButton.style.fontSize = '14px';
  nextButton.disabled = currentPage === totalPages; // Disable if on the last page
  nextButton.addEventListener('click', () => {
      if (currentPage < totalPages) {
          currentPage++;
          displayData(products, currentPage); // Correctly call displayData
      }
  });

  // Append the buttons to the pagination container
  paginationContainer.appendChild(nextButton);

  // Append the pagination container to the root
  root.appendChild(paginationContainer);
}