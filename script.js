const emojilist = document.querySelector("#results");

fetch('https://emojihub.yurace.pro/api/all').then(res => { return res.json() }).then(data => {
    console.log(data)
    emojilist.innerHTML = data
        .map((name) => {
            return `
        <section class="card">
        <h1>${name.htmlCode}</h1>
            <h1>emoji name :  ${name.name}</h1>
            <h1>emoji category : ${name.category}</h1>
        </section>
        `
        })
        .join('');
})

function OnSearchChange(event) {
    let cat = event.target.value
    if (cat != "smileys-and-people"|| cat != "animals-and-nature"|| cat != "food-and-drink"|| cat != "travel-and-place"|| cat != "activities"|| cat != "objects"|| cat != "symbols"|| cat != "flags") {
        console.log("error, no valid search results")
        alert("error, no valid search results")
    }
    fetch(`https://emojihub.yurace.pro/api/all/category/${cat}`).then(res => { return res.json() }).then(data => {
        console.log(data)
        emojilist.innerHTML = data
            .map((name) => {
                return `
        <section class="card">
            <h1>${name.htmlCode}</h1>
            <h1>emoji name :  ${name.name}</h1>
            <h1>emoji category : ${name.category}</h1>
        </section>
        `
            })
            .join('');
    })
}
