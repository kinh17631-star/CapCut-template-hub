const templatesData = [
    {
        title: "Best Healing Thailand",
        image: "https://photos.app.goo.gl/FYvXU7MzxXaGosTa6", 
        capcutUrl: "https://capcuttemplate.download/healing-thailand-capcut-template/"
    }
];

const reversedTemplates = [...templatesData].reverse();
const gridContainer = document.getElementById('template-grid');

reversedTemplates.forEach((template) => {
    const card = document.createElement('div');
    card.classList.add('card');
    
    card.innerHTML = `
        <div class="thumbnail-box">
            <span class="trending-badge">🔥 Trending</span>
            <img src="${template.image}" alt="${template.title}" onerror="this.src='https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=500'">
            <div class="play-icon"><i class="fas fa-play"></i></div>
        </div>
        <h3 class="title">${template.title}</h3>
    `;

    card.addEventListener('click', () => {
        window.open(template.capcutUrl, '_blank');
    });

    gridContainer.appendChild(card);
});
