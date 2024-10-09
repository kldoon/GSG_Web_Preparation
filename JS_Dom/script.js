const outputDiv = document.getElementById("output");

if (outputDiv) {
  outputDiv.innerHTML = "<b>Hello Sir</b>";
  outputDiv.style.backgroundColor = 'rgb(220,180,180)';
  outputDiv.style.borderStyle = 'dashed';
}


const toggleShadow = () => {
  if (outputDiv.classList.contains("shadowed")) {
    outputDiv.classList.remove("shadowed");
  } else {
    outputDiv.classList.add("shadowed");
  }

  // outputDiv.classList.toggle("shadowed");
}

const submit = () => {
  const nameInput = document.getElementById("name-input");
  const name = nameInput.value;
  outputDiv.innerHTML = `<b>Hello ${name}</b>`;
}