// // showing navbar when click menu on Mobile View
// const mobile = document.querySelector('.menu-toggle');
// const mobileLink = document.querySelector('.sidebar');

// mobile.addEventListener("click", function(){
//     mobile.classList.toggle("is-active");
//     mobileLink.classList.toggle("active");
// });

// close menu

// mobileLink.addEventListener("click", function() {
//     const menuBars = document.querySelector(".is-active");
//     if(window.innerWidth<=768 && menuBars) {
//         mobile.classList.toggle("is-active");
//         mobileLink.classList.toggle("active");
//     }
// });

// // move the menu to right and left when click on back and next

// var step =100;
// var stepFilter =60;
// var scrolling =true;

// $(".back").bind("click",function(e){
//     e.preventDefault();
//     $(".highlight-wrapper").animate({
//         scrollLeft: "-=" + step + "px"
//     });
// });
// $(".next").bind("click",function(e){
//     e.preventDefault();
//     $(".highlight-wrapper").animate({
//         scrollLeft: "+=" + step + "px"
//     });
// });

// // when click on back and next on menu filters

// // $(".back-menus").bind("click",function(e){
// //     e.preventDefault();
// //     $(".filter-wrapper").animate({
// //         scrollLeft: "-=" + stepFilter + "px"
// //     });
// // });

// $(".next-menus").("Click",function(e){
//     e.preventDefault();
//     $(".filter-wrapper").animate({
//         scrollLeft: "+=" + stepFilter + "px"
//     });
// });



// document.addEventListener("DOMContentLoaded", function () {
//     const mobile = document.querySelector('.menu-toggle');
//     const sidebar = document.querySelector('.sidebar');

// // Ensure both elements exist before adding event listeners
//     if (mobile && sidebar) {
//         mobile.addEventListener("click", function () {
//             sidebar.classList.toggle("active");
//         });

// // Close menu when clicking outside (only on mobile)
// document.addEventListener("click", function (event) {
//     if (!sidebar.contains(event.target) && !mobile.contains(event.target)) {
//         sidebar.classList.remove("active");
//     }
// });
// Move highlight section left and right
var step = 100;
var stepFilter = 60;

$(".back").click(function (e) {
    e.preventDefault();
    $(".highlight-wrapper").animate({ scrollLeft: "-=" + step + "px" });
});

$(".next").click(function (e) {
    e.preventDefault();
    $(".highlight-wrapper").animate({ scrollLeft: "+=" + step + "px" });
});

// Move menu filters left and right
$(".back-menus").click(function (e) {
    e.preventDefault();
    $(".filter-wrapper").animate({ scrollLeft: "-=" + stepFilter + "px" });
});

$(".next-menus").click(function (e) {
    e.preventDefault();
    $(".filter-wrapper").animate({ scrollLeft: "+=" + stepFilter + "px" });
});







