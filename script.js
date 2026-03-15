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
    },
    {
        title: "yass karle musafir",
        image: "https://i.postimg.cc/L8nQF78w/IMG-3106.jpg", 
        capcutUrl: "https://www.capcut.com/tv2/ZSuujeFNn/"
    },
    {
        title: "MASKARA 🤍",
        image: "https://i.postimg.cc/yxxc3M5L/IMG-3107.jpg", 
        capcutUrl: "https://www.capcut.com/tv2/ZSuuj8pRM/"
    },
    {
        title: "BMW edit",
        image: "https://i.postimg.cc/D0S4wqJp/IMG-3108.jpg", 
        capcutUrl: "https://www.capcut.com/tv2/ZSuuj3EgR/"
    },
    {
        title: "Main prinada bsabar",
        image: "https://i.postimg.cc/02mdGsjW/IMG-3109.jpg", 
        capcutUrl: "https://www.capcut.com/tv2/ZSuujg6KT/"
    },
    {
        title: "Ma Dobara Nhi Milta❤️‍🩹",
        image: "https://i.postimg.cc/4NCpxSPS/IMG-3110.jpg", 
        capcutUrl: "https://www.capcut.com/tv2/ZSuujgGfX/"
    },
    {
        title: "cinematic video",
        image: "https://i.postimg.cc/s28v0M0v/IMG-3111.jpg", 
        capcutUrl: "https://www.capcut.com/tv2/ZSuuja5P5/"
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
