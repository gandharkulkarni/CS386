let radius = 5.23;
let circleArea = Math.pow(radius, 2) * Math.PI;
console.log(`Raw value ${circleArea}`);
console.log(`toFixed ${circleArea.toFixed(5)}`);
console.log(`toExponential ${circleArea.toExponential(4)}`);
console.log(`toPrecision ${circleArea.toPrecision(5)}`);
