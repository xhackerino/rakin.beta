// Function to convert Hex to RGB with error handling
function convertHexToRGB() {
    let hex = document.getElementById('hexInput').value;
    if (!isValidHex(hex)) {
        document.getElementById('rgbResult').innerText = "Invalid Hex Code";
        return;
    }
    let rgb = hexToRgb(hex);
    let resultText = `RGB: (${rgb.r}, ${rgb.g}, ${rgb.b})`;
    document.getElementById('rgbResult').innerText = resultText;
}

// Function to convert RGB to Hex with error handling
function convertRGBToHex() {
    let r = parseInt(document.getElementById('redInput').value);
    let g = parseInt(document.getElementById('greenInput').value);
    let b = parseInt(document.getElementById('blueInput').value);
    if (isNaN(r) || isNaN(g) || isNaN(b) || !isValidRgb(r, g, b)) {
        document.getElementById('hexResult').innerText = "Invalid RGB Values";
        return;
    }
    let hex = rgbToHex(r, g, b);
    document.getElementById('hexResult').innerText = `Hex: ${hex}`;
}

// Helper function to validate Hex code
function isValidHex(hex) {
    return /^#[0-9A-F]{6}$/i.test(hex);
}

// Helper function to validate RGB values
function isValidRgb(r, g, b) {
    return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
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
