const emojilist = document.querySelector("#results");

fetch('https://emojihub.yurace.pro/api/all').then(res => { return res.json() }).then(data => {
    console.log(data)
    emojilist.innerHTML = data
        .map((name) => {
            return `
        <section class="card">
        <h1 class="emoji">${name.htmlCode}</h1>
            <p>emoji name :  ${name.name}</p>
            <p>emoji category : ${name.category}</p>
        </section>
        `
        })
        .join('');
})

function OnSearchChange(event) {
    let cat = event.target.value
    if ((cat == "smileys-and-people") || (cat == "animals-and-nature") || (cat == "food-and-drink") || (cat == "travel-and-place") || (cat == "activities") || (cat == "objects") || (cat == "symbols") || (cat == "flags")) {
        fetch(`https://emojihub.yurace.pro/api/all/category/${cat}`).then(res => { return res.json() }).then(data => {
            console.log(data)
            emojilist.innerHTML = data
                .map((name) => {
                    return `
            <section class="card color2">
                <h1 class="emoji">${name.htmlCode}</h1>
                <p>emoji name :  ${name.name}</p>
                <p>emoji category : ${name.category}</p>
            </section>
            `
                })
                .join('');
        })
    }
    else {
        console.log("error, no valid search results")
        fetch('https://emojihub.yurace.pro/api/all').then(res => { return res.json() }).then(data => {
            console.log(data)
            emojilist.innerHTML = data
                .map((name) => {
                    return `
                <section class="card color1">
                <h1 class="emoji">${name.htmlCode}</h1>
                    <p>emoji name :  ${name.name}</p>
                    <p>emoji category : ${name.category}</p>
                </section>
                `
                })
                .join('');
        })
        alert("error, no valid search results")
    }

}
