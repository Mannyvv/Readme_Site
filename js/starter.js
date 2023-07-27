

$(document).ready(function () {
  
  // Navbar color change
  let $window = $(window);

  $window.on("scroll", function () {
    let pixels = $window.scrollTop();
    // console.log(`This is the pixel distance: ${pixels}`);
    let navBarEl = $("#navbar");

    if (pixels > 130) {
      navBarEl
        .removeClass("navbar-light bg-light ")
        .addClass("navbar-dark bg-dark navbar-custom");
    } else {
      navBarEl
        .removeClass("navbar-dark bg-dark navbar-custom")
        .addClass("navbar-light bg-light");
    }
  });

  // Obtains month for the newsletter dropdown option
  let dateData = new Date();
  let monthNumber = dateData.getMonth();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  $("#newsMonth").text(`${month[monthNumber]} News Letter`);


  // Sign-Up Form and Thank you
  let signUpBtn = document.getElementById("nlSignUpBtn");
  signUpBtn.addEventListener("click", function () {
    let nlName = document.getElementById("nlName");
    if (nlEmail.value){
      let fullName = nlName.value;
      console.log(fullName)
      let nlThankYou = document.getElementById("nlThankYou");
      nlThankYou.textContent = `Thank you ${fullName}!`;
      $("#nlSignUpModal").modal('hide')
      $("#nlErrorText").hide()
      
      $("#nlThankYouModal").modal('show');
  } else{
    $("#nlErrorText").show()
  }
  });

  // Readmore Button
 


  // let readmore = document.getElementById('readMoreBtn')
  // if (readmore){
  // readmore.addEventListener("click",
  //   function () {
  //     var dots = document.getElementById("dots");
  //     var moreText = document.getElementById("more");
  //     var btnText = document.getElementById("readMoreBtn");
    
  //     if (dots.style.display === "none") {
  //       dots.style.display = "inline";
  //       btnText.innerHTML = "Read more";
  //       moreText.style.display = "none";
  //     } else {
  //       dots.style.display = "none";
  //       btnText.innerHTML = "Read less";
  //       moreText.style.display = "inline";
  //     }
  //   });}

});

