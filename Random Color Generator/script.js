const getColor = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  document.querySelector("#color-code").innerText = randomCode;
  document.body.style.backgroundColor = randomCode;
  navigator.clipboard.writeText(randomCode); //automatic copy color code
};

//event call
document.querySelector("#btn").addEventListener("click", getColor);

//initial call
getColor();
