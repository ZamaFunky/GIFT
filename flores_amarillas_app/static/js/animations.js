document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('flowers');
    
    // Create 12 unique flowers
    for (let i = 0; i < 12; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.style.animationDelay = `${i * 0.2}s`;
        flower.style.animationDuration = `${2.5 + Math.random() * 1}s`;
        
        flower.innerHTML = `
            <div class="stem"></div>
            <div class="petals">
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
            </div>
            <div class="center"></div>
        `;
        
        // Unique style variations
        const petals = flower.querySelectorAll('.petal');
        petals.forEach((petal, index) => {
            petal.style.animationDelay = `${index * 0.1 + Math.random() * 0.5}s`;
            petal.style.background = `linear-gradient(45deg, #FFD700, #FFA500, hsl(${20 + i * 5}, 100%, 60%))`;
        });
        
        const center = flower.querySelector('.center');
        center.style.background = `radial-gradient(circle, hsl(${30 + i * 10}, 100%, 40%), #FFD700)`;
        center.style.animationDuration = `${1 + Math.random()}s`;
        
        container.appendChild(flower);
    }
    
    // Add floating petals effect
    function createFloatingPetal() {
        const petal = document.createElement('div');
        petal.className = 'petal floating';
        petal.style.position = 'fixed';
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = (Math.random() * 3 + 2) + 's';
        petal.style.opacity = Math.random() * 0.7 + 0.3;
        petal.style.fontSize = '0';
        petal.style.zIndex = '10';
        petal.style.pointerEvents = 'none';
        document.body.appendChild(petal);
        
        setTimeout(() => {
            petal.remove();
        }, 5000);
    }
    
    setInterval(createFloatingPetal, 1000);
});

