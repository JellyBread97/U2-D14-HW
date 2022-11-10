const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZkMGFmZGQ0YmUzZDAwMTU4NDYwYjMiLCJpYXQiOjE2NjgwOTA2MjIsImV4cCI6MTY2OTMwMDIyMn0.gellqLkAypZYUCP7ffEfZA8wHgv98AeDUpFwZLYM9Uo",
  },
};

let frontendFunction = async () => {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/product/",
    options
  );
  const productCard = await response.json();
  console.log(productCard);

  let listgroup = document.querySelector(".list-group");

  productCard.forEach((userinput) => {
    let li1 = document.createElement("li");
    li1.innerHTML = `
    <li class="list-group-item d-flex">
              <div>
                <h2>${userinput.name}</h2>
                <p>Brand: ${userinput.brand}</p>
                <p>Description: ${userinput.description}</p>
                <p><a href="${userinput.imageUrl}">Link to an image of the product</a></p>
                <p>${userinput._id}</p>
                <small>Created at: ${userinput.createdAt}</small>
                <span>$${userinput.price}</span>
                <button type="button" class="btn btn-light">Edit</button>
              </div>
            </li>`;
    listgroup.appendChild(li1);
  });
};

window.onload = () => {
  frontendFunction();
};
