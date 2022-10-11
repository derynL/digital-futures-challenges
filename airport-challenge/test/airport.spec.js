/* eslint-disable quotes */
'use strict';
const { assertEquals } = require('../testing-framework');

const Airport = require('../src/airport');
const Plane = require('../src/plane');
const Weather = require('../src/weather');

let control, expected, actual, result, testAirport, successMsg;
const dfa001 = new Plane(`dfa-001`);
const dfa002 = new Plane(`dfa-002`);
const dfa003 = new Plane(`dfa-003`);
const dfa004 = new Plane(`dfa-004`);
const dfa005 = new Plane(`dfa-005`);
const dfa006 = new Plane(`dfa-006`);
const dfa007 = new Plane(`dfa-007`);
const dfa008 = new Plane(`dfa-008`);
const dfa009 = new Plane(`dfa-009`);
const dfa0010 = new Plane(`dfa-0010`);

// Test 1 - has the plane landed?

console.log(`===================================================`);
console.log(
  `Test 1\n
  - check success of landPlane: array length should change\n
  - ensure additional planes can be added\n
  `
);

// Arrange
testAirport = new Airport();
control = testAirport.planesAtAirport.length;
expected = control + 1;

// Act
testAirport.landPlane(dfa001);
actual = testAirport.planesAtAirport.length;
// Assert
result = assertEquals(actual, expected);
console.log(`Test 1.1: Plane landed: ${result}`);

// Add second plane
testAirport.landPlane(dfa002);
result = assertEquals(actual, expected);
console.log(`Test 1.2: Additional plane landed: ${result}`);

// Clean up
testAirport = null;
expected = undefined;
actual = undefined;
result = undefined;
control = undefined;

// Test 2 - Is there a default capacity on new airport instances and can it be changed?

console.log(`\n
===================================================`);
console.log(
  `Test 2\n
  - check that airport capacity has a default value of 10\n
  - check that capacity value is successfully changed with setCapacity\n
  `
);

// Arrange
testAirport = new Airport();
expected = 10;

// Act
actual = testAirport.capacity;
// Assert
result = assertEquals(actual, expected);
console.log(`Test 2.1: Correct default capacity: ${result}`);

// Clean up
expected = undefined;
actual = undefined;
result = undefined;

// Arrange
let capacityBeforeChange = testAirport.capacity;
testAirport.setCapacity(20);
expected = true;

// Act

actual = capacityBeforeChange !== testAirport.capacity;
// Assert
result = assertEquals(actual, expected);
console.log(`Test 2.2: Capacity changed: ${result}`);

// Clean up
testAirport = null;
expected = undefined;
actual = undefined;
result = undefined;
capacityBeforeChange = undefined;

// Test 3: Has airport capacity been reached? Are planes prevented from landing if it has?

console.log(`\n
===================================================`);
console.log(
  `Test 3 \n
  - check that planesAtAirport.length increases by 1 after plane successfully lands\n
  - check that landPlane returns a confirmation message after a plane lands\n
  - check that a message confirming full capacity is returned\n
  - check that planes cannot land after capacity has been reached\n
  `
);

// Arrange
testAirport = new Airport();
testAirport.landPlane(dfa001);
control = 0;
expected = control + 1;
// Act
actual = testAirport.planesAtAirport.length;
// Assert
result = assertEquals(actual, expected);
console.log(
  `Test 3.1: before capacity is reached, planesAtAirport.length has increased by 1 after landing a plane: ${result}`
);
// Clean up
testAirport = null;
expected = undefined;
actual = undefined;
result = undefined;

// Arrange
testAirport = new Airport();
let confirm = testAirport.landPlane(dfa001);
expected = `Flight dfa-001 is now landing. Remaining capacity: ${9}`;
// Act
actual = confirm;
// Assert
result = assertEquals(actual, expected);
console.log(
  `Test 3.2: landPlane has printed confirmation after a plane lands: ${result}`
);
// Clean up
testAirport = null;
expected = undefined;
actual = undefined;
result = undefined;
confirm = undefined;

// Arrange
testAirport = new Airport();
testAirport.setCapacity(5);
testAirport.landPlane(dfa001);
testAirport.landPlane(dfa002);
testAirport.landPlane(dfa003);
testAirport.landPlane(dfa004);
testAirport.landPlane(dfa005);
expected = `Airport capacity has been reached.`;

// Act
actual = testAirport.capacityReached();
// Assert
result = assertEquals(actual, expected);
console.log(
  `Test 3.3: capacityReached message returned when airport capacity is full: ${result}`
);

// Arrange
testAirport.landPlane(dfa006);
expected = testAirport.capacity;
// Act
actual = testAirport.planesAtAirport.length;
// Assert
result = assertEquals(actual, expected);
console.log(
  `Test 3.4: plane is not added to planesArr when airport capacity is full: ${result}`
);

// Clean up
testAirport = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`\n
===================================================`);
console.log(
  `Test 4 \n
  - check that initTakeoff returns a confirmation message when a plane leaves the airport\n
  - Check that initTakeoff reduces planesAtAirport.length by one\n
  - check that initTakeoff removes the plane passed to it from planesAtAirport\n
  - Check that initTakeoff adds the departed plane to planesDeparted\n
  `
);

// Arrange
testAirport = new Airport();
testAirport.landPlane(dfa001);
confirm = testAirport.initTakeoff(dfa001);
expected = `Flight dfa-001 has departed. Remaining capacity: ${10}`;
// Act
actual = confirm;
// Assert
result = assertEquals(actual, expected);
console.log(
  `Test 4.1: initTakeoff returns a confirmation message when a plane leaves the airport: ${result}`
);
// Clean up
testAirport = null;
expected = undefined;
actual = undefined;
result = undefined;
confirm = undefined;

// Arrange
testAirport = new Airport();
testAirport.landPlane(new Plane(`dfa-001`));
confirm = testAirport.planesAtAirport.length;
testAirport.initTakeoff(testAirport.planesAtAirport[0]);
expected = confirm - 1;
// Act
actual = testAirport.planesAtAirport.length;
// Assert
result = assertEquals(actual, expected);
console.log(
  `Test 4.2: initTakeoff reduces planesAtAirport.length by one: ${result}`
);
// Clean up
testAirport = null;
expected = undefined;
actual = undefined;
result = undefined;
confirm = undefined;

// Arrange
testAirport = new Airport();
testAirport.landPlane(dfa001);
testAirport.initTakeoff(testAirport.planesAtAirport[0]);
expected = false;
// Act
actual = testAirport.planesAtAirport.includes(plane => plane.id === `dfa-001`);
// Assert
result = assertEquals(actual, expected);
console.log(
  `Test 4.3: initTakeoff removes the plane passed to it from planesAtAirport: ${result}`
);
// Clean up
testAirport = null;
expected = undefined;
actual = undefined;
result = undefined;

// Arrange
testAirport = new Airport();
testAirport.landPlane(dfa001);
testAirport.initTakeoff(dfa001);
control = 0;
expected = control + 1;
// Act
actual = testAirport.planesDeparted.length;
// Assert
result = assertEquals(actual, expected);
console.log(
  `Test 4.4: before capacity is reached, planesDeparted.length has increased by 1 after landing a plane: ${result}`
);
// Clean up
testAirport = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`\n
===================================================`);
console.log(
  `Test 5 \n
  - Check that when plane is in planesAtAirport array, planeAtAirport returns true\n
  - Check that when plane is not in planesAtAirport array, planeIsAtAirport returns false\n
  - Check that landPlane returns an error message when plane is already at airport\n
  - Check that landPlane does not land a plane that is already at the airport\n
  - Check that initTakeoff returns an error message when plane is not at airport\n
  - Check that initTakeoff does not take-off a plane that is not at the airport by checking planesDeparted\n
  `
);

// Arrange
testAirport = new Airport();
testAirport.landPlane(dfa001);
expected = true;
// Act
actual = testAirport.planeIsAtAirport(dfa001);
// Assert
result = assertEquals(actual, expected);
console.log(
  `Test 5.1: if plane is in planesAtAirport array, planeIsAtAirport returns true: ${result}`
);
// Clean up
actual = undefined;
result = undefined;

// Arrange
testAirport.initTakeoff(dfa001);
expected = false;
// Act
actual = testAirport.planeIsAtAirport(dfa001);
// Assert
result = assertEquals(actual, expected);
console.log(
  `Test 5.2: if plane is not in planesAtAirport array, planeIsAtAirport returns false: ${result}`
);
// Clean up
testAirport = null;
expected = undefined;
actual = undefined;
result = undefined;

// Arrange
testAirport = new Airport();
testAirport.landPlane(dfa001);
testAirport.landPlane(dfa001);
expected = `Error: Flight dfa-001 has already landed`;
// Act
actual = testAirport.landPlane(dfa001);
// Assert
result = assertEquals(actual, expected);
console.log(
  `Test 5.3: landPlane returns an error message when plane is already at airport: ${result}`
);
// Clean up
testAirport = null;
expected = undefined;
actual = undefined;
result = undefined;

// Arrange
testAirport = new Airport();
testAirport.landPlane(dfa001);
testAirport.landPlane(dfa001);
expected = 1;
// Act
actual = testAirport.planesAtAirport.length;
// Assert
result = assertEquals(actual, expected);
console.log(
  `Test 5.4: landPlane does not land a plane that is already at airport: ${result}`
);
// Clean up
testAirport = null;
expected = undefined;
actual = undefined;
result = undefined;

// Arrange
testAirport = new Airport();
testAirport.initTakeoff(dfa001);
expected = `Error: Flight dfa-001 is not at this airport`;
// Act
actual = testAirport.initTakeoff(dfa001);
// Assert
result = assertEquals(actual, expected);
console.log(
  `Test 5.5: initTakeoff returns an error message when plane is not at airport: ${result}`
);
// Clean up
testAirport = null;
expected = undefined;
actual = undefined;
result = undefined;

// Arrange
testAirport = new Airport();
testAirport.initTakeoff(dfa001);
expected = 0;
// Act
actual = testAirport.planesDeparted.length;
// Assert
result = assertEquals(actual, expected);
console.log(
  `Test 5.6: initTakeoff does not take-off a plane that is not at the airport: ${result}`
);
// Clean up
testAirport = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`\n
===================================================`);
console.log(
  `Test 6 \n
  - Check that checkWeather returns an appropriate message for stormy conditions\n
  - Check that checkWeather returns an appropriate message for clear conditions\n
  `
);
// Arrange
const goodWeather = new Weather(false);
const badWeather = new Weather(true);
testAirport = new Airport();
testAirport.checkWeather(badWeather);
expected = `Weather is too stormy for takeoff or landing`;
// Act
actual = testAirport.checkWeather(badWeather);
// Assert
result = assertEquals(actual, expected);
console.log(
  `Test 6.1: checkWeather returns an appropriate message for stormy conditions: ${result}`
);
// Clean up
testAirport = null;
expected = undefined;
actual = undefined;
result = undefined;

// Arrange
testAirport = new Airport();
testAirport.checkWeather(goodWeather);
expected = `Weather is clear for takeoff or landing`;
// Act
actual = testAirport.checkWeather(goodWeather);
// Assert
result = assertEquals(actual, expected);
console.log(
  `Test 6.2: checkWeather returns an appropriate message for clear conditions: ${result}`
);
// Clean up
testAirport = null;
expected = undefined;
actual = undefined;
result = undefined;

console.log(`\n
===================================================`);
