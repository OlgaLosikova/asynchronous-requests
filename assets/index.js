const entitySelect = document.getElementById("entitySelect");
const itemNumber = document.getElementById("itemNumber");
const resultDiv = document.getElementById("result");
const request = async () => {
  try {
    if (!itemNumber.value || itemNumber.value < 0 || itemNumber.value > 10)
      throw new Error("Введите значение од 1 до 10");
    const getData = await fetch(
      `https://swapi.nomoreparties.co/${entitySelect.value}/${itemNumber.value}`
    );

    const responce = await getData.json();

    resultDiv.innerText = `name: ${responce.name}`;
    resultDiv.style.color = "black";
  } catch (err) {
    resultDiv.innerText = err;
    resultDiv.style.color = "red";
  }
};
getButton.addEventListener("click", request);
