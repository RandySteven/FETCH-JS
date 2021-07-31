/**
 * Register Validation
 */
const registerValidation = () => {
    let validation1, validation2, validation3, validation4, validation5, validation6;
    let alphanumbs = /^[0-9a-zA-Z]+$/;
    let numbs = /^[0-9]+$/;
    let alpha = /^[A-Za-z]+$/;
    let fullName = document.forms['registerForm']['fullName'].value;
    let email = document.forms['registerForm']['email'].value;
    let password = document.forms['registerForm']['password'].value;
    let address = document.forms['registerForm']['address'].value;
    let dob = document.forms['registerForm']['dob'].value;
    let phoneNumber = document.forms['registerForm']['phoneNumber'].value;

    let success = "text-success";
    let error = "text-error";

    /**
     * Full Name Validation
     * Full Name is not null
     * Full Name length must more than 3
     * Full Name must alphabet
     */
    if(fullName != "" && fullName.length > 3 ){
        let message;
        if(fullName.match(alpha)){
            message = "Full Name is filled"
            document.getElementById('message_fullName').innerHTML = validationMessage(success, message)
            validation1 = true;
        }else{
            message = "Full Name only alphabet"
            document.getElementById('message_fullName').innerHTML = validationMessage(error, message)
            validation1 = false
        }
    }else{
        if(fullName == ""){
            message = "Full Name must filled";
        }
        if(fullName.length < 3){
            message = "Full Name length must more than 3"
        }
        document.getElementById('message_fullName').innerHTML = validationMessage(error, message)
        validation1 = false;
    }

    /**
     * Email validation
     * Email is not null
     * Email length must more than 5
     * Email must ends with .com
     * Email includes @
     */
    if(email != "" && email.length > 5 && email.endsWith('.com') && email.includes('@')){
        let message;
        message = "Email is filled"
        document.getElementById('message_email').innerHTML = validationMessage(success, message);
        validation2 = true;
    }else{
        if(email == ""){
            message = "Email must required";
        }
        if(email.length < 5){
            message = "Email length must more than 5";
        }
        if(!email.endsWith('.com')){
            message = "Email must end with .com";
        }
        if(!email.includes('@')){
            message = "Email must contains @";
        }
        document.getElementById('message_email').innerHTML = validationMessage(error, message);
        validation2 = false;
    }

    /**
     * Address validation
     * Address is not null
     * Address must more than 5
     * Address must start with Jln.
     */
    if(address != "" && address.length > 5 && address.startsWith('Jln.')){
        let message;
        message = "Address is filled";
        document.getElementById('message_address').innerHTML = validationMessage(success, message);
        validation3 = true;
    }else{
        if(address == ""){
            message = "Address must required";
        }
        if(address.length < 5){
            message =" Address length must more than 5";
        }
        if(!address.startsWith('Jln.')){
            message = "Address must start with Jln.";
        }
        document.getElementById('message_address').innerHTML = validationMessage(error, message);
        validation3 = false;
    }

    /**
     * Phone number validation
     * Phone number length must more than 12 max 13
     * Phone number start with +62
     */
    if(phoneNumber != "" && (phoneNumber.length == 13 || phoneNumber.length == 12) && phoneNumber.startsWith('+62')){
        let message;
        message = "Phone Number is filled";
        document.getElementById('message_phoneNumber').innerHTML = validationMessage(success, message);
        validation4 = true;
    }else{

        if(phoneNumber == ""){
            message = "Phone Number must required";
        }

        if(phoneNumber.length < 12){
            message = "Phone Number cannot less than 12";
        }

        if(phoneNumber.length > 13){
            message = "Phone Number cannot more than 13";
        }

        if(!phoneNumber.startsWith('+62')){
            message = "Phone Number must start with +62";
        }

        document.getElementById('message_phoneNumber').innerHTML = validationMessage(error, message);
        validation4 = false;
    }

    /**
     * Password validation
     * Password is not null
     * Password length min 8 max 10
     * Password must alphanumberic
     */
    if(password != "" && password.length >= 8 && password.length <=10){
        let message;
        
        if(password.match(alphanumbs)){
            message = "Password filled";
            document.getElementById('message_password').innerHTML = validationMessage(success, message);
            validation5 = true;
        }else{
            message = "Password must alphanumbs";
            document.getElementById('message_password').innerHTML = validationMessage(error, message);
            validation5 = false;
        }

    }else{
        if(password == ""){
            message = "Password must required";
        }
        if(password.length < 8){
            message = "Password length must more than 8"
        }
        if(password.length > 10){
            message = "Password length must less than 10"
        }
        document.getElementById('message_password').innerHTML = validationMessage(error, message);
        validation5 = false;
    }

    let dateOfBirth = Date.parse(dob)
    let date =  new Date();
    let now = date.getTime();

    if(now - dateOfBirth >= 18){
        let message;
        message = "You are legal now"
        document.getElementById('message_dob').innerHTML = validationMessage(success, message);
        validation6 = true;
    }else{
        message = "You must 18 YO";
        document.getElementById('message_dob').innerHTML = validationMessage(error, message);
        validation6 = false;
    }

    /**
     * Validation
     */
    if(validation1 == false || 
        validation2 == false ||
        validation3 == false ||
        validation4 == false ||
        validation5 == false ||
        validation6 == false){
            return false;
        }
    else {
        return true;
    }
}

/**
 * Message Validation
 */
const validationMessage = (category, message) => {
    return `<p class="${category}">${message}</p>`
}

/**
 * Login Validation Function
 */
const loginValidation = () => {
    let validation1, validation2;
    let email = document.forms['loginForm']['email'].value;
    let password = document.forms['loginForm']['password'].value;
    let success = "text-success";
    let error = "text-error";
    
    if(email != "" && email.length > 5 && email.endsWith('.com') && email.includes('@')){
        let message;
        message = "Email is filled"
        document.getElementById('message_email').innerHTML = validationMessage(success, message);
        validation1 = true;
    }else{
        if(email == ""){
            message = "Email must required";
        }
        if(email.length < 5){
            message = "Email length must more than 5";
        }
        if(!email.endsWith('.com')){
            message = "Email must end with .com";
        }
        if(!email.includes('@')){
            message = "Email must contains @";
        }
        document.getElementById('message_email').innerHTML = validationMessage(error, message);
        validation1 = false;
    }

    if(password != "" && password.length >= 8 && password.length <=10){
        let message;
        
        if(password.match(alphanumbs)){
            message = "Password filled";
            document.getElementById('message_password').innerHTML = validationMessage(success, message);
            validation2 = true;
        }else{
            message = "Password must alphanumbs";
            document.getElementById('message_password').innerHTML = validationMessage(error, message);
            validation2 = false;
        }

    }else{
        if(password == ""){
            message = "Password must required";
        }
        if(password.length < 8){
            message = "Password length must more than 8"
        }
        if(password.length > 10){
            message = "Password length must less than 10"
        }
        document.getElementById('message_password').innerHTML = validationMessage(error, message);
        validation2 = false;
    }

    if(validation1 == false || validation2 == false){
        return false;
    }else{
        return true;
    }
}

/**
 * Fetch product.json
 */
fetch('public/json/product.json')
    .then(res => res.json())
    .then(res => {
       let products = res.product;
       let getProduct = document.getElementById('product')
       let datas = "";
       products.forEach((product) => {
           datas += getProductJSON(product)
       })
       getProduct.innerHTML = datas;
    })
    .catch(err => {
        console.log(err)
    })

/**
 * Get Product JSON
 */
const getProductJSON = (product) => {
    return `
    <div class="card">
        <div class="card__cover text-center">
            ${product.productName}
        </div>

        <div class="card__image">
            <img src="images/${product.productImage}" alt="${product.productImage}" width="270" height="240"/>
        </div>

        <div class="card__content">
            <p> Price : <b> ${product.productPrice} </b> </p>
            <p>${product.productDescription}</p>
        </div>
        
        <div class="text-center" style="padding-bottom:12px">
            <a href="#" class="btn btn-blue">Add to Cart</a>
        </div>
    </div>
    `
}

/**
 * Fetch user.json
 */
fetch('public/json/user.json')
    .then(res => res.json())
    .then(res => {
        let users = res.users;
        let getUser = document.getElementById('users');
        let datas = "";
        // console.log(users.length)
        users.forEach((user) => {
            datas += getUserJSON(user)
        })
        getUser.innerHTML = datas;
    })
    .catch(err => console.log(err))

/**
 * Get User JSON
 */
const getUserJSON = (user) => {
    return `
        <tr class="border-black">
            <td class="border-black">${user.user_id}</td>
            <td class="border-black">${user.fullName}</td>
            <td class="border-black">${user.email}</td>
            <td class="border-black">${user.phoneNumber}</td>
            <td class="border-black">${user.address}</td>
        </tr>
    `
}

/**
 * Fetch transaction.json
 */
fetch('public/json/transaction.json')
    .then(res => res.json())
    .then(res => {
        let transactions = res.transactions;
        let getTransaction = document.getElementById('transactions');
        let datas = "";
        transactions.forEach((transaction) => {
            datas += getTransactionJSON(transaction);
        })
        getTransaction.innerHTML = datas;
    })
    .catch(err => console.log(err))

/**
 * Get Transaction JSON
 */
const getTransactionJSON = (transaction) => {
    return `
        <tr>
            <td class="border-black">${transaction.transaction_id}</td>
            <td class="border-black">${transaction.transaction_date}</td>
            <td class="border-black">${transaction.user.fullName}</td>
        </tr>
    `
}

var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

/**
 * Slide Show
 */
const slideShow = () => {
    var slide = 0;
    let slides = document.getElementsByClassName("slide-show");
    for(let i = 0 ; i < slides.length ; i++){
        slides[i].style.display="none";
    }
    slide++;
    if(slide>slides.length){
        slide = 1;
    }
    slide[slide-1].style.display="block";
    setTimeout(slideShow, 10000)
}

// slideShow()

/**
 * Fetch deliver.json
 */
fetch('public/json/deliver.json')
    .then(res => res.json())
    .then(res => {
        let delivers = res.delivers;
        let getDeliver = document.getElementById('delivers');
        let datas = "";
        delivers.forEach(deliver => {
            datas += getDeliverJSON(deliver);
        });
        getDeliver.innerHTML = datas;
    })
    .catch(err => console.log(err))

const getDeliverJSON = (deliver) => {
    let status = "";
    if(deliver.statement == "Delivered"){
        status = "delivered"
    }
    if(deliver.statement == "Pending"){
        status = "pending"
    }
    if(deliver.statement == "Return"){
        status = "return"
    }
    if(deliver.statement == "Inprogress"){
        status = "inprogress";
    }
    return `
    <tr>
        <td>${deliver.product.productName}</td>
        <td>${deliver.product.productPrice}</td>
        <td>${deliver.payment}</td>
        <td>
            <span class="status ${status}">
                ${deliver.statement}
            </span>
        </td>
    </tr>
    `
}

/**
 * Toggle Menu
 */
 const toggleMenu = () => {
    let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
    main.classList.toggle('active')
}