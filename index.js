function saturdayFun(funActivity = 'roller-skate') {
    return (`This Saturday, I want to ${funActivity}!`)
}

function mondayWork(workActivity = 'go to the office') {
    return (`This Monday, I will ${workActivity}.`);
}

function wrapAdjective(flair = '*') {
    return function(adj = 'special') {
        return `You are ${flair}${adj}${flair}!`
    }
}