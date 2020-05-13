// Huge thanks to KrazyDad
// Functions from https://krazydad.com/tutorials/makecolors.php


function makeColorGradient(frequency1, frequency2, frequency3,
    phase1, phase2, phase3,
    center, width, i) {
    if (center == undefined)   center = 128;
    if (width == undefined)    width = 127;

    const red = Math.sin(frequency1*i + phase1) * width + center;
    const grn = Math.sin(frequency2*i + phase2) * width + center;
    const blu = Math.sin(frequency3*i + phase3) * width + center;
    return [red, grn, blu];
}

function makeRainbow(i, freq, saturation){
    return makeColorGradient(freq, freq, freq,0,2,4, 255-saturation,saturation,i);
}

