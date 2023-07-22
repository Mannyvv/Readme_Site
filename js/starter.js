

$(document).ready(function () {
  let $window = $(window);

  $window.on("scroll", function () {
    let pixels = $window.scrollTop();
    console.log(`This is the pixel distance: ${pixels}`);
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


  // Sign-Up Form
  let signUpBtn = document.querySelector("#nlSignUpBtn");
  signUpBtn.addEventListener("click", function () {
    let nlName = document.querySelector("#nlName");
    if (nlEmail.value){
      let fullName = nlName.value;
      let nlThankYou = document.querySelector("#nlThankYou");
      nlThankYou.textContent = `Thank you ${fullName}!`;
      $("#nlSignUpModal").modal('hide')
      $("#nlErrorText").hide()
      
      $("#nlThankYouModal").modal('show');
  } else{
    $("#nlErrorText").show()
  }


  })


});

