/* cusom js file made by JenDoe */
const gradientBox = document.querySelector('.gradient-box'),
	  selectMenu = document.querySelector('.select-box'),
	  colorInputs = document.querySelectorAll('.colors input'),
	  textarea = document.querySelector('textarea'),
	  refreshbtn = document.querySelector('.refresh'),
	  copyBtn = document.querySelector('.copy span');
const getRandomcolor = () => {
	// Generate a random color in hexadecimal format. Example: #5665e9
	const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
	return `#${randomHex}`;
}

const generategradient = (isRandom) => {
	if(isRandom){
		// If isRandom is true, update the colors inputs value with random color
		colorInputs[0].value = getRandomcolor();
		colorInputs[1].value = getRandomcolor();
	}
	
	//Creating a gradient string using the select menu with color input values
	
	const gradient = `linear-gradient(${selectMenu.value},
	${colorInputs[0].value}, ${colorInputs[1].value})`;
	gradientBox.style.background = gradient;
	textarea.value = `background: ${gradient};`;
}

const copyCode = () =>{
	//Copying textarea value updating the copy button text
	navigator.clipboard.writeText(textarea.value);
	copyBtn.innerText = 'Code Copied';
	setTimeout(() => copyBtn.innerText = "Copy", 1600);
}

colorInputs.forEach(input => {
	// Calling generateGardient function on each color input clicks
	input.addEventListener('input', () => generategradient(false));
});

selectMenu.addEventListener('change', () => generategradient(false));
refreshbtn.addEventListener('click', () => generategradient(true));
copyBtn.addEventListener('click', copyCode);




/* show or Hide user Guide Message box */

const userGuide = document.querySelector('.view'),
	  content = document.querySelector('.content'),
	  closeContent = document.querySelector('.close');

if(userGuide){
	userGuide.addEventListener('click', () =>{
		content.classList.add('active');
		closeContent.classList.add('active');
	});
}

if(closeContent){
	closeContent.addEventListener('click', () =>{
		content.classList.remove('active');
		closeContent.classList.remove('active');
	});
}























