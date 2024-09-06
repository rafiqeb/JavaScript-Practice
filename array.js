//      *********   Array    ******

// const number = [12, 14, 16, 18, 20, 24,];
// const name = ['Abul', 'Babul', 'Habul', 'Kabul'];
// console.log(number)
// console.log(name)
// console.log(number.length)      var name.length
// console.log(name.length)
// console.log(number[7])         var name[3/4/5etc]

//       ********  Change the value   ******
// number[3] = 19;
// console.log(number)

//        ******** Push Pop   ********

// const number = [12, 14, 20, 24,]
// console.log(number)
// number.push(27);
// console.log(number)
// number.push(30, 50, 70);
// console.log(number)
// number.pop()
// console.log(number)
// number.pop()
// console.log(number)

// const fruits = ['mango', 'orange', 'banana', 'lichi'];
// console.log(fruits)
// fruits.push('dragon')
// console.log(fruits)
// fruits.pop()
// console.log(fruits)

//     *********   Shift Unshift    ******

// const numbers = [12, 14, 16, 18];
// console.log(numbers);
// numbers.shift()
// console.log(numbers)
// numbers.unshift(10)
// console.log(numbers)

//      *******   Upadan ase kina dekhar jonno   ******

// const fruits = ['mango', 'orange', 'banana', 'lichi'];
// console.log(fruits.includes('banana'))
// console.log(fruits.includes('coconaut'))

// if(fruits.includes('coconut')){
//     console.log('ami kinbo')
// }
// else{
//     console.log('ami kinbo na')
// }
// console.log(fruits[2])
// console.log(fruits.indexOf('lichi'))
// console.log(fruits)
// fruits[2] = 'coconut';
// console.log(fruits)

//      ********    Home tadk     ******

// const place = ['Dhaka', 'Coxes bazar', 'Saintmartin'];
// console.log(place);
// place.push('Kuakata');
// console.log(place);
// place.push('Jhenaidah', 'Shundorbon');
// console.log(place)
// place.pop()
// console.log(place)

//     *********  Array 2nd Part   ***** Array te Loop er use   ******

// const friends = ['Rahim', 'Karim', 'Hablu', 'Bablu'];
// for(const friend of friends){
//     console.log(friend)
// }
// for(let i = 0; i < friends.length; i++){
//     console.log(i)
//     console.log(friends[i])
// }

// const numbers = [10, 12, 500, 'village', 14, 16, 200, 20];
// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i])
// }
// let n = 0;
// while(n < numbers.length){
//     console.log(numbers[n])
//     n++;
// }

// const numbers = [1, 2, 3, 4, 5,];
// console.log(numbers)
// numbers.reverse()
// console.log(numbers)

//     ************ Short Array  Ascending, Descending *********

// const person = ['rakib', 'adib', 'sakib', 'nokib'];
// const sortedPersons = person.sort()
// console.log(sortedPersons)

// const numbers = [4, 8, 5, 9, 55, 1, 15, 3];
// const number_asc = [...numbers].sort(function (a, b) { return a - b})
// const number_dsc = [...numbers].sort(function (a, b) { return a - b})
// console.log(number_asc);
// console.log(number_dsc);