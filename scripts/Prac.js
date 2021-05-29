let person = [
    {
        name:'Jahanzaib',
        class: 6,
        rollno: '1241a'
    },
    {
        name:'Waqas',
        class: 8,
        rollno: 12
    },
    {
        name:'Sherjeel',
        class: 4,
        rollno: 12
    },
]



console.log(person);

console.log(person.some(p => p.name === 'Jahanzaib'))

let filtered = person.filter(a => a.rollno === 12)

console.log(filtered)

filtered.forEach(a => {
    console.log(`Name = ${a.name}
Roll No = ${a.rollno}
    `)
})

person.push({name:'John',class:10,rollno:'1112as'})

console.log(person)

person.push(...filtered)

console.log(person)



person.forEach(a => {
    let b = a.name.startsWith('J') || a.name.startsWith('S')
    console.log(b)
})

person.forEach(a => {
    let b = a.name.startsWith('Ja')
    console.log(b)
})
