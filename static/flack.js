
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


	//connect to websocket
	var socket = io.connect(location.protocol + '//' + document.domain + ':' + location.port);
	
	//when connecte, configure buttons
	socket.on('connect', () => {

		//submit "create channel"
		document.querySelector('#create').onclick = () => {
			const channel = document.querySelector('#channel').value;
			socket.emit('create channel', {'channel': channel});
		};
	});


	socket.on('channel created', data => {
		const li = document.createElement('li');
		li.innerHTML = `${data.channel}`;
		document.querySelector('#channels').append(li);
	});

	document.querySelector('#login').onsubmit = function() {

		const name = document.querySelector('#displayName').value;

		
		if (name === ''){

			alert('Choose a Display Name');
			return false;

		}
		else{

			localStorage.setItem('displayName', name);
		}
		


		//HTTP request

		//initialize new request
		const request = new XMLHttpRequest();
		request.open('POST', '/login');

		//callback function for when request completes
		request.onload = () => {

			//Extract JSON data from request
			const data = JSON.parse(request.responseText);

		}

		//add data to send with request.
		const data = new FormData();
		data.append('name', name)

		//send request
		request.send(data);
		//return false;
	}; 

	const greet = localStorage.getItem('displayName');
	document.querySelector('#greet').innerHTML = greet;


	document.querySelector("#logout").onclick = function(){

		localStorage.removeItem('displayName');

	}

	function load(page){

		const request = new XMLHttpRequest();
		request.open('GET', `/${page}`);
		request.onload = () => {
			const response = request.responseText;
			document.querySelector('#body').innerHTML = response;
		};
		request.send()

	};


});