const request = require("request");
const cheerio = require("cheerio");
const chalk = require("chalk");

console.log("Before");
request("https://www.amazon.in/gp/bestsellers/books", cb);
console.log("After");

function cb(error, response , html) {
    if(error) {
        console.log("An error has occured, ", error);
    }
    else {
        handleHtml(html)
    }
}

function handleHtml(html) {
    let selTools = cheerio.load(html);
    ///console.log(selTools);
    let content = selTools(".a-link-normal ._cDEzb_p13n-sc-css-line-clamp-2_EWgCb, ._cDEzb_p13n-sc-css-line-clamp-1_1Fn1y");
    let authors = selTools(" .a-size-small ._cDEzb_p13n-sc-css-line-clamp-1_1Fn1y");
//    let book = selTools(content[0]).text()
//     console.log("Books : ", book);
    
//         let data =selTools(authors[0]).text()
//         console.log(data);
for(let i=0; i<=30; i++) {
    
        var bookdata = selTools(content[i]).text();
        var authorName = selTools(authors[i]).text();

        console.log(chalk.blue(`book ${[i]} : ${bookdata}`))
        console.log(chalk.red(`author ${[i]} : ${authorName} `));
    
}


    
}

