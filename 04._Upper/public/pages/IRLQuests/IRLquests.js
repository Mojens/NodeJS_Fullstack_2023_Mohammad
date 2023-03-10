fetch('http://www.boredapi.com/api/activity/')
.then(res => res.json())
.then(data => {
   document.getElementById("quest")
    .innerText = data.activity
})