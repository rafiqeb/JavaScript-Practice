//       ********* String  Uppercase   Lowercase  ********

// const school = 'Kamiab Coaching Center';
// console.log(school);
// console.log(school.toLowerCase())
// console.log(school.toUpperCase())

// const subject = 'Bangla';
// const book = 'bangla';
// if(subject.toLowerCase() === book.toLowerCase()){
//     console.log('Ami porbo')
// }
// else{
//     console.log('Ami porbo na')
// }

// const drink = 'water';
// const milk = '  water  ';
// if(drink.trim() === milk.trim()){
//     console.log('water is life');
// }
// else{
//     console.log('Milk is solid water');
// }

//       **********   String Slice, Split,  Join   **********

// const country = 'Bangladesh';
// console.log(country)
// const part = country.slice(0, 6);
// console.log(part);

// const sentence = 'She is a good girl';
// console.log(sentence.split(' '))
// const friends = 'Rahim,Karim,Fahim,Shamim';
// console.log(friends.split(','))
// const friends = ['Rahim', 'Karim', 'Fahim', 'Shamim'];
// console.log(friends.join());
// console.log(friends.join('|'));
// console.log(friends.join('-'));

// const first = 'Rahim';
// const last = 'Karim';
// const fulname = first + ' ' + last;
// console.log(fulname)

//    ***********    Strin Revers  **********

// const sentence = 'I am learning web devolopment';
// let revers = ''
// for(const letter of sentence){
//     revers = letter + revers;
// }
// console.log(revers);

//      ***********  Object   **********

// const student = {
//     name: 'Rafiqul',
//     class: 'Honours',
//     roll: 1303019,
//     isPassed: true,
//     subject: ['Quran', 'Hadith', 'Dawah'],
// }
// console.log(student)
// console.log(student.roll)
// const number = student.roll;
// console.log(number)
// console.log(student['class'])
// student.subject = ['Bangla', 'English', 'Math']
// console.log(student)

//     ********    Object Kyes /  Values  ******
// const computer = {
//     brand: 'HP',
//     price: 37000,
//     processor: 'intel',
//     ram: '4GB',
//     memory: '1000GB',
// }
// console.log(computer)
// const keys = Object.keys(computer);
// console.log(keys);
// const values = Object.values(computer)
// console.log(values)

// const collage = {
//     name: 'CT callage',
//     place: 'Jhenaidah',
//     result:{
//         GPA: 5.00,
//         merit: 'top',
//     }
// }
// console.log(collage)
// // console.log(collage.result)
// // console.log(collage.result.GPA)
// delete collage.result.merit;
// console.log(collage)

// const mobile = {
//     brand: 'samsung',
//     price: 15000,
//     color: 'white',
//     camera: '16mp',
//     display: '720*1680'
// }
// console.log(mobile)
// for(const prop in mobile){
//     console.log(prop)
// }
