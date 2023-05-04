// Hello! Uncomment the console.log's to see results!

const submissions = [
    { name: "Jane",score: 95,date: "2020-01-24",passed: true},
    { name: "Joe",score: 77,date: "2018-05-14",passed: true},
    { name: "Jack",score: 59,date: "2019-07-05",passed: false},
    { name: "Jill",score: 88,date: "2020-04-22",passed: true},
]
// console.log(submissions);

function addSubmission(array,newName,newScore,newDate) {
    let hasPassed = newScore >= 60 ? true : false;
    const newData = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: hasPassed,
    }
    array.push(newData);
}
// addSubmission(submissions, "avery", 75, "2023-05-03");

function deleteSubmissionByIndex(array,index) {
    array.splice(index)
}
// deleteSubmissionByIndex(submissions,(1, 2));

function deleteSubmissionByName(array,name) {
    const index = array.findIndex((Object) => Object.name === name);
    if (index !== -1) {
        array.splice(index, 1);
    }
}
// deleteSubmissionByName(submissions,"Jack")

function findLowestScore(array) {
    let lowestScore = 100;
    for (const submission of array) {
        if (submission.score < lowestScore) {
            lowestScore = submission.score;
        }
    }
    return lowestScore;
}
// console.log(findLowestScore(submissions))

function findAverageScore(array) {
    let sum = 0;
    for (let x of array) {
        sum += x.score;
    }
    return sum / array.length;
}
// console.log (findAverageScore(submissions));

function findPassing(value) {
    return value.passed === true; 
}
function filterPassing(array) {
    return array.filter(findPassing);
}
// console.log(filterPassing(submissions));

function find90(value) {
    return value.score >= 90;
}
function filter90AndAbove(array) {
    return array.filter(find90);
}
// console.log(filter90AndAbove(submissions))