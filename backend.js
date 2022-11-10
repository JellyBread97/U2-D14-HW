const sendProducts = async (event) => {
  try {
    event.preventDefault();

    const userInput = {
      name: document.getElementById("name").value,
      description: document.getElementById("description").value,
      brand: document.getElementById("brand").value,
      imageUrl: document.getElementById("image").value,
      price: parseInt(document.getElementById("price").value),
    };

    const options = {
      method: "POST",
      body: JSON.stringify(userInput),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZkMGFmZGQ0YmUzZDAwMTU4NDYwYjMiLCJpYXQiOjE2NjgwOTA2MjIsImV4cCI6MTY2OTMwMDIyMn0.gellqLkAypZYUCP7ffEfZA8wHgv98AeDUpFwZLYM9Uo",
      },
    };

    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/product/",
      options
    );
  } catch (err) {
    console.log(err);
  }
};
