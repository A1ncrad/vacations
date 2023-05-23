const gallery = document.querySelectorAll(".gallery__section");


gallery.forEach(section => section.addEventListener("click", openImage));

function openImage() {
	document.querySelector(".gallery__section.active")?.classList.remove("active");
	this.classList.add("active");
}