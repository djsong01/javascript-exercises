const findTheOldest = function(people) {
    
    const currentYear = new Date().getFullYear();
    
    const age = people.map(person => {
        const death = person.yearOfDeath || currentYear;
        return{
        name: person.name,
        years: death - person.yearOfBirth
        };
    })

    const oldestPerson = age.sort((a,b) => b.years-a.years)
    return oldestPerson[0];
};

// Do not edit below this line
module.exports = findTheOldest;


/*

people is an array with objects (name, bYear, dYear)
>I need to get bYear & dYear and subtract it 
>Then I need to filter or reduce to highest people 

>oldest = greatest dYear-bYear 




*/