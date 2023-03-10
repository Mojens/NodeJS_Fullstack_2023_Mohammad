const express = require('express')
const app = express()

app.use(express.json());
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/frontpage/frontpage.html')
});

/* API */

app.get('/api/age', (req, res) => {
    const birthDate = req.query.birthDate;
    console.log(birthDate);
    const birthYear = birthDate.split('-')[0];
    const birthMonth = birthDate.split('-')[1];
    const birthDay = birthDate.split('-')[2];
    console.log(birthYear);
    console.log(birthMonth);
    console.log(birthDay);
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth() + 1;
    const todayDay = today.getDate();
    console.log(todayYear);
    console.log(todayMonth);
    console.log(todayDay);
    let age = todayYear - birthYear;
    console.log(age)
    if (todayMonth < birthMonth || (todayMonth == birthMonth && todayDay < birthDay) && age > 0) {
        age--;
    }
    res.send({ data: age });
});





app.listen(8080, () => console.log('Listening on port 8080'))