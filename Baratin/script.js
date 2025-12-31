let data = {};

// Charger le JSON
fetch('Baratin/data.json')
    .then(res => res.json())
    .then(json => {
        data = json;
        // Premier affichage
        initAll();
    });

function initAll() {
    ['phrase', 'innovation', 'job', 'tool', 'model'].forEach(type => generate(type));
    generatePitch();
}

function generate(type) {
    if (!data[type]) return;
    
    const display = document.getElementById(`display-${type}`);
    display.style.opacity = 0; // Petit effet de fade
    
    setTimeout(() => {
        let result = data[type].map(list => list[Math.floor(Math.random() * list.length)]).join('');
        display.innerText = result;
        display.style.opacity = 1;
    }, 150);
}

function generatePitch() {
    const p = document.getElementById('pitch-text');
    p.style.opacity = 0;

    setTimeout(() => {
        const j = data.job.map(l => l[Math.floor(Math.random()*l.length)]).join('');
        const t = data.tool[0][Math.floor(Math.random()*data.tool[0].length)] + data.tool[1][Math.floor(Math.random()*data.tool[1].length)];
        const i = data.innovation.map(l => l[Math.floor(Math.random()*l.length)]).join('');
        const m = data.model.map(l => l[Math.floor(Math.random()*l.length)]).join('');

        p.innerText = `Bonjour, je suis  ${j}  de "Saucisson à l'A.I.". Nous lançons ${t}, une solution révolutionnaire qui utilise ${i.toLowerCase()}. Propulsé par ${m}, nous disruptons le marché.`;
        p.style.opacity = 1;
    }, 200);
}

function copyToClipboard(id) {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Copié dans le presse-papier ! Prêt à disrupter.");
    });
}
