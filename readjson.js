var fs = require('fs');

fs.readFile(__dirname + '/belajar.json', function(err, data) {
    var jsonObj = JSON.parse(data);
    console.log("Nama = " + jsonObj.firstName + " " + jsonObj.lastName);
    console.log("alamat = " + jsonObj+);
    console.log("Usia = " + jsonObj.age);
    console.log("kredit = " +jsonObj+ )
});
