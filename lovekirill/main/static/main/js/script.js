//Header плашка
/*
const headerElem = document.querySelector(".header");

const callback = function (entries, observer) {
	if (entries[0].isInteresting) {
		headerElem.classList.remove('scroll')
	} else {
		headerElem.classList.add("scroll")
	}
};

const headerObserver = new IntersectionObserver(callback)
headerObserver.observe(headerElem)
*/
const burger = document.querySelector(".header__burger");
burger.addEventListener("click", function (e) {
	burger.classList.toggle("active");
	const headerMenu = document.querySelector(".menu-header__list");
	headerMenu.classList.toggle("active");
	document.body.classList.toggle("scroll-lock")
})

window.addEventListener("resize", function (e) {
	if (window.innerWidth <= 767) {
		const burger = document.querySelector(".header__burger");
		const buttonHeader = document.querySelector(".menu-header__button");
		buttonHeader.after(burger)
	}
})


const blackLink = document.querySelectorAll(".black-link");
console.log(blackLink);
blackLink.forEach((item) => {
	item.addEventListener("mouseover", function (e) {
		item.classList.remove("black-link")
	})
	item.addEventListener("mouseout", function (e) {
		item.classList.add("black-link")
	})
})



//Попап
const popupContent = document.querySelector(".popup__content");
const body = document.body;
const popup = document.querySelector(".popup");
const popupLinks = document.querySelectorAll(".popup__link");
const popupClose = document.querySelectorAll(".popup__close");
if (popupLinks.length > 0) {
	popupLinks.forEach(popupLink => {
		popupLink.addEventListener("click", function (e) {
			const popup = document.querySelector(".popup");
			popupOpen(popup)
			e.preventDefault();
		})
	})
}
if (popupClose.length > 0) {
	popupClose.forEach(popupCloseIcon => {
		popupCloseIcon.addEventListener("click", function (e) {
			popup.classList.remove("active")
			body.classList.remove("scroll-lock")
			e.preventDefault();
		})

	})
}

function popupOpen(popup) {
	if (popup) {
		popup.classList.add("active");
		const popupActive = document.querySelector(".popup active")
		body.classList.add("scroll-lock");
		popup.addEventListener("click", function (e) {
			if (!e.target.closest(".popup__content")) {
				popupCloseMenu(e.target.closest(".popup"))
			}
		})
	}
}
function popupCloseMenu(popupActive) {
	body.classList.remove("scroll-lock")
	popupActive.classList.remove("active")
}

const popupClosePopup = document.querySelector("#closePopup");
if (popupClosePopup) {
	popupClosePopup.addEventListener("click", function (e) {
		popup.classList.remove("active")
	})
}





//Формы




//Фокус
const formContacts = document.forms.formContacts;

const inputs = document.querySelectorAll(".input");
console.log(inputs);

inputs.forEach((input) => {
	if (inputs.length > 0) {
		Array.from(inputs).forEach((input) => {
			const placehold = input.placeholder;
			input.addEventListener("focus", function (e) {
				input.classList.add("active");
				input.placeholder = '';
			})
			input.addEventListener("blur", function (e) {
				input.classList.remove("active")
				input.placeholder = placehold;
			})
		})
	}
})



//Купить

const buttons = document.querySelectorAll("a.item-products__button");

if (buttons.length > 0) {
	buttons.forEach((item) => {
		item.addEventListener("click", function (e) {
			item.classList.add("active");
			e.preventDefault()
			item.innerHTML = '';
			item.innerHTML = 'Куплено';

		})
	})
}

//Только цифры
