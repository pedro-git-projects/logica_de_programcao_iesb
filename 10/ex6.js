/* media soma das medias media das medias */
let set1 = [8, 9, 7]
let set2 = [4, 5, 6]

const sumSet1 = set1.reduce((a, b) => a + b, 0) 
const sumSet2 = set2.reduce((a, b) => a + b, 0) 

m1 = sumSet1 / set1.length
m2 = sumSet2 / set2.length
sm = m1 + m2
mm = sm / 2

console.log(`media 1 -> ${m1}
media 2 -> ${m2}
soma das medias -> ${sm}
media das medias -> ${mm}`)

