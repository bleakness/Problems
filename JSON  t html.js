function JSONtoHTML(input) {


    function htmlEscape(text) {
        let map = {
            '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;'
        };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }

    let json = input;
    let jsonObj = JSON.parse(json);

    for ()

}
