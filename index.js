// Function to convert Hex to RGB
function convertHexToRGB() {
    let hex = document.getElementById('hexInput').value;
    let rgb = hexToRgb(hex);
    let resultText = rgb ? `RGB: (${rgb.r}, ${rgb.g}, ${rgb.b})` : "Invalid Hex Code";
    document.getElementById('rgbResult').innerText = resultText;
}

// Function to convert RGB to Hex
function convertRGBToHex() {
    let r = document.getElementById('redInput').value;
    let g = document.getElementById('greenInput').value;
    let b = document.getElementById('blueInput').value;
    let hex = rgbToHex(parseInt(r), parseInt(g), parseInt(b));
    document.getElementById('hexResult').innerText = `Hex: ${hex}`;
}

// Helper function to convert Hex to RGB
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// Helper function to convert RGB to Hex
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
