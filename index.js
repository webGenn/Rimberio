// --------------------------------Generating Products------------------------------------

let products = document.querySelector(".products");

let pdItem = [{
    id: 1,
    name: "Casual Red T-Shirt",
    starsDark: "★",
    starsBlank: "☆",
    desc: "Causal red t-shirt: comfy, versatile, stylish—perfect for everyday wear and flair.",
    Price: 244,
    Img: "images/redTshirt2.jpg"
},{
    id: 2,
    name: "Casual Blue T-Shirt",
    starsDark: "★",
    starsBlank: "☆",
    desc: "Blue t-shirt: serene hue, reminiscent of tranquil skies, a calming presence.",
    Price: 520,
    Img: "images/blackshirt4.jpg"  
},{
    id: 3,
    name: "Casual Black T-Shirt",
    starsDark: "★",
    starsBlank: "☆",
    desc: "Black t-shirt: sleek, timeless, effortlessly chic, a staple for any wardrobe.",
    Price: 685,
    Img: "images/blackTshirt3.jpg"
},{
    id: 4,
    name: "Formal Skyblue Shirt",
    starsDark: "★",
    starsBlank: "☆",
    desc: "Formal sky-blue shirt: refined elegance meets subtle sophistication, a sartorial statement.",
    Price: 975,
    Img: "images/shirt4.jpg"
},{
    id: 5,
    name: "Half Sleeve T-Shirt",
    starsDark: "★",
    starsBlank: "☆",
    desc: "Half-sleeve white and blue mix tee: breezy blend, casual charm, perfect summer attire.",
    Price: 500,
    Img: "images/shirt2.jpg"
},{
    id: 6,
    name: "Full Sleeve Shirt",
    starsDark: "★",
    starsBlank: "☆",
    desc: "Full sleeve blue dotted shirt: polished with a playful touch, refined yet whimsical.",
    Price: 1100,
    Img: "images/shirt1.jpg"
},{
    id: 7,
    name: "Half Sleeve Shirt",
    starsDark: "★",
    starsBlank: "☆",
    desc: "Half-sleeve white designed shirt: understated elegance adorned with intricate patterns, versatile sophistication.",
    Price: 789,
    Img: "images/shirt6.jpg"
},{
    id: 8,
    name: "Formal Blue Shirt",
    starsDark: "★",
    starsBlank: "☆",
    desc: "Formal blue shirt: epitome of professionalism, timeless elegance, wardrobe essential.",
    Price: 300,
    Img: "images/shirt7.jpg"
}]

const generateCard = () =>{
    return (products.innerHTML = pdItem.map(function(x){
        let {id, name, starsDark, starsBlank, desc, Price, Img} = x
        return `
        <div class="card" style="width: 18rem;">
        <img src="${Img}" alt="Image">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <span class="star">${starsDark}</>
          <span class="star">${starsDark}</>
          <span class="star">${starsDark}</>
          <span class="star">${starsBlank}</>
          <span class="star">${starsBlank}</>
          <p class="card-text">${desc}</p>
          <p>Price : ₹ <span>${Price}</span></p>
          <a href="order.html" class="btn btn-primary">Order Now</a>
        </div>
      </div>
        `
    }).join(""))
}
generateCard();

// -------------------------------------Form Validation-------------------------------------
// --------------------------NameValidate---------------------------------

function validateName(){
    let name = document.getElementById("name").value;
    let nameError = document.getElementById("NameError");
    if(name == ""){
        nameError.innerHTML = "Please Enter Name";
        nameError.style.color = "red"
        return false;
    }
    if(name.length >= 40){
        nameError.innerHTML = "Please Enter Valid Name";
        nameError.style.color = "red"
        return false;
    }
    else{
        nameError.innerHTML = "Name Is Valid"
        nameError.style.color = "green"
        return true;
    }
}

// ---------------------------------Address Validate-------------------------------

function validateAddress(){
    let Address = document.getElementById("inputAddress").value;
    let AddressError = document.getElementById("AddressError");

    if(Address == ""){
        AddressError.innerHTML = "Address Is Required";
        AddressError.style.color = "red";
        return false;
    }
    if(Address.length <= 10){
        AddressError.innerHTML = "Please Add More Details";
        AddressError.style.color = "red";
        return false;
    }
    if(Address.length >= 50){
        AddressError.innerHTML = "Address Is Too Complex";
        AddressError.style.color = "red";
        return false;
    }
    else{
        AddressError.innerHTML = "Address Is Valid";
        AddressError.style.color = "green";
        return true;
    }
}

// ---------------------------------Pin Validate----------------------------

function validatePin(){
    let Pin = document.getElementById("inputZip").value;
    let PinError = document.getElementById("PinError");
    if(Pin == ""){
        PinError.innerHTML = "Pin Code Is Required";
        PinError.style.color = "red";
        return false;
    }
    if(Pin.length != 6){
        PinError.innerHTML = "Pin Code Must Be 6 Digits";
        PinError.style.color = "red";
        return false;
    }
    else{
        PinError.innerHTML = "Pin Code Is Valid";
        PinError.style.color = "green";
        return true;
    }
}

// -----------------------------------Validate Phone-------------------------------

function validatePhone(){
    let phone = document.getElementById("PhoneNum").value;
    let phoneError = document.getElementById("PhoneError");

    if(phone == ""){
        phoneError.innerHTML = "Phone Number Is Required";
        phoneError.style.color = "red";
        return false;  
    }
    if(phone.charAt(0) != 9 && phone.charAt(0) != 8 && phone.charAt(0) != 7 && phone.charAt(0) != 6){
        phoneError.innerHTML = "Phone Number Must Start From 9,8,7,6";
        phoneError.style.color = "red";
        return false;  
    }
    if(phone.length != 10){
        phoneError.innerHTML = "Phone Number Must Be Of 10 Digits";
        phoneError.style.color = "red";
        return false;
    }
    else{
        phoneError.innerHTML = "Phone Number Is Valid";
        phoneError.style.color = "green";
        return true;
    }
}

// ------------------------------------Validating Button-----------------------------

function ValidateForm(){
    if(!validateName() || !validateAddress() || !validatePin() || !validatePhone()){
        alert("Please Fill Form Details");
        return false
    }
}