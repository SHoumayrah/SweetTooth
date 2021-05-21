
//selects the profile image input field
function triggerClick(){
	//trigger a click event
	document.querySelector('#profileImage').click();
}



function displayImage(e){
	//test if there was an image
	//select image element.
	if(e.files[0]){
		var reader = new FileReader();


		reader.onload = function(e){

			//set the src to the result of the target.
			document.querySelector('#profileDisplay').setAttribute('src',e.target.result);
		}

		reader.readAsDataURL(e.files[0]);
	}
}