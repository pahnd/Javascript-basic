let team = ['Mu', 'ManCity', 'Liver', 'Chelsea'];
//var i = 0; Chú ý var sẽ khai báo biến toàn cục và sẽ cộng dồn
let i = 0;


// i++ --> Assign --> Increment
// ++i --> Increment --> Assign
for (let i = 0; i < team.length; i++) {
    console.log('Check value local varriable i ', i )
    console.log('Check values of array', team[i])
}

console.log('This is global varriable i: ', i)



