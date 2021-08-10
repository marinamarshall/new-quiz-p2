const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
function getUserScore() {
    finalScore.innerText = mostRecentScore;
}