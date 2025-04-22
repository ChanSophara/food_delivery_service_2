<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Online Food Delivery Website</title>
    <!-- Favicon -->
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
    <!-- Fontawesome CSS -->
    <link rel="stylesheet" href="css/font-awesome/css/font-awesome.css">
    <!-- Hover CSS -->
    <link rel="stylesheet" href="css/hover-min.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/style.css">
    <style>
        /* Style for the confirmation message */
        .confirmation-message {
            display: none;
            background-color: #44bd32;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px;
            margin-top: 20px;
            font-size: 1.5em;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <!-- Navigation Section Start -->
    <header class="navbar">
        <nav id="site-top-nav" class="navbar-menu navbar-fixed-top">
            <div class="container">
                <!-- logo -->
                <div class="logo">
                    <a href="index.html" title="Logo">
                        <img src="img/logo.png" alt="Logo" class="img-responsive">
                    </a>
                </div>
                <!-- Main Menu -->
                <div class="menu text-right">
                    <ul>
                        <li><a class="hvr-underline-from-center" href="index.html">Home</a></li>
                        <li><a class="hvr-underline-from-center" href="categories.html">Categories</a></li>
                        <li><a class="hvr-underline-from-center" href="foods.html">Foods</a></li>
                        <li><a class="hvr-underline-from-center" href="order.html">Order</a></li>
                        <li><a class="hvr-underline-from-center" href="contact.html">Contact</a></li>
                        <li><a class="hvr-underline-from-center" href="login.html">Login</a></li>
                        <li>
                            <a id="shopping-cart" class="shopping-cart">
                                <i class="fa fa-cart-arrow-down"></i>
                                <span class="badge">0</span>
                            </a>
                            <div id="cart-content" class="cart-content">
                                <h3 class="text-center">Shopping Cart</h3>
                                <table class="cart-table" border="0">
                                    <tr>
                                        <th>Food</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                    <!-- Cart items will be dynamically added here -->
                                </table>
                                <a href="order.html" class="btn-primary">Confirm Order</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <!-- Navigation Section End -->

    <!-- Food Order Section Start -->
    <section class="order">
        <div class="container">
            <h2 class="text-center">Fill this form to confirm your order.</h2>
            <div class="confirmation-message" id="confirmation-message">
                Thank you for your order! 🎉<br>Your order will arrive in a mean time.
            </div>
            <table class="tbl-full" border="0">
                <tr>
                    <th>S.N.</th>
                    <th>Food</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
                <!-- Cart items will be dynamically added here -->
            </table>
            <form id="order-form" class="form">
                <fieldset>
                    <legend>Delivery Details</legend>
                    <p class="label">Full Name</p>
                    <input type="text" id="full-name" placeholder="Enter your name..." required>
                    <p class="label">Phone Number</p>
                    <input type="tel" id="phone" placeholder="Enter your phone..." required>
                    <p class="label">Email</p>
                    <input type="email" id="email" placeholder="Enter your email..." required>
                    <p class="label">Address</p>
                    <input type="text" id="address" placeholder="Enter your address..." required>
                    <input type="submit" value="Confirm Order" class="btn-primary">
                </fieldset>
            </form>
        </div>
    </section>
    <!-- Food Order Section End -->
     

    <!-- Footer Section Start -->
    <section class="footer">
        <div class="container">
            <div class="grid-3">
                <div class="text-center">
                    <h3>About Us</h3><br>
                    <p>This is a frontend project about Food ordering system in which we are working with to improve customer service and improve sell of the resterant And to promote Khmer/Asian cuisine((✿◡‿◡))</p>
                </div>
                <div class="texr-center">
                    <h3>Site Map</h3><br>
                    <div class="site-links">
                        <a href="categories.html">Categories</a>
                        <a href="foods.html">Foods</a>
                        <a href="order.html">Order</a>
                        <a href="contact.html">Contact</a>
                        <a href="login.html">Login</a>
                    </div>
                </div>
                <div class="social-links">
                    <h3>Social Links</h3><br>
                    <div class="social">
                        <ul>
                            <li><a href="#"><img src="https://img.icons8.com/color/48/null/facebook-new.png"/></a></li>
                            <li><a href="#"><img src="https://img.icons8.com/fluency/48/null/instagram-new.png"/></a></li>
                            <li><a href="#"><img src="https://img.icons8.com/color/48/null/twitter--v1.png"/></a></li>
                            <li><a href="#"><img src="https://img.icons8.com/color/48/null/linkedin-circled--v1.png"/></a></li>
                            <li><a href="#"><img src="https://img.icons8.com/color/48/null/youtube-play.png"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Footer Section End -->

    <!-- Copyright Section start -->
    <section class="copyright">
        <div class="container text-center">
            <p>All rights reserved. Design By <a href="#">Group 3 - I4AMS</a></p>
        </div>
        <a id="back-to-top" class="btn-primary">
            <i class="fa fa-angle-double-up"></i>
        </a>
    </section>
    <!-- Copyright Section End -->

    <!-- JQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <!-- Jquery UI -->
    <script src="https://code.jquery.com/ui/1.13.0/jquery-ui.js"></script>
    <!-- Custom JS -->
    <script src="js/custom.js"></script>
</body>
</html>

/* CSS Style For All */
* {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}
input {
  outline: 0;
}
input[type="submit"] {
  border: 0;
  cursor: pointer;
}
a {
  color: rgb(226, 74, 74);
  text-decoration: none;
  transition: 0.5s;
}
a:hover {
  color: #6c5ce7;
}
.container {
  width: 85%;
  margin: 0 auto;
  padding: 15px;
}
.btn-delete {
  background: #ff0000;
  transition: 0.5s;
  padding: 3px 5px;
  color: #fff;
  opacity: 0.8;
  display: inline;
  border-radius: 4px;
}
.btn-delete:hover {
  color: #fff;
}
.btn-primary {
  background: rgb(226, 74, 74);
  color: #fff;
  padding: 5px 10px;
  font-size: 15px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.5s;
}
.btn-primary:hover {
  background: #6c5ce7;
  color: #fff;
}
.label {
  margin-bottom: 10px;
  font-weight: bold;
}
.img-responsive {
  width: 100%;
}
.img-curve {
  border-radius: 10px;
}
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.text-white {
  color: #fff;
}
.bold {
  font-weight: bold;
}
h2 {
  color: #2f3542;
  font-size: 32px;
  margin-bottom: 25px;
}
h3 {
  font-size: 24px;
}
.heading-border {
  height: 3px;
  width: 70px;
  background: rgb(226, 74, 74);
  margin: auto;
  margin-top: -10px;
  margin-bottom: 15px;
}
fieldset {
  border: 1px solid #fff;
  margin: 40px;
  padding: 25px;
  border-radius: 5px;
  padding-bottom: 0;
}
fieldset legend {
  font-size: 23px;
  color: #2f3542;
}
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px 30px;
}
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px 30px;
}
/* CSS Style For All End */

/* Navigation Section Style */
.navbar {
  margin-top: 80px;
}
.navbar-menu {
  padding: 10px 0;
  background: #fff;
  transition: all 0.5s ease-in-out;
}
.site-top-nav {
  background: #fff;
  padding: 0;
  box-shadow: 2px -4px 13px 0px #000;
}
.navbar-fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1030;
  box-shadow: 2px -7px 13px 0px #000;
}
.navbar-fixed-top .container {
  padding: 0 15px;
}
.logo {
  width: 120px;
  float: left;
  padding: 5px 5px;
}
.menu {
  line-height: 60px;
  position: relative;
}
.menu ul {
  list-style: none;
  width: 80%;
  float: right;
}
.menu ul li {
  display: inline;
  padding: 10px;
  font-weight: bold;
}
.menu ul li:last-of-type {
  text-align: center;
}
.hvr-underline-from-center:before {
  background: #6c5ce7;
  height: 2px;
  bottom: 10px;
}
.badge {
  color: #fff;
  background: #ff0000;
  font-size: 12px;
  padding: 2px 3px;
  border-radius: 3px;
}
.shopping-cart {
  color: #6c5ce7;
  cursor: pointer;
  font-size: 18px;
}
.cart-content {
  background: #fff;
  width: 440px;
  position: absolute;
  top: 62px;
  right: 0;
  box-shadow: 0px 4px 10px 0px #bfbfbf;
  padding: 10px 10px;
  display: none;
}
.cart-table {
  width: 100%;
  border-collapse: collapse;
}
.cart-table th,
.cart-table td {
  border-bottom: 1px solid #ddd;
  pad: 0px 5px;
  font-size: 14px;
  font-weight: normal;
  text-align: center;
}
.cart-table th {
  font-weight: bold;
  border-top: 1px solid #ddd;
}
.cart-table img {
  width: 50px;
  height: 50px;
  vertical-align: middle;
  border-radius: 100%;
}
/* Navigation Section Style End */

/* Food Search Section Style Start */
.food-search {
  background-image: url(../img/search-bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 95px 0;
  background-attachment: fixed;
}
.food-search input[type="search"] {
  width: 50%;
  padding: 11px;
  font-size: 16px;
  border: none;
  border-radius: 5px 0px 0px 5px;
  margin-right: -5px;
}
.food-search .btn-primary {
  padding: 12px;
  transition: 0.5s;
  border-radius: 0px 5px 5px 0px;
}
/* Food Search Section Style End */

/* Categories Section Style Start */
.categories {
  background-image: url(../img/category-bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  padding: 55px 0;
}
.categories h3 {
  background: #2f3542;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
}
.float-container {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  margin-top: 20px;
  height: 350px;
  border:1px solid #ddd;
}
.categories .float-container img {
  transition: 0.5s;
  height: 100%;
}
.categories .float-container:hover img {
  transform: scale(1.2);
}
/* Categories Section Style End */

/* Food Section Style Start */
.food-menu {
  background-image: url(../img/food-bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  padding: 55px 0;
  background-position: center;
  background-attachment: fixed;
}
.food-menu-box {
  padding: 23px;
  background: #fff;
  border-radius: 10px;
}
.food-menu-img {
  width: 20%;
  float: left;
}
.food-menu-desc {
  width: 70%;
  float: left;
  margin-left: 40px;
}
.food-price {
  font-size: 18px;
  margin: 10px 0;
}
.food-details {
  font-size: 16px;
  color: #747d8c;
}
.food-menu-desc .btn-primary {
  margin-top: 15px;
  display: block;
}
/* Food Section Style End */

/* Footer Section Style Start */
.footer {
  overflow: hidden;
  background: rgba(8, 8, 8, 0.85);
  color: #fff;
}
.footer .grid-3 {
  padding: 30px 0;
}
.site-links a {
  display: block;
  margin: 10px 0;
}
.social ul {
  list-style: none;
}
.social ul li {
  display: inline;
  padding: 8px;
}
/* Footer Section Style End */

/* Copyright Section Style Start */
.copyright {
  overflow: hidden;
  background: #000;
  color: #fff;
}
/* Copyright Section Style End */

/* Bact-To-Top Section Style Start */
#back-to-top {
  position: fixed;
  bottom: 40px;
  right: 60px;
  margin: 0;
  font-size: 16px;
  height: 19px;
  width: 40px;
  padding: 10px 0;
  text-align: center;
  border-radius: 5px;
  z-index: 9999;
  display: none;
}
/* Bact-To-Top Section Style End */

/* Order Page Style Start */
.order {
  padding: 20px 0;
}
.order .tbl-full {
  margin-bottom: 50px;
  width: 100%;
  border-collapse: collapse;
}
.order .tbl-full img {
  width: 35px;
  height: 35px;
  vertical-align: middle;
  border-radius: 100%;
}
.order .tbl-full tr {
  border-left: 1px solid #bfbbbb;
  border-right: 1px solid #bfbbbb;
}
.order .tbl-full tr th,
.order .tbl-full tr td {
  border-bottom: 1px solid #bfbbbb;
  padding: 8px 8px;
  text-align: center;
}
.order .tbl-full tr th {
  border-top: 1px solid #bfbbbb;
}
.form fieldset,
.contact fieldset,
.login fieldset {
  border: 1px solid #bfbbbb;
}
.form {
  box-shadow: 0 0 20px 2px #1a171780;
  width: 70%;
  padding: 7px 0;
  margin: 0 auto;
  border-radius: 3px;
}
.form input,
.form textarea {
  width: 98%;
  padding: 8px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #bfbbbb;
  margin-bottom: 25px;
}
.form input[type="submit"] {
  width: 30%;
  border-radius: 5px;
}
/* Order Page Style End */

/* Contact Page Style Start */
.contact,
.login {
  padding: 65px 0;
}
#gmap_canvas {
  width: 100%;
  height: 400px;
  border: none;
}
/* Contact Page Style End */




