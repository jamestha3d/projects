
document.addEventListener('DOMcontentLoaded', () => {

document.querySelector('#login').onsubmit = () => {

	alert('you submitted');

	const name = document.querySelector('#displayName').value;

	localStorage.setItem('displayName', name);



	return false;

};




});