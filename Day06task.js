(Write a constructor for the class Movie, which takes a String representing the title of the movie, 
a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.)
class cinema {
constructor(Title,Studio,Rating){

this.Title = Title;
this.Studio = Studio;
this.Rating = Rating;
}

printDishes (){
console.log(`I recently saw this called ${this.Title}.It was real un-story. ${this.Studio} He is the producer. i will give rating for this movie ${this.Rating} `);

}
}

const screen1 = new cinema('2018','Antony Perumbavoor','RS');
const screen2 = new cinema('The Kerala Story','Vipul Amrutlal Shah','PG13');

screen1.printDishes()
screen2.printDishes()

console.log( screen1)
console.log( screen2)

//--------------------------------------------------//

(The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.)
class cinema {
constructor(Title,Studio,Rating){

this.Title = Title;
this.Studio = Studio;
this.Rating = Rating || 'PG' ;
}

printDishes (){
console.log(`I recently saw this called ${this.Title}.It was real un-story. ${this.Studio} He is the producer. i will give rating for this movie ${this.Rating} `);

}
}

const screen1 = new cinema('2018','Antony Perumbavoor',null);
const screen2 = new cinema('The Kerala Story','Vipul Amrutlal Shah','PG13');

screen1.printDishes()
screen2.printDishes()

console.log( screen1)
console.log( screen2)


//------------------------------------------------//

(Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG13”)


class Movie {
constructor(Title,Studio,Rating){

this.Title = Title;
this.Studio = Studio;
this.Rating = Rating || 'PG' ;
}

printDishes (){
console.log(`I recently saw this called ${this.Title}.It was real un-story. ${this.Studio} He is the producer. i will give rating for this movie ${this.Rating} `);

}
}

const screen1 = new Movie ('Casino Royale','Eon Productions','PG13');

screen1.printDishes()
console.log( screen1)




