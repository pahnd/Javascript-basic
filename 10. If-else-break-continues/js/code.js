let team = ['Mu', 'ManCity', 'Liver', 'Chelsea'];

let i = 0;
while (i < team.length) {
    if (team[i] === "Mu") {
        console.log('Number', i + 1, 'is MU')
    }
    else if(team[i] === 'ManCity') {
        console.log('Number', i + 1, 'is ManCity')
        i++
        continue
    }
    else {
        console.log('Number', i + 1, 'is Liver')
        i++;
        break
    }
    console.log('>>>Check i ', i)
    i++;
}