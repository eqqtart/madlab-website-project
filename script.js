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
