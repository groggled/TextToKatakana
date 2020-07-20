let {katakana} = require("./katakanatable.json")
let KatakanaTable = new Map(Object.entries(katakana))

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('What do you want to convert? \n', (text) => {
    console.log('Katakana: ' + toKatakana(text))
    readline.close()
})

function toKatakana (text) {
    text = text.toLowerCase()
    let syllable = ""
    for (let i = 0, l = 3, result = "";;) {
        if(l === 0) {
            result += text.slice(i, i)
            i ++
            continue
        }
        syllable = text.slice(i, i + l)
        if (syllable === "") {
            return result
        }
        console.log("The syllable has been set to: " + syllable)
        if(KatakanaTable.has(syllable)) {
            result += KatakanaTable.get(syllable)
            i += syllable.length
            l = 3
        } else if (syllable.length === 2 && syllable.slice(0,1) === syllable.slice(1, 2) ) {
            result += "ッ"
            i ++
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

