function table(input) {

    let res = [];
    let html = `<table>\n`;


    for (let line of input) {

        let arr = JSON.parse(line);
       // res.push(`\t<tr>\n\t\t<td>${arr.name}</td>\n\t\t<td>${arr.position}</td>\n\t\t<td>${arr.salary}</td>`);
       html += `\t<tr>\n`;
           html += `  <td>${arr.name}</td>\n`;
       html += `  <td>${arr.name}</td>\n`
       html += `  <td>${arr.name} </td>\n`
       html += '  </tr>\n'
    }
    html += `</table>`;
    return html
}
table([`{"name":"Pesho","position":"asd","salary":10000]}`]);