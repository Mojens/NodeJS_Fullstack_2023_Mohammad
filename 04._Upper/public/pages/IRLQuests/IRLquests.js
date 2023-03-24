function fetchQuest(activityQueryString = "") {
    fetch(`http://www.boredapi.com/api/activity/${activityQueryString}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("quest")
                .innerText = data.activity
        })
}
fetchQuest()

document.getElementById("quest-type-btn").addEventListener("click", getNewQuest)

function getNewQuest() {
    const dropwDownValue = document.getElementById("activity-select").value
    fetchQuest(`?type=${dropwDownValue}`)
}