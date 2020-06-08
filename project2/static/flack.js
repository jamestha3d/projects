
document.addEventListener('DOMContentLoaded', function () {

	document.querySelector('#login').onsubmit = function() {

		const name = document.querySelector('#displayName').value;

		//alert(name);


		localStorage.setItem('displayName', name);

		alert(localStorage.getItem('displayName'));

		return false;
	}; 

	
});

