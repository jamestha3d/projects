
//check if displayname exists. if yes, continue, else
if (localStorage.getItem('displayName')){

	//display welcome page
	document.querySelector('#welcome').style.display = 'block';
	document.querySelector('#login').style.display = 'none';	
}
else{
	document.querySelector('#login').style.display = 'block';	
	document.querySelector('#welcome').style.display = 'none';	
}
//else display log in page.

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

	document.querySelector("#logout").onclick = function(){

		localStorage.removeItem();
		

	}
	
});