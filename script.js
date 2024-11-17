// script.js
document.addEventListener('DOMContentLoaded', () => {
    const funFacts = [
        "Nature Enthusiast: I love beaches, mountains, and rivers.",
        "Adventure Seeker: Trekking is my passion.",
        "Water Lover: I find peace in the presence of water."
    ];

    const factsList = document.getElementById('fun-facts-list');

    funFacts.forEach(fact => {
        const listItem = document.createElement('li');
        listItem.textContent = fact;
        factsList.appendChild(listItem);
    });
});
