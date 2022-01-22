var moment = require('moment');

// hari ini
console.log(moment().format("YYYY-MM-DD"))

// 5 hari kebelakang
console.log(moment(moment().subtract(5, 'days')).format("YYYY-MM-DD"))

// 5 hari kedepan
console.log(moment(moment().subtract(-5, 'days')).format("YYYY-MM-DD"))

// hari
// menentukan tanggal a ke tanggal b, berapa hari
var a = moment(moment(moment().subtract(5, 'days')).format("YYYY-MM-DD"));
var b = moment(moment(moment().subtract(-5, 'days')).format("YYYY-MM-DD"));
console.log(a.from(b))

// menentukan tanggal a, mengikuti tanggal hari ini, berapa hari
console.log(moment(moment(moment().subtract(-5, 'days')).format("YYYY-MM-DD")).toNow(true))