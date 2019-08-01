export const actions = {
    generateRandomColors
};

function generateRandomColors(number) {
    let arrayColors = [];

    for(let i = 0; i < number; i++) {
        arrayColors[i] = '#'+ ('000000' + (Math.random()*0xFFFFFF<<0).toString(16)).slice(-6);
    }

    return arrayColors;
}
