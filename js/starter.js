$(document).ready(function () {
  let $window = $(window);

  $window.on("scroll", function () {
    let pixels = $window.scrollTop();
    console.log(`This is the pixel distance: ${pixels}`);
    let bar = document.getElementById("navbar");

    if (pixels > 130) {
      bar.setAttribute(
        "class",
        "navbar navbar-expand-lg navbar-dark bg-dark sticky-top navbar-custom"
      );
    } else {
      bar.setAttribute(
        "class",
        "navbar navbar-expand-lg navbar-light bg-light sticky-top"
      );
    }
  });

  let dateData = new Date();
  let monthNumber = dateData.getMonth();
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  $("#newsMonth").text(`${month[monthNumber]} News Letter`)

//   let observer = new MutationObserver(function(){})

});
