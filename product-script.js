const button = document.querySelector('#button');
const select = document.querySelector("#dropdown");
const options = document.querySelectorAll(".option");
const selectLabel = document.querySelector('#select-label');


button.addEventListener("click", function (e) {
	e.preventDefault();
  toggleHidden();
});

function toggleHidden() {
	select.classList.toggle("hidden");
}

options.forEach(function(option) {
	option.addEventListener("click", function (e) {
		setSelectTitle(e);
	});
});

function setSelectTitle(e) {
	const labelElement = document.querySelector(`label[for="${e.target.id}"]`).innerText;
	selectLabel.innerText = labelElement;
	toggleHidden();
};



/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
/*function myFunction() {
	document.getElementById("dropdown").classList.toggle("show");
  }*/



// Close the dropdown if the user clicks outside of it
/*window.onclick = function(event) {
	if (!event.target.matches('.button')) {
	  var dropdowns = document.getElementsById('dropdown');
	  var i;
	  for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
		  openDropdown.classList.remove('show');
		}
	  }
	}
  }*/
