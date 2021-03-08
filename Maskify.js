/*
function maskify(cc) {
        return cc.slice(0,-4).replace(/\w/g,'#')+cc.slice(-4);

}
maskify('4556364607935616');*/

function z(s) {
    let res = s.toString().split('').reduce((a,b)=> a + b,0)
    console.log(res)
}
z(493193);