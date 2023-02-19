const rocks = [
    {name: 'Led Zeppelin', age: 55},
    {name: 'Dwayne johnson', age: 50},
    {name: 'Neptune', age: 100_00_00}
  ]
  
  const rocksAgedOneYear = rocks.map(rock => {
    return {...rock, age: rock.age + 1}
  })
  
  console.log(rocksAgedOneYear)
  
  const evenAgedRocks = rocks.filter(rock => rock.age % 2 === 0)
  
  console.log(evenAgedRocks)