document.addEventListener('DOMContentLoaded', function() {
  let offers = [
    { id: 1, name: "dual-shade Blusher", description: "Double your glow with our dual-shade Blusher, featuring a perfect blend of hues for a customizable, radiant finish that suits any look.",image: "blusher.png", selected: false},
    { id: 2, name: "premium Headphones", description: "Premium Noise-Canceling Headphones, designed for immersive listening anywhere.",image: "headphone.png", selected: false },
    { id: 3, name: "decorative plant", description: "touch of nature to your space with our stunning Decorative Plant.",image: "plant.png", selected: false },
    { id: 4, name: "makeup brushes", description: "Achieve flawless makeup looks with our Luxurious 9-Piece Makeup Brush Set.",image: "brushs.png", selected: false }
  ];

  // Render offer list with checkboxes
  function renderOffers() {
    const offersContainer = document.querySelector('.reviews-container');
    offersContainer.innerHTML = ''; // Clear existing offers

    offers.forEach((offer) => {
      const offerDiv = document.createElement('div');
      offerDiv.classList.add('review');
      offerDiv.innerHTML = `
        <input type="checkbox" class="offer-checkbox" data-id="${offer.id}">
        <img src="${offer.image}" alt="${offer.name}" class="offer-img">
        <h3>${offer.name}</h3>
        <p>${offer.description}</p>
      `;
      offersContainer.appendChild(offerDiv);
    });
  }

  // Initial render of the offer list
  renderOffers();

  // Handle Delete Selected Offers
  document.querySelector('.delete-button').addEventListener('click', function() {
    const selectedOffers = offers.filter(offer => offer.selected);

    if (selectedOffers.length === 0) {
      alert("Please select at least one offer");
    } else if (confirm("Are you sure you want to delete the selected offers?")) {
      offers = offers.filter(offer => !offer.selected);
      renderOffers();
    }
  });

  // Update offer selection based on checkbox changes
  document.addEventListener('change', function(event) {
    if (event.target.classList.contains('offer-checkbox')) {
      const offerId = parseInt(event.target.getAttribute('data-id'), 10);
      const offer = offers.find(o => o.id === offerId);
      if (offer) offer.selected = event.target.checked;
    }
  });

  // Handle adding a new offer
  document.querySelector('.submit-button').addEventListener('click', function() {
    const offerName = document.getElementById('offer-name').value.trim();
    const offerDescription = document.getElementById('offer-description').value.trim();

    if (!offerName || !offerDescription) {
      alert("Please fill out all fields.");
      return;
    }

    const newOffer = {
      id: offers.length + 1,
      name: offerName,
      description: offerDescription,
      selected: false
    };

    offers.push(newOffer);
    renderOffers();
    alert("New offer added successfully!");

    // Clear form inputs
    document.getElementById('offer-name').value = '';
    document.getElementById('offer-description').value = '';
  });
});
