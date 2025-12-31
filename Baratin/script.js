let bullshitData = {};

// Charger les données JSON
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        bullshitData = data;
        // Génération initiale
        Object.keys(data).forEach(key => generate(key));
    });

function getRandomPart(categoryIndex, partIndex) {
    const parts = bullshitData[categoryIndex][partIndex];
    return parts[Math.floor(Math.random() * parts.length)];
}

function generate(type) {
    if (!bullshitData[type]) return;
    let result = "";
    for (let i = 0; i < 4; i++) {
        result += getRandomPart(type, i) + " ";
    }
    document.getElementById(`display-${type}`).innerText = result.trim();
    return result.trim();
}

function generatePitch() {
    const job = generate('job');
    const tool = generate('tool');
    const innovation = generate('innovation');
    const phrase = generate('phrase');
    const model = generate('model');

    const pitch = `Bonjour, je suis votre nouveau ${job}. 
    Nous avons créé ${tool.split(' ')[0]}, une plateforme qui utilise ${innovation.toLowerCase()}. 
    Notre mission ? ${phrase} Le tout propulsé par ${model}.`;

    document.getElementById('pitch-text').innerText = pitch;
}
