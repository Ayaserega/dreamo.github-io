(function() {
	var link = document.querySelector(".login"),
	popup = document.querySelector(".modal-content"),
	close = document.querySelector(".modal-content-close"),
	login = document.querySelector("#enter-1"),
	password = document.querySelector("#enter-2"),
	booking = document.querySelector("#book-form"),
	book_date = document.querySelector("#book_date"),
	book_time = document.querySelector("#book_time"),
	book_name = document.querySelector("#book_name"),
	book_phone = document.querySelector("#book_phone"),
	smallImg, bigImg, i,
	container, btn, photos, photoVisible;

  // Форма входа
  // Открытие с анимацией
  link.addEventListener("click", function(event) {
  	event.preventDefault();
  	popup.classList.remove("enter-form-error");
  	popup.classList.add("modal-content-show");
  	popup.classList.add("modal-content-animation");
  	if (storage) {
  		login.value = storage;
  		password.focus();
  	} else {
  		login.focus();
  	}
  });

  // Закрытие формы по нажатию на Esc
  window.addEventListener("keydown", function(event) {
  	if (event.keyCode == 27
  		&& popup.classList.contains("modal-content-show")) {
  		popup.classList.remove("modal-content-show");
  	popup.classList.remove("modal-content-animation");
  }
});

  // Закрытие формы по нажатию на крестик или в любое место за пределами формы
  close.addEventListener("click", function(event) {
  	event.preventDefault();
  	popup.classList.remove("modal-content-show");
  	popup.classList.remove("modal-content-animation");
  });

    // Закрытие формы по нажатию на крестик или в любое место за пределами формы
    close.addEventListener("click", function(event) {
    	event.preventDefault();
    	popup.classList.remove("modal-content-show");
    	popup.classList.remove("modal-content-animation");
    });

    document.addEventListener("click", function(e) {
    	var formOpened = document.querySelector(".modal-content").classList.contains("modal-content-show");
    	if ((formOpened == true) && (!(e.target == link)) && (!(e.target==popup))
    		&& (!(e.target.parentNode==popup)) && (!(e.target.parentNode.parentNode==popup))) {
    		popup.classList.remove("modal-content-show");
    	popup.classList.remove("modal-content-animation");
    }
  });

  })();

  /* Open when someone clicks on the span element */
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("js-btn").style.display = "none";
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("js-btn").style.display = "none";
  }

 $(document).ready(function(){
      $('#nav-icon3').click(function(){
        $(this).toggleClass('open');
      });

      $('.card-1').mouseenter(function(){
        $('.card-1, .days-1').css({'background-color': '#37aef1', 'color': 'white'});
      });
      $('.card-1, .days-1').mouseleave(function(){
        $('.card-1, .days-1').css({'background-color': 'white', 'color': 'black'});
      });

      $('.card-2').mouseenter(function(){
        $('.card-2, .days-2').css({'background-color': '#37aef1', 'color': 'white'});
      });
      $('.card-2, .days-2').mouseleave(function(){
        $('.card-2, .days-2').css({'background-color': 'white', 'color': 'black'});
      });

      $('.card-3').mouseenter(function(){
        $('.card-3, .days-3').css({'background-color': '#37aef1', 'color': 'white'});
      });
      $('.card-3, .days-3').mouseleave(function(){
        $('.card-3, .days-3').css({'background-color': 'white', 'color': 'black'});
      });

      $('.card-4').mouseenter(function(){
        $('.card-4, .days-4').css({'background-color': '#37aef1', 'color': 'white'});
      });
      $('.card-4, .days-4').mouseleave(function(){
        $('.card-4, .days-4').css({'background-color': 'white', 'color': 'black'});
      });

      $('.block-3-item-1').mouseenter(function(){
        $('.block-3-info-1').css({'display': 'inline-block'});
      });
      $('.block-3-item-1').mouseleave(function(){
        $('.block-3-info-1').css({'display': 'none'});
      });

      $('.block-3-item-1').mouseenter(function(){
        $('.block-3-item-1 .fa-arrow-right').css({'display': 'inline-block'});
      });
      $('.block-3-item-1').mouseleave(function(){
        $('.block-3-item-1 .fa-arrow-right').css({'display': 'none'});
      });

      $('.block-3-item-2').mouseenter(function(){
        $('.block-3-info-2').css({'display': 'inline-block'});
      });
      $('.block-3-item-2').mouseleave(function(){
        $('.block-3-info-2').css({'display': 'none'});
      });

      $('.block-3-item-2').mouseenter(function(){
        $('.block-3-item-2 .fa-arrow-right').css({'display': 'inline-block'});
      });
      $('.block-3-item-2').mouseleave(function(){
        $('.block-3-item-2 .fa-arrow-right').css({'display': 'none'});
      });

      $('.block-3-item-3').mouseenter(function(){
        $('.block-3-info-3').css({'display': 'inline-block'});
      });
      $('.block-3-item-3').mouseleave(function(){
        $('.block-3-info-3').css({'display': 'none'});
      });

      $('.block-3-item-3').mouseenter(function(){
        $('.block-3-item-3 .fa-arrow-right').css({'display': 'inline-block'});
      });
      $('.block-3-item-3').mouseleave(function(){
        $('.block-3-item-3 .fa-arrow-right').css({'display': 'none'});
      });

    });

    $('#js-testimonials-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: false
    });


    $(".js-slider-prev").on("click", function() {
        $('#js-testimonials-slider').slick("slickPrev");
    });

    $(".js-slider-next").on("click", function() {
        $('#js-testimonials-slider').slick("slickNext");
    });


const isMobile = window.navigator.userAgent.match(/Mobile/) && window.navigator.userAgent.match(/Mobile/)[0] === "Mobile";
const event = isMobile ? "touchstart" : "click";

const button = document.querySelectorAll('*[data-animation="ripple"]'),
			container = document.querySelector(".container");

for (var i = 0; i < button.length; i++) {
	const currentBtn = button[i];
	
	currentBtn.addEventListener(event, function(e) {
		
		e.preventDefault();
		const button = e.target,
					rect = button.getBoundingClientRect(),
					originalBtn = this,
					btnHeight = rect.height,
					btnWidth = rect.width;
		let posMouseX = 0,
				posMouseY = 0;
		
		if (isMobile) {
			posMouseX = e.changedTouches[0].pageX - rect.left;
			posMouseY = e.changedTouches[0].pageY - rect.top;
		} else {
			posMouseX = e.x - rect.left;
			posMouseY = e.y - rect.top;
		}
		
		const baseCSS =  `position: absolute;
											width: ${btnWidth * 2}px;
											height: ${btnWidth * 2}px;
											transition: all linear 700ms;
											transition-timing-function:cubic-bezier(0.250, 0.460, 0.450, 0.940);
											border-radius: 50%;
											background: var(--color-ripple);
											top:${posMouseY - btnWidth}px;
											left:${posMouseX - btnWidth}px;
											pointer-events: none;
											transform:scale(0)`
		
		var rippleEffect = document.createElement("span");
		rippleEffect.style.cssText = baseCSS;
		
		//prepare the dom
		currentBtn.style.overflow = "hidden";
		this.appendChild(rippleEffect);
		
		//start animation
		setTimeout( function() { 
			rippleEffect.style.cssText = baseCSS + `transform:scale(1); opacity: 0;`;
		}, 5);
		
		setTimeout( function() {
			rippleEffect.remove();
			//window.location.href = currentBtn.href;
		},700);
	})
}