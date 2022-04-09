/*
An array of travel destinations is defined below.
Each destination has a name, a distance from Glasgow, and a list of transportations available to go there.

1) Filter the travelDestinations array to return all destination names reachable within 500 kms.
2) Find a destination name reachable by ferry.
3) Print in the console all the destination names more than 300 kms far away and reachable by train.
*/


let destination1 = {
    destinationName: "Edinburgh",
    distanceKms: 80,
    transportations: ["car", "bus", "train"]
};

let destination2 = {
    destinationName: "London",
    distanceKms: 650,
    transportations: ["car", "bus", "train"]
};

let destination3 = {
    destinationName: "Paris",
    distanceKms: 900,
    transportations: ["train", "plane"]
};

let destination4 = {
    destinationName: "Dublin",
    distanceKms: 350,
    transportations: ["plane", "ferry"]
};

let travelDestinations = [destination1, destination2, destination3, destination4];

/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/


arrayDestine=[]
let destine = travelDestinations.filter(destination => destination.distanceKms<500).forEach(function (obj,index){
    arrayDestine[index]=obj.destinationName
    destinationNamesWithin500Kms= arrayDestine.toString()
})// Complete here

let cities=[]
let destineWithFerry=travelDestinations.forEach(function(array,index){
    const b = array.transportations.find(function (movil){
        return movil === 'ferry'
    })
    if (b=='ferry'){
        const c=travelDestinations[index].destinationName
        cities.push(c)
    } 
})
let destinationNameReachableByFerry = cities.toString()// Complete here

// destination1.transportations.find('ferry'===true).destinationName// Complete here
let citiesMore300KmsFarAwayWithTrain=[]
let destinieFarAway=travelDestinations.forEach(function(array,index){
    
    const b = array.transportations.find(function (movil){
        return movil === 'train'
    })
    const c = array.distanceKms
    console.log(c);
    if (b=='train' && c > 300){
        const d=travelDestinations[index].destinationName
        citiesMore300KmsFarAwayWithTrain.push(d)
    } 
})
let destinationNamesMoreThan300KmsAwayByTrain = citiesMore300KmsFarAwayWithTrain.toString()// Complete here (PRINT THE RESULT IN THE CONSOLE USING FOREACH)


/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

console.log(`Question 1) Expected result: Edinburgh,Dublin, actual result: ${destinationNamesWithin500Kms}`);
console.log(`Question 2) Expected result: Dublin, actual result: ${destinationNameReachableByFerry}`);
console.log(`Question 3) Expected result: London,Paris, actual result:  ${destinationNamesMoreThan300KmsAwayByTrain}`);