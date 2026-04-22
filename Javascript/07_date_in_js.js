// date

let d = new Date();
console.log(d.toString());
console.log(d.toDateString());
console.log(d.toLocaleString());
console.log(typeof d);

let md = new Date(2026, 3, 21);
console.log(md.toDateString());

let timestamp = Date.now();
console.log(timestamp);
