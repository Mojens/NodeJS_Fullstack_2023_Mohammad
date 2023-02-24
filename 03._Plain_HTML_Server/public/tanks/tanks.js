async function getTanks() {
    const response = await fetch('/api/tanks')
        .then(response => response.json());
    const responseTanks = response.data
    document.getElementById('tanks-wrapper').innerHTML = responseTanks.map(tank => `
    <div class="tank">
        <h2>${tank.name}: ${tank.country}</h2>  
        </div>
        `).join('');
    return responseTanks;
}

fetch('/api/tanks')
    .then(response => response.json())
    .then(result => {
        const tankWrapperDiv = document.getElementById('tanks-wrapper');
        console.log(result.data)
        result.data.forEach(tank =>{
            const tankDiv = document.createElement("div")

            const tankName = document.createElement("p")
            const tankCountry = document.createElement("p")
            tankName.innerText = tank.name
            tankCountry.innerText = tank.country

            tankDiv.appendChild(tankName);
            tankDiv.appendChild(tankCountry);
            tankWrapperDiv.appendChild(tankDiv)
        })
    });

