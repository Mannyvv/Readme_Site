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
});
