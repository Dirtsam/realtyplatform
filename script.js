function togglePlayPause() {
  var video = document.querySelector("video");
  video.paused ? video.play() : video.pause();
  video.classList.toggle("playing");
  var overlay = document.querySelector(".overlay");
  overlay.classList.add("hidden");
}

// testimonial let currentIndex = 0; const numSlides =
let currentIndex = 0;
const numSlides = document.querySelectorAll(".testimonial-slide").length;

function showSlide(index) {
  const testimonialContent = document.querySelector(".testimonial-content");
  const slideWidth = document.querySelector(".testimonial-slide").offsetWidth;
  testimonialContent.style.transform = `translateX(-${index * slideWidth}px)`;
  currentIndex = index;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % numSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + numSlides) % numSlides;
  showSlide(currentIndex);
}

// Automatically slide every 5 seconds
setInterval(() => {
  nextSlide();
}, 5000);

// phone number form
function sendNum() {
  let phoneNumber = document.getElementById("phone").value;
  let clientName = document.getElementById("name").value;

  let body = "Full Name : " + clientName + " <br> Phone Number: " + phoneNumber;
  Email.send({
    SecureToken: "1c301a3f-e782-4c79-9260-79775e519e70",
    To: "rohit.realtyplatform@gmail.com",
    From: "sanjay13realty@gmail.com",
    Subject: "New Enquiry",
    Body: body,
  }).then((message) => (window.location.href = "./thankyou.html"));
}

// Alert Message function()
function message() {
  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const success = document.getElementById("successMsg");
  const danger = document.getElementById("alertId");
  if (name.value === "" || phone.value === "") {
    danger.style.display = "block";
  } else {
    setTimeout(() => {
      name.value = "";
      phone.value = "";
    }, 2000);
    success.style.display = "block";
    console.log(name.value);
    console.log(phone.value);
    window.location.href = "./thankyou.html";
    // window.open("./download/paras.pdf", "_blank");
  }

  setTimeout(() => {
    danger.style.display = "none";
    success.style.display = "none";
  }, 3000);
}

// Contact
function contactUs() {
  let fName = document.getElementById("fName").value;
  let contactNum = document.getElementById("contactNum").value;
  let email = document.getElementById("email").value;
  let body =
    "Full Name : " +
    fName +
    "<br> Email : " +
    email +
    " <br> Contact Number : " +
    contactNum;
  Email.send({
    SecureToken: "1c301a3f-e782-4c79-9260-79775e519e70",
    To: "rohit.realtyplatform@gmail.com",
    From: "sanjay13realty@gmail.com",
    Subject: "Filled Contact Form",
    Body: body,
  }).then((message) => (window.location.href = "./thankyou.html"));
}
