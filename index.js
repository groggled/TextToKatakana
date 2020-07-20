let {katakana} = require("./katakanatable.json")
let KatakanaTable = new Map(Object.entries(katakana))

let text = "shiji"
console.log(toKatakana(text))

function toKatakana (text) {
    let syllable = ""
    let result = ""
    for (let i = 0, l = 3, result = "";;) {
        if(l === 0) {
            result += text.slice(i, i)
            i ++
            continue
        } //when there is no such char in the map, it just adds the char to the result
        syllable = text.slice(i, i + l)
        if (syllable == "") {
            return result
        }
        console.log("The syllable has been set to: " + syllable)
        if(KatakanaTable.has(syllable)) {
            result += KatakanaTable.get(syllable)
            i += syllable.length
            l = 3
        } else if(syllable.length === 1) {
            result += syllable
            i ++
            l = 3
        } else {
            l--
        }
    }
}

