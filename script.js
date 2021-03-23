const changeTxt = document.querySelector(".changeTxt");
const result = document.querySelector(".result");

function change(event) {
  event.preventDefault();

  const txtToTransformTextArea = document.querySelector(".txtToTransformTextArea").value;

  let temp = "";
  for (let i = 0; i < txtToTransformTextArea.length; i++) {
    if (txtToTransformTextArea[i] == "a") temp += "4";
    else if (txtToTransformTextArea[i] == "e") temp += "3";
    else if (txtToTransformTextArea[i] == "i") temp += "1";
    else if (txtToTransformTextArea[i] == "o") temp += "0";
    else if (txtToTransformTextArea[i] == "s") temp += "5";
    else temp += txtToTransformTextArea[i];
  }

  document.querySelector(".result").innerText = temp;
}

changeTxt.addEventListener("click", change);
