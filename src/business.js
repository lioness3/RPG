// //racecar RPG
export const canRace = (car) => ({
  drive: (speed) => {
    return  distance ++;
  }
});
const canCrash = (car) => ({
  lose: (score) => {
    return `Your ${car.type} crashed!`
  }
});
const trafficJam = (car) => ({
  drive: (speed) => {
    Math.random for random traffic jam
    return //distance stopped
  }
});

const levelUp = (car) => ({
  win: (score) => {
    return //upgrade car or AM part
  }
});
const sleepingEatingCreature = (name) => {
  let creature = {
    name
  }

  return { ...creature, ...canEat(creature), ...canSleep(creature) };
};
const customPackage1 = {
  wheelPackage1:"chrome",
  interiorPackage1:"leather",
  exteriorPackage1:"tinted windows"

}
const hpPackage1 = {
  tunePackage1:"basic tune",
  bodyPackage1:"steel",
  intakePackage1:"no turbo",
  speed:????

}
const handlingPackage1 = {
  tirePackage1 :"basic",
  suspension1:"highend suspension no strut mount or roll cage"
  alignment:"needs upgrade"
  upgraded package avoids traffic better

}
const racecar ={
  packages?
  type: "clunker"
  characters: clunker, evo , sti, golf R, 911
}

// Try building another RPG - this time using functional techniques such as composition.
//
// An RPG (Role Playing Game) is a game where players assume the roles of characters in a fictional world. Build and fully unit test the business logic for a Medieval Role Playing Game (or another genre that you prefer: sci-fi, cyberpunk, '80's high school).
//
// Logic could include the following:
//
// Character creation: Use composition to generate different character types. Be creative with your character types... warriors, wizards, scientists, prom queen... whatever! Characters should have specific attributes. For instance, in a medieval RPG, characters might have strength and intelligence attributes among others. In an '80's high school RPG, characters might have snark and charm. You can add and even update these attributes using composition.
//
// Battle system: Many RPGs have a battle system so characters can fight monsters, though that could just as easily be a high school “battle” system where the prom queen has a dance-off with the theater aficionado. Determine conditions for "winning" a battle, whether that's defeating monsters (with swords and spells doing damage), accumulating dance-off style points, or any other system you think of.
//
// Level up: Determine a leveling system. Characters should be able to go from Level 1 to Level 2 and so on. Generally each level comes with new abilities. How do characters level up in your game? What attributes and powers do they gain? Does their strength go up or do they learn new spells? You will need to use some object-oriented programming to complete this objective - characters can be individual objects with their own set of attributes.
//
// Inventory: Characters should be able to have items that enhance their abilities. Maybe the Magic Armor increases their defense power or legwarmers increase their dance-off ability. Create a limit to the number of items a character can have. Characters should be able to add, drop, buy and sell items.

//start with clunker car
upgrade as you win each race
carbon fiber package: for speed
tune: for speed
upgraded turbo: for speed
tires :for handling
strut mount/roll cage:for handling
alignment:for handling
decals: for customization
interior:for customization
wheels: for customization

characters: clunker, evo , sti, golf R, 911
battle system: race against cars on the street
random traffic slows you down
