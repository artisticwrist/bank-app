const firstHomeSlide = document.querySelector(".first-slide");
const secondHomeSlide = document.querySelector(".second-slide");
const thirdHomeSlide = document.querySelector(".third-slide");
const fourthHomeSlide = document.querySelector(".fourth-slide");
const fifthHomeSlide = document.querySelector(".fifth-slide");
const signup = document.querySelector(".sign-up-slide");
const footerHome = document.querySelector(".home-p");
const footerSettings = document.querySelector(".settings-p");
const footerCard = document.querySelector(".card-p");
const footerProfile = document.querySelector(".profile-p");





function nextSlide(){
    secondHomeSlide.classList.remove('display-none');
    firstHomeSlide.style.display = "none";
}

function secondSlide(){
    secondHomeSlide.style.display="none";
    thirdHomeSlide.classList.remove("display-none")
}

function thirdslide(){
    thirdHomeSlide.style.display="none";
    fourthHomeSlide.classList.remove("display-none")
}

function fourthslide(){
    fourthHomeSlide.style.display="none";
    fifthHomeSlide.classList.remove("display-none")
}

function fifthslide(){
    fifthHomeSlide.style.display = "none";
    signup.classList.remove('display-none');
}

function skipwelcome(){
    firstHomeSlide.style.display = 'none';
    secondHomeSlide.style.display = 'none';
    thirdHomeSlide.style.display = 'none';
    fourthHomeSlide.style.display = 'none';
    fifthHomeSlide.style.display = 'none';
    signup.classList.remove('display-none');
}

let homeBody = document.querySelector(".footer-home-body")
let homeCard = document.querySelector(".footer-card-body")
let homeProfile = document.querySelector(".footer-profile-body")

// USER SECTIONS
let cardSection = document.querySelector(".card-section")
let homeSection = document.querySelector(".user-home")
let profileSection = document.querySelector(".profile-section")



function footerHomeClick(){
    footerHome.classList.remove("display-none");
    homeBody.style.background ="white";
    homeCard.style.background ="none";
    footerCard.classList.add("display-none")
    homeProfile.style.background ="none"
    footerProfile.classList.add("display-none")
    
    // show && remove pages

    cardSection.style.display="none"
    homeSection.style.display ="block";
    profileSection.style.display ="none";

    const tfSection = document.querySelector(".transfer-section")

    tfSection.classList.add('display-none')
}


function footerCardClick(){
    footerCard.classList.remove("display-none")
    homeCard.style.background ="white";
    homeBody.style.background = "none";
    footerHome.classList.add("display-none");
    homeProfile.style.background ="none"
    footerProfile.classList.add("display-none")



    // show && remove pages

    cardSection.classList.remove("display-none")
    homeSection.style.display ="none";
    cardSection.style.display ="block";
    profileSection.style.display ="none";


    const tfSection = document.querySelector(".transfer-section")

    tfSection.classList.add('display-none')
}


function footerProfileClick(){
    footerProfile.classList.remove("display-none")
    homeProfile.style.background ="white"
    homeBody.style.background = "none";
    footerHome.classList.add("display-none");
    footerCard.classList.add("display-none")
    homeCard.style.background ="none";

    // show && remove pages

    cardSection.style.display ="none";
    homeSection.style.display ="none";
    profileSection.classList.remove("display-none")
    profileSection.style.display ="block";

    const tfSection = document.querySelector(".transfer-section")

    tfSection.classList.add('display-none')
}


// USER CARD SETTINGS TOGGLE

function cardsettingClick(){
    const cardBtn  = document.querySelector(".card-setting .first-btn")
    if(cardBtn.innerText == "Turn on"){
        cardBtn.innerText = "Turn off"
    }else{
        cardBtn.innerText = "Turn on"
    }
}

function cardsettingClickTwo(){
    const cardBtn  = document.querySelector(".card-setting .second-btn")
    if(cardBtn.innerText == "Turn on"){
        cardBtn.innerText = "Turn off"
    }else{
        cardBtn.innerText = "Turn on"
    }
}

function cardsettingClickThree(){
    const cardBtn  = document.querySelector(".card-setting .third-btn")
    if(cardBtn.innerText == "Turn on"){
        cardBtn.innerText = "Turn off"
    }else{
        cardBtn.innerText = "Turn on"
    }
}


// NEW CARD SECTION

function newCardPage() {
    const mainCardPage = document.querySelector(".main-card-section")
    const newCardPage = document.querySelector(".new-card-section")

    mainCardPage.style.display = "none"
    newCardPage.classList.remove("display-none")
}

function backMainCard(){
    const mainCardPage = document.querySelector(".main-card-section")
    const newCardPage = document.querySelector(".new-card-section")
    
    mainCardPage.style.display = "block"
    newCardPage.classList.add("display-none")
}


// TRANSFER SECTION 

function showTransferSection() {
    const tfSection = document.querySelector(".transfer-section")
    homeSection.style.display = "none";    
    tfSection.classList.remove("display-none")
}


function closeTfSection(){
    const tfSection = document.querySelector(".transfer-section")
    homeSection.style.display = "block";
    tfSection.classList.add('display-none')

}



// TRANSFER BANK OPTION

function showBankTfPage(){
    const tfHome = document.querySelector(".tf-home-box")
    const bankTf = document.querySelector(".bank-trasnfer")

    tfHome.style.display = "none";
    bankTf.classList.remove("display-none")
}

function backToTfSection() {
    const tfHome = document.querySelector(".tf-home-box")
    const bankTf = document.querySelector(".bank-trasnfer")

    tfHome.style.display = "block";
    bankTf.classList.add("display-none")
}



// INCREMENT && DECREMENT AMOUNT 

let count = 0;
const amountCount = document.querySelector(".amount-count")

function decrementCount() {

    if(count == 0){
        count = 0
    }else{
        count = count - 100;
    }
    amountCount.innerText = count;
}

function incrementCount() {
    count = count + 100;
    amountCount.innerText = count;
}

function addFiveHundred(){
    count = 500;
    amountCount.innerText = count;
}

function addOneFive(){
    count = 1500;
    amountCount.innerText = count;
}


function addTwoThousand(){
    count = 2000;
    amountCount.innerText = count;
}

function addTenThousand(){
    count = 10000;
    amountCount.innerText = count;
}
