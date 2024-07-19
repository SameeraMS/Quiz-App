const mostRecentScore = localStorage.getItem('mostRecentScore');

const finalScore = document.getElementById('finalScore');

finalScore.innerText = mostRecentScore;
document.getElementById('userName').innerText=localStorage.getItem('lastName');

