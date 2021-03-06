/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal) {
    //check if animal name length is greater than 0 and species length is greater than 0
    if (animal.name.length > 0 && animal.species.length > 0) {
         //use a for loop to access each animal in the animals array
         for (var i = 0; i < animals.length; i++) {
            //check if animal's name is the same as the animal in the array
            //stop the loop if true using return
            if (animals[i].name === animal.name) {
                return;
            }
         }
        //push animal into the animals array
    animals.push(animal);
    
    }
    
    
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === animals.name) {
            return;
        }
    }
    
    if (animal.name.length > 0 && animal.species.length > 0) {
        animals.push(animal);
    }
    
    
  
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
