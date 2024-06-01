function convertTemperature() {
    const temp = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    if (isNaN(temp)) {
        document.getElementById('result').innerText = "Please enter a valid number";
        return;
    }
    let convertedTemp;
    let convertedUnit;
    if (unit === 'Celsius') {
        convertedTemp = (temp * 9/5) + 32;
        convertedUnit = 'Fahrenheit';
    } else if (unit === 'Fahrenheit') {
        convertedTemp = (temp - 32) * 5/9;
        convertedUnit = 'Celsius';
    } else if (unit === 'Kelvin') {
        convertedTemp = temp - 273.15;
        convertedUnit = 'Celsius';
    }
    if (unit === 'Celsius' && convertedUnit === 'Fahrenheit') {
        document.getElementById('result').innerText = `${temp}° Celsius = ${convertedTemp.toFixed(2)}° Fahrenheit`;
    } else if (unit === 'Fahrenheit' && convertedUnit === 'Celsius') {
        document.getElementById('result').innerText = `${temp}° Fahrenheit = ${convertedTemp.toFixed(2)}° Celsius`;
    } else if (unit === 'Kelvin') {
        document.getElementById('result').innerText = `${temp} Kelvin = ${convertedTemp.toFixed(2)}° Celsius`;
    }
    if (unit === 'Celsius') {
        const kelvinTemp = temp + 273.15;
        document.getElementById('result').innerText += `\n${temp}° Celsius = ${kelvinTemp.toFixed(2)} Kelvin`;
    } else if (unit === 'Fahrenheit') {
        const kelvinTemp = (temp - 32) * 5/9 + 273.15;
        document.getElementById('result').innerText += `\n${temp}° Fahrenheit = ${kelvinTemp.toFixed(2)} Kelvin`;
    } else if (unit === 'Kelvin') {
        const fahrenheitTemp = (temp - 273.15) * 9/5 + 32;
        document.getElementById('result').innerText += `\n${temp} Kelvin = ${fahrenheitTemp.toFixed(2)}° Fahrenheit`;
    }
}