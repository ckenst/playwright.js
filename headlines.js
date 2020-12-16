let {select} = await simplify("playwright")

let url = await arg("Enter url:")
let selector = await arg("Enter selector:")

let headlines = await select(url, selector)

let curated = await prompt({
    message: "Select headlines",
    type: "checkbox",
    choices: headlines

})

let filename = url + "-" + selector + ".json"
writeFile(fileName, JSON.stringify(curated.value, null, "\t"))
edit(fileName)