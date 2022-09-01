


let versions = [{
    name: "samsung.F11",
    date: '2020',
    Type: "major",
    features: ["search"],
    Author: "william",
    Bugs: ['ABC21', "video"]
},


{
    name: "abc-version2.k",
    date: '2021',
    Type: "patch",
    features: ["scalable text"],
    Author: "ronald",
    Bugs: ['ABC24', "Video"]
},


{
    name: "apple-version3.0",
    date: '2019',
    Type: "major",
    features: ["animation"],
    Author: "sam",
    Bugs: ['ABC20', "tap"]
},


{
    name: "oppoA.53",
    date: "2015",
    Type: "patch",
    features: ["design"],
    Author: "Steve",
    Bugs: ['ABC12', "ux problem"]
},


{
    name: "version7.A",
    date: "2022",
    Type: "enhancement",
    features: ["scalable text"],
    Author: "ronald",
    Bugs: ['ABC2001', "Visualization uses"]
}]

console.table(versions)

//Identifing Type in versions:-
var patch = (versions.filter(n => n.Type.includes("patch")))
let major = (versions.filter(n => n.Type.includes("major")))
var Enhancement = (versions.filter(n => n.Type.includes("enhancement")))
console.log("Type of patch in versions", patch)
console.log("Type of major in versions", major)
console.log("Type of enhancement in versions", Enhancement)
console.log("***************************************************")

//Identifying date in versions:-
let year = versions.filter(a => a.date.includes("2020"))
console.log("particular year in versions", year)
console.log("*******************************************************")

//Identifying author in versions:-
var arr1: any[] = []
versions.forEach(version => {
    arr1.push(version.Author)
});
let ab = []
ab = [...new Set(arr1)]
var releaseArr = []
for (let i of ab) {
    let release = 0
    for (let j of arr1) {
        if (i == j) {
            release++
        }
    }
    releaseArr.push(release)
}
let max = Math.max(...releaseArr)
for (let i in releaseArr) {
    if (max == releaseArr[i]) {
        console.log("number of Author in Versions:-", ab[i]);
    }

}
console.log("**************************************************")

// Identifying Bugs :-
let bugId = "ABC12"
let pk = []
for (let i in versions) {
    if (bugId == versions[i].Bugs[0]) {
        pk.push(versions[i])
    }
}
console.log([pk], "bugId")
console.log("****************************************************")

//Specific feature name:-
var fea = versions.filter(n => n.features.includes("scalable text"))
console.log('features', fea)
console.log("****************************************************")
