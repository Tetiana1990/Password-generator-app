const passwordE1 = document.getElementById("password");
const lengthE1 = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const uppercaseE1 = document.getElementById("uppercase");
const lowercaseE1 = document.getElementById("lowercase");
const numbersE1 = document.getElementById("numbers");
const symbolsE1 = document.getElementById("symbols");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const strengthText = document.getElementById("strengthText");
const bars = document.querySelectorAll(".bar");

const upper  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+{}[]<>?/";

lengthValue.textContent = lengthE1.value;

lengthE1.addEventListener("input", () => {
	lengthValue.textContent = lengthE1.value;
});

generateBtn.addEventListener("click", generatePassword);

function generatePassword(){
	let chars = "";
	if(uppercaseE1.checked) chars += upper;
	if(lowercaseE1.checked) chars += lower;
	if(numbersE1.checked) chars += numbers;
	if(symbolsE1.checked) chars += symbols;
	if(!chars){
		alert("Select at least one option!");
		return;
	}
	let password = "";
	for(let i = 0; i < lengthE1.value; i++){
		password += chars[Math.floor(Math.random() * chars.length)];
	}

	passwordE1.classList.add("updated");

	setTimeout(() => {
		passwordE1.value = password;

		passwordE1.classList.remove("updated");
	}, 200);
	updateStrength(password);
}

copyBtn.addEventListener("click", async () => {
	if(!passwordE1.value) return;
	await
	navigator.clipboard.writeText(passwordE1.value);
	
	copyIcon.src = "icon-check.svg";

	setTimeout(() => {
		copyIcon.src = "icon-copy.svg";
	}, 1500);
});
function updateStrength(password){
	let types = 0;

	if(password.length >= 12) types++;
	if(/[A-Z]/.test(password)) types++;
	if(/[0-9]/.test(password)) types++;
	if(/[^A-Za-z0-9]/.test(password)) types++;

	let score = types;
	if(password.length >= 12 && types < 4) score++;

	if(score <= 1) strengthText.textContent = "WEAK";
	else if (score === 2)
		strengthText.textContent = "MEDIUM";
	else if (score === 3)
		strengthText.textContent = "STRONG";
	else strengthText.textContent = "VERY STRONG";

	bars.forEach(bar => 
		bar.classList.remove("active"));
		for (let i = 0; i < Math.min(score, bars.length); i++){
			bars[i].classList.add("active");
		
	if(score <= 1)
			bars[i].style.background = "#ff4d4d";
		else if (score === 2)
			bars[i].style.background = "#ffcc00";
		else if (score === 3)
			bars[i].style.background = "#66ff99";
		else bars[i].style.background = "#00ff88";
	}

	
}
