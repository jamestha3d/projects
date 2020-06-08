
//check if displayname exists. if yes, continue, else
if (localStorage.getItem('displayName')){
	//document.querySelector('#displayName').value = localStorage.getItem('displayName');

	//initialize new request
	const request = new XMLHttpRequest();
	const name = localStorage.getItem('displayName');
	request.open('POST', '/logged');

	request.onload = () => {

		//Extract JSON data from request
		const data = JSON.parse(request.responseText);

		//update result div

	}

	//add data to send with request
		const data = new FormData();
		data.append('name', name);

		//send request
		request.send(data);
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




