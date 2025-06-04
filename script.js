// DARK MODE
function changeToDarkMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

// NAVIGATION
  function toggleMenu() {
    const navList = document.getElementById("navList");
    navList.classList.toggle("active");
  }

// CARD FUNCTIONS
  function openCard(clickedCard) {
  // locate and select all cards
  const allCards = document.querySelectorAll('.profileCard');

  // loop through each card
  for (let card of allCards) {
    // if the card is not the clicked one, collapse it
    if (card !== clickedCard) {
      card.classList.remove('expanded');
    }
  }

  // clicked card toggle (expand if collapsed, collapse if expanded)
  clickedCard.classList.toggle('expanded');
}

// JOIN US FUNCTIONS
const form = document.forms.signupForm;
const elements = form.elements;

function getValueByName(elementName) {
  return elements[elementName].value;
}

  // waht to do
  function handleSubmit(event) {
    console.log(event);
    event.preventDefault();

  // get application details
  const email = getValueByName("email");
  const name = getValueByName("name");
  const islandName = getValueByName("islandName");
  const dreamAddy = getValueByName("dreamAddy");
  const fruit = getValueByName("fruit");
  const villagers = getValueByName("villager");

  console.log(email+name+islandName+dreamAddy+fruit+villagers);


  // show application form
  alert(`
Application Sent!

Thank you ${name} for your application! We shall send an email to ${email} once we've reviewed your form and created your character card!
    `);

    // reset form after submit
    form.reset();
}

  // dream address functions
 const input = document.getElementById("dreamAddy");

  input.addEventListener("input", function () {
    let userInput = this.value;

    // make value starts with "DA-"
    if (!userInput.startsWith("DA-")) {
      userInput = "DA-" + userInput;
    }

    let digits = "";
    for (let i = 0; i < userInput.length; i++) {
      let character = userInput[i];
      if (character >= '0' && character <= '9') {
        digits += character;
      }
    }

    // add dashes after every 4 numbers
    let constant = "DA-";
    for (let i = 0; i < digits.length; i++) {
      constant += digits[i];
      if ((i+1) % 4=== 0 && i !== digits.length - 1) {
        constant += "-";
      }
    }

    this.value = constant;
  });

// listen for user
form.addEventListener("submit", handleSubmit);