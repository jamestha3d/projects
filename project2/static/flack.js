
document.addEventListener('DOMContentLoaded', function () {

	document.querySelector('#login').onsubmit = function() {

		alert('you submitted');

		const name = document.querySelector('#displayName').value;

		localStorage.setItem('displayName', name);



		return false;
	}; 
});

