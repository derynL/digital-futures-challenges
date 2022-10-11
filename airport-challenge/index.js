'use strict';
const Airport = require('./src/airport');
const Plane = require('./src/plane');
const Weather = require('./src/weather');

const highSkies = new Airport();
const hs001 = new Plane(`hs-001`);
const badWeatherNow = new Weather(true);
console.log(highSkies.landPlane(hs001));

console.log(highSkies.planesAtAirport);

console.log(highSkies.capacity);
highSkies.setCapacity(5);
console.log(highSkies.capacity);

const hs002 = new Plane(`hs-002`);
const hs003 = new Plane(`hs-003`);
const hs004 = new Plane(`hs-004`);
const hs005 = new Plane(`hs-005`);

console.log(highSkies.landPlane(hs002));
console.log(highSkies.landPlane(hs003));
console.log(highSkies.landPlane(hs004));
console.log(highSkies.landPlane(hs005));
console.log(highSkies.planesAtAirport.length);
console.log(highSkies.capacity);

console.log(highSkies.initTakeoff(hs005));
console.log(highSkies.planesAtAirport.length);
console.log(highSkies.planesAtAirport);
console.log(highSkies.capacity);
console.log(highSkies.planesDeparted);

const hs006 = new Plane(`hs-006`);
const hs007 = new Plane(`hs-007`);

console.log(highSkies.initTakeoff(hs007));
console.log(highSkies.landPlane(hs002));
console.log(highSkies.planesAtAirport);
console.log(highSkies.planesDeparted);
