
//check if displayname exists. if yes, continue, else
if (localStorage.getItem('displayName')){
	document.querySelector('#displayName').value = localStorage.getItem('displayName');
}

document.addEventListener('DOMContentLoaded', function () {

	document.querySelector('#login').onsubmit = function() {

		const name = document.querySelector('#displayName').value;

		if (name === ''){

			alert('Choose a Display Name');
			return false;

		}
		else{

			localStorage.setItem('displayName', name);
		}
		

		//return false;
	}; 
	
});




