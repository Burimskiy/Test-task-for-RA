/* script for navigation menu */



window.addEventListener('scroll', function() {

    var navMenu = document.getElementById('nav-menu-id');
    var burgerBtnImg = document.querySelector('.burger-btn img');
    var scroll = window.pageYOffset;

    if (scroll > 70) {

        burgerBtnImg.src = 'assets/img/burger-menu-icon-black.svg';
        navMenu.classList.add('nav-menu-background');

    } else {

        burgerBtnImg.src = 'assets/img/burger-menu-icon.svg';
        navMenu.classList.remove('nav-menu-background');

    }

});


var burgerBtn = document.querySelector('.burger-btn');

burgerBtn.addEventListener('click', function() {

    var menuItems = document.querySelector('#nav-menu-id .items');
    var elemDiv = document.createElement('div');
    var body = document.querySelector('body');
    elemDiv.classList = 'mobile-menu';
    elemDiv.innerHTML = menuItems.outerHTML+'<div class="close-btn"><img src="assets/img/close-icon.svg" alt="close"></div>';
    document.body.appendChild(elemDiv);
    body.classList.add('body-overflow-hidden');
});



document.addEventListener("click", function(event) {
    var body = document.querySelector('body');
    if( null !== event.target.closest('.close-btn') ) {
        document.querySelector('.mobile-menu').remove();
        body.classList.remove('body-overflow-hidden');
    }
}, false);

/* animation */

var circleDescription = document.querySelector('.circle-description').getBoundingClientRect().top;
var windowHeight = window.innerHeight;



var circleItem = document.querySelectorAll('.circle-item');
var mobileText = document.querySelector('.mobile-text');
var circleWrapper = document.querySelector('.circles-wrapper');

window.addEventListener('scroll', function() {

    var scroll = window.pageYOffset;
    var circleText = document.querySelector('.circle-text');

    if ( window.innerWidth > 767) {


        if ( scroll + windowHeight >= circleDescription) {

            circleText.classList.add('animation-show');
            circleText.classList.remove('animation-no-show');

            for (var i = 0; i < circleItem.length; i++ ){
                var k = i+1;
                circleItem[i].classList.add('orbit-animation-'+k);
            }

            if ( circleItem.clientHeight) {

            }

        } else {

            circleText.classList.remove('animation-show');
            circleText.classList.add('animation-no-show');


        }

    }
    else {

        if ( scroll > 425 ){

            mobileText.classList.remove('mobile-text-before');
            mobileText.classList.add('mobile-text-after');
            circleWrapper.classList.remove('circles-wrapper-before');
            circleWrapper.classList.add('circles-wrapper-after');
            //document.querySelector('.mobile-animation-1').classList.add('mobile-animation-1-after');


            /*for (var i = 0; i < circleItem.length; i++ ){
                var k = i+1;
                circleItem[i].classList.add('mobile-animation-'+k);
            }*/

        }


        else {

            mobileText.classList.add('mobile-text-before');
            mobileText.classList.remove('mobile-text-after');
            document.querySelector('.mobile-animation-1').classList.remove('mobile-animation-1-before');

            circleWrapper.classList.add('circles-wrapper-before');
            circleWrapper.classList.remove('circles-wrapper-after');

        }

    }


    console.log(scroll);

});









