const templatesData = [
    {
        title: "Fit a Dil | Slowmo 🤍",
        image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=500", 
        capcutUrl: "https://www.capcut.com/tv2/ZSum3d4vD/"
    },
    {
        title: "CINEMATIC",
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500", 
        capcutUrl: "https://www.capcut.com/tv2/ZSum3FtGn/"
    },
    {
        title: "VIP slomo template",
        image: "https://images.unsplash.com/photo-1541443131876-44b03de101c5?w=500", 
        capcutUrl: "https://www.capcut.com/tv2/ZSum3gLfr/"
    },
    {
        title: "chuhe the",
        image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500", 
        capcutUrl: "https://www.capcut.com/tv2/ZSum34fXK/"
    },
    {
        title: "Standard high 🔥",
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500", 
        capcutUrl: "https://www.capcut.com/tv2/ZSum3XqTH/"
    },
    {
        title: "trending video",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500", 
        capcutUrl: "https://www.capcut.com/tv2/ZSum3X5EP/"
    },
    {
        title: "Trending iPhone Vdo",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500", 
        capcutUrl: "https://www.capcut.com/tv2/ZSum3Q1XG/"
    },
    {
        title: "Slow Motion Template",
        image: "https://images.unsplash.com/photo-1520004434532-668416a08753?w=500", 
        capcutUrl: "https://www.capcut.com/tv2/ZSum3gUGR/"
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
            <img src="${template.image}" alt="${template.title}">
            <div class="play-icon"><i class="fas fa-play"></i></div>
        </div>
        <h3 class="title">${template.title}</h3>
    `;

    card.addEventListener('click', () => {
        window.open(template.capcutUrl, '_blank');
    });

    gridContainer.appendChild(card);
});
