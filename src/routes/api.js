const express = require('express');
const router = express.Router();
const AuthController = require("../controllers/AuthController");
const UserController = require("../controllers/UserController");
const ProductController = require("../controllers/ProductController");

//Api Routing end point

// Auth Routes
router.get('/UserOTP/:email', AuthController.userOtp);
router.get('/VerifyLogin/:email/:otp', AuthController.verifyLogin);
router.get('/UserLogout', AuthController.userLogout);

// User Routes
router.post('/CreateProfile', UserController.createUserProfile)
router.post('/UpdateProfile', UserController.updateUserProfile)
router.get('/ReadProfile', UserController.readUserProfile)

// Product Routes
router.get('/ProductBrandList', ProductController.productBrandList)
router.get('/ProductCategoryList', ProductController.productCategoryList)
router.get('/ProductSliderList', ProductController.productSliderList)
router.get('/ProductListByBrand/:BrandID', ProductController.productListByBrand)
router.get('/ProductListByCategory/:CategoryID', ProductController.productListByCategory)
router.get('/ProductListBySmilier/:CategoryID', ProductController.productListBySmilier)
router.get('/ProductListByKeyword/:Keyword', ProductController.productListByKeyword)
router.get('/ProductListByRemark/:Remark', ProductController.productListByRemark)
router.get('/ProductDetails/:ProductID', ProductController.productDetails)
router.get('/ProductReviewList/:ProductID', ProductController.productReviewList)

// Wish List Routes
router.post('/SaveWishList', WishListController.saveWishList)
router.post('/RemoveWishList', WishListController.removeWishList)
router.get('/WishList', WishListController.wishList)

// Cart List Routes
router.post('/SaveCartList', CartController.saveCartList)
router.post('/RemoveCartList', CartController.removeCartList)
router.get('/CartList', CartController.cartList)



module.exports = router;