//Show the dropdown menu
function menuOneShow() {
    document.getElementById('menu-1').classList.toggle('show');
};
//Hide the dropdown menu on click outside
// $(document).on("click", function (e) {
//     if ($(e.target).is("#menu-1-button") === false) {
//         $(".show").toggle();
//         document.getElementById('menu-1').removeEventListener('click', menuOneShow);
//     }
// });

//Trigger click event for dropdown menu
window.onload = async function menuShow() {
    await document.querySelector('#menu-1-button').addEventListener('click', menuOneShow);
};

// Hamburger menu for mobile
document.getElementById('menu-trigger').addEventListener('click', sideMenuAppears);
document.querySelector('.menu-close').addEventListener('click', sideMenuDisappears);
function sideMenuAppears() {
    console.log('sideMenuAppears() is active');
    document.getElementById('side-menu').classList.add('show-menu');
}
function sideMenuDisappears() {
    console.log('sideMenuDisappears() is active');
    document.getElementById('side-menu').classList.remove('show-menu');
}