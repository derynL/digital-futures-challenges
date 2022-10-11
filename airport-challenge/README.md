# Airport Challenge

``````
         ______
        __\____\___
=  = ==(____DFA____)
           \_____\__________________,-~~~~~~~`-.._
          /     o o o o o o o o o o o o o o o o  |\_
          `~-.__       __..----..__                  )
                `---~~\___________/------------`````
                =  ===(_________)

``````

## About this Project

      - The Airport Challenge proposed a few simple problems that might face a small airport, such as:
        - Landing and taking off planes
        - Keeping track of planes at the airport
        - Keeping track of planes leaving the airport
        - Ensuring that take-off or landing instructions are never sent to the wrong planes
        - Keeping track of weather so that planes could land or take-off safely
      - This was the first assessed challenge for the Digital Futures 12 week software engineer course.
      - It was a practical introduction to domain modelling, test-driven development and object-oriented programming.

## Project build /Getting Started

      - Language: JavaScript
      - Test framework: basic framework using expected, actual and assert-equals procedures
      - Dependencies: Node JS
      - Running: projects runs entirely in command line. Tests all run from airport.spec.js.
      - Structure:
        - TLD: index.js, testing-framework.js, README.md
        - ./src: airport.js, plane.js, weather.js (separate class files)
        - ./test: airport.spec.js (all project tests run from here)

## Project Domain Models and Proposed Tests

```
1.
As an air traffic controller
So I can get passengers to a destination
I want to instruct the airport to land a plane
```

| **Objects** | **Properties**                  | **Messages** | **Output** |
| ----------- | ------------------------------- | ------------ | ---------- |
| Airport     | planesAtAirport @array[objects] | @landPlane   | @string    |
|             |                                 |              |            |
| Plane       | id @string                      |              |            |

**Proposed test/s**

1. Check that array length has increased since function call
2. Check that function continues to work as expected when adding more planes to planesAtAirport

```
2.
As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate
```

| **Objects** | **Properties**        | **Messages** | **Output** |
| ----------- | --------------------- | ------------ | ---------- |
| Airport     | capacity @number = 10 | @setCapacity | none       |
|             |                       |              |            |
| Plane       | id                    |              |            |

**Proposed test/s**

1. Check that capacity value matches the default value supplied when a new airport object is created
2. Check that setCapacity function changes the default capacity value

```
3.
As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full
```

| **Objects** | **Properties**  | **Messages**    | **Output** |
| ----------- | --------------- | --------------- | ---------- |
| Airport     | capacity        | capacityReached | @string    |
|             | planesAtAirport |                 |            |
|             |                 |                 |            |
| Plane       | id              |                 |            |

**Proposed test/s**

1. If a plane lands **before capacity** is reached, check that planesAtAirportay increases by one.
2. If a plane lands, check that landPlane has printed confirmation
3. Check that capacityReached message returned when airport capacity is full
4. Check that plane is not added to planesAtAirport when airport capacity is full

```
4.
As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct the airport to let a plane take off and confirm that it is no longer in the airport
```

| **Objects** | **Properties**          | **Messages** | **Output** |
| ----------- | ----------------------- | ------------ | ---------- |
| Airport     | planesAtAirport         | @initTakeoff | @string    |
|             | @planesDeparted[@array] |              |            |

**Propsed Tests**

1. Check that initTakeoff returns a confirmation message when a plane leaves the airport
2. Check that initTakeoff reduces planesAtAirport.length by one
3. Check that initTakeoff removes the plane passed to it from planesAtAirport
4. Check that initTakeoff adds the departed plane to planesDeparted

```
5.
As an air traffic controller
To avoid confusion
I want to prevent asking the airport to let planes take off which are not at the airport, or land a plane that's already landed
```

| **Objects** | **Properties**          | **Messages**      | **Output** |
| ----------- | ----------------------- | ----------------- | ---------- |
| Airport     | planesAtAirport         | @initTakeoff      | @string    |
|             |                         | @landPlane        | @string    |
|             |                         | @planeIsAtAirport | @boolean   |
|             |                         |                   | @string    |
|             | @planesDeparted[@array] |                   |            |

**Propsed Tests**

1. Check that when plane is in planesAtAirport array, planeIsAtAirport returns true
2. Check that when plane is **not** in planesAtAirport array, planeIsAtAirport returns false
3. Check that landPlane returns an error message when plane is already at airport
4. Check that landPlane does not land a plane that is already at the airport
5. Check that initTakeoff returns an error message when plane is not at airport
6. Check that initTakeoff does not take-off a plane that is not at the airport

```
6.
As an air traffic controller
To ensure safety
I want to prevent takeoff or landing when weather is stormy
```

| **Objects** | **Properties**          | **Messages**  | **Output** |
| ----------- | ----------------------- | ------------- | ---------- |
| Airport     | planesAtAirport         | @initTakeoff  | @string    |
|             |                         |               | @boolean   |
|             |                         | @checkWeather | @string    |
|             | @planesDeparted[@array] |               |            |
|             |                         |               |            |
| Weather     | @stormStatus @boolean   |               |            |

**Propsed Tests**

1. Check that checkWeather returns an appropriate message for stormy conditions
2. Check that checkWeather returns an appropriate message for clear conditions

## Project Review and Roadmap

      - My main takeaways from this project:
        - My first attempt at test-driven and object-oriented programming
        - The project really helped me to understand the specific, organised planning required for a well-written program
        - A great introduction to the discipline of writing tests before writing and implementing the program
        - I received an inkling of just how much I need to practise in order to make the procedures 2nd nature
        - I recognised the need to simplify my code, and to focus on the problem at hand
      - What I would do differently if I were to do this again:
        - I would use a comprehensive test framework like Jasmine
        - I would encapsulate my classes, and review all code to look for options to create additional classes
        - Ensure single responsibility and loose coupling in all classes
        - Separate testing of different classes into different files
        - Review all functions to find ways to simplify and refactor
        - Take a 'zoomed out' look at the code to assess whether it is easy to understand
        - Add comments anywhere code might need a simple explanation

## Where Next?

      - If I were to build on this project, I would consider the following additions to make it more comprehensive:
        - Plane destinations
        - Arrival and departure timetable
        - Handling delays and cancellations
        - Adding passengers to flights
