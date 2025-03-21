$(function () {
  const ORDER_HISTORY_KEY = "orderHistory";

  // Initialize the cart from localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  console.log("Initial cart from localStorage:", cart);

  // Validate the cart data on load
  cart = cart.filter((item) => {
    const price = parseFloat(item.price);
    const qty = parseInt(item.qty);
    if (isNaN(price) || isNaN(qty)) {
      console.error("Invalid item found in cart:", item);
      return false; // Remove invalid items
    }
    return true; // Keep valid items
  });

  // Save the cleaned cart back to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log("Cleaned cart saved to localStorage:", cart);

  // Add to Cart JS
  $(document).on("submit", "form", function (event) {
    event.preventDefault();
    const $form = $(this); // The form that was submitted

    // Extract values correctly
    const foodName = $form.find(".food-menu-desc h4").text().trim(); // Food name
    const foodPriceText = $form.find(".food-price").text().replace("$", "").trim(); // Price text
    const foodPrice = parseFloat(foodPriceText); // Parse price as a number
    const foodQty = parseInt($form.find("input[type='number']").val()); // Parse quantity as a number
    const foodImg = $form.find(".food-menu-img img").attr("src"); // Image URL

    // Debugging: Log extracted values
    console.log("Extracted values:", {
      foodName,
      foodPriceText,
      foodPrice,
      foodQty,
      foodImg,
    });

    // Ensure foodPrice and foodQty are valid numbers
    if (isNaN(foodPrice) || isNaN(foodQty)) {
      console.error("Invalid price or quantity for food item:", foodName);
      console.error("Price:", foodPrice, "Quantity:", foodQty);
      return; // Skip adding this item if the price or quantity is invalid
    }

    // Check if item already exists in cart
    const existingItem = cart.find((item) => item.name === foodName);
    if (existingItem) {
      existingItem.qty += foodQty; // Update quantity if item exists
    } else {
      cart.push({ name: foodName, price: foodPrice, qty: foodQty, img: foodImg }); // Add new item
    }

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Updated cart saved to localStorage:", cart);

    renderCart(); // Update cart UI
    updateCartBadge();
  });

  // Render Cart Items
  function renderCart() {
    const $cartTable = $("#cart-content table");
    $cartTable.find("tr:not(:first)").remove(); // Clear existing rows (except header)

    let total = 0;
    cart.forEach((item) => {
      // Ensure item.price and item.qty are valid numbers
      const price = parseFloat(item.price);
      const qty = parseInt(item.qty);

      if (isNaN(price) || isNaN(qty)) {
        console.error(`Invalid price or quantity for item: ${item.name}`);
        return; // Skip this item if the price or quantity is invalid
      }

      const rowTotal = price * qty;
      total += rowTotal;

      const cartRow = `
        <tr>
          <td><img src="${item.img}" alt="${item.name}"></td>
          <td>${item.name}</td>
          <td>$${price.toFixed(2)}</td>
          <td>${qty}</td>
          <td>$${rowTotal.toFixed(2)}</td>
          <td><a href="#" class="btn-delete">&times;</a></td>
        </tr>
      `;
      $cartTable.append(cartRow);
    });

    // Update total price
    const totalElement = $("#cart-content th:nth-child(5)");
    if (totalElement.length) {
      totalElement.text("$" + total.toFixed(2));
    }
  }

  // Update Cart Badge JS
  function updateCartBadge() {
    const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);
    $(".badge").text(itemCount);
  }

  // Initialize cart on page load
  renderCart();
  updateCartBadge();

  // ================== Shopping Cart Toggle JS ==================
  $("#shopping-cart").on("click", function (event) {
    event.stopPropagation(); // Prevent event bubbling
    $("#cart-content").toggle("blind", "", 500);
  });

  // Close cart when clicking outside
  $(document).on("click", function (event) {
    if (!$(event.target).closest("#shopping-cart, #cart-content").length) {
      $("#cart-content").hide();
    }
  });

  // ================== Delete Cart Item JS ==================
  $(document).on("click", ".btn-delete", function (event) {
    event.preventDefault();
    const foodName = $(this).closest("tr").find("td:nth-child(2)").text();
    cart = cart.filter((item) => item.name !== foodName); // Remove item from cart
    localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
    $(this).closest("tr").remove(); // Remove from DOM
    updateCartBadge();
    renderCart(); // Re-render the cart
  });

  // ================== Order Page Specific Logic ==================
  if (window.location.pathname.includes("order.html")) {
    // Render cart items on the order page
    const $orderTable = $(".tbl-full");
    let total = 0;

    function renderOrderCart() {
      $orderTable.find("tr:not(:first)").remove(); // Clear existing rows
      total = 0;

      cart.forEach((item, index) => {
        // Ensure item.price and item.qty are valid numbers
        const price = parseFloat(item.price);
        const qty = parseInt(item.qty);

        if (isNaN(price) || isNaN(qty)) {
          console.error(`Invalid price or quantity for item: ${item.name}`);
          return; // Skip this item if the price or quantity is invalid
        }

        const rowTotal = price * qty;
        total += rowTotal;

        const orderRow = `
          <tr>
            <td>${index + 1}</td>
            <td><img src="${item.img}" alt="${item.name}"></td>
            <td>${item.name}</td>
            <td>$${price.toFixed(2)}</td>
            <td>${qty}</td>
            <td>$${rowTotal.toFixed(2)}</td>
            <td><a href="#" class="btn-delete">&times;</a></td>
          </tr>
        `;
        $orderTable.append(orderRow);
      });

      // Update total price
      $(".tbl-full th:nth-child(6)").text("$" + total.toFixed(2));
    }

    // Initial render
    renderOrderCart();

    // Handle delete button clicks in the Order page
    $(document).on("click", ".btn-delete", function (event) {
      event.preventDefault();
      const foodName = $(this).closest("tr").find("td:nth-child(3)").text();
      cart = cart.filter((item) => item.name !== foodName); // Remove item from cart
      localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
      renderOrderCart(); // Re-render the cart
      updateCartBadge(); // Update the cart badge
    });

    // Handle form submission
    $("#order-form").on("submit", function (event) {
      event.preventDefault();

      // Collect user data
      const userData = {
        fullName: $("#full-name").val(),
        phone: $("#phone").val(),
        email: $("#email").val(),
        address: $("#address").val()
      };

      // Save the current cart to order history along with user data
      let orderHistory = JSON.parse(localStorage.getItem(ORDER_HISTORY_KEY)) || [];
      orderHistory.push({
        date: new Date().toISOString(), // Add a timestamp
        user: userData, // Save user data
        items: cart, // Save the current cart items
        total: total // Save the total price
      });
      localStorage.setItem(ORDER_HISTORY_KEY, JSON.stringify(orderHistory));

      // Send order data to backend
      sendDataToBackend("saveOrder", { user: userData, items: cart, total: total });

      // Show confirmation message
      $("#confirmation-message").fadeIn();

      // Clear the cart from localStorage
      localStorage.removeItem("cart");

      // Clear the cart UI
      cart = []; // Reset the cart array
      renderOrderCart(); // Re-render the cart
      updateCartBadge(); // Update the cart badge

      // Reset the form
      this.reset();

      // Hide the confirmation message after 5 seconds
      setTimeout(() => {
        $("#confirmation-message").fadeOut();
      }, 5000);
    });
  }

  // ================== Contact Page Specific Logic ==================
  if (window.location.pathname.includes("contact.html")) {
    $("#contact-form").on("submit", function (event) {
      event.preventDefault();

      // Collect contact data
      const contactData = {
        name: $("#contact-name").val(),
        email: $("#contact-email").val(),
        phone: $("#contact-phone").val(),
        subject: $("#contact-subject").val(),
        message: $("#contact-message").val()
      };

      // Save contact data to localStorage
      let contactHistory = JSON.parse(localStorage.getItem("contactHistory")) || [];
      contactHistory.push({
        date: new Date().toISOString(), // Add a timestamp
        contact: contactData
      });
      localStorage.setItem("contactHistory", JSON.stringify(contactHistory));

      // Debugging: Log contact data
      console.log("Contact data saved to localStorage:", contactHistory);

      // Send contact data to backend
      sendDataToBackend("saveContact", contactData);

      // Show confirmation message
      alert("Thank you for contacting us! We will get back to you soon.");

      // Reset the form
      this.reset();
    });
  }

  // ================== Login Page Specific Logic ==================
  if (window.location.pathname.includes("login.html")) {
    $("#login-form").on("submit", function (event) {
      event.preventDefault();

      // Collect login data
      const loginData = {
        email: $("#login-email").val(),
        password: $("#login-password").val()
      };

      // Save login data to localStorage
      let loginHistory = JSON.parse(localStorage.getItem("loginHistory")) || [];
      loginHistory.push({
        date: new Date().toISOString(), // Add a timestamp
        login: loginData
      });
      localStorage.setItem("loginHistory", JSON.stringify(loginHistory));

      // Debugging: Log login data
      console.log("Login data saved to localStorage:", loginHistory);

      // Send login data to backend
      sendDataToBackend("saveLogin", loginData);

      // Show confirmation message
      alert("Login successful!");

      // Reset the form
      this.reset();
    });
  }

  // ================== Function to Send Data to Backend ==================
  function sendDataToBackend(endpoint, data) {
    fetch(`http://localhost:5000/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(result => {
      console.log("Success:", result);
      alert("Data saved successfully!");
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Failed to save data. Please try again later.");
    });
  }
});