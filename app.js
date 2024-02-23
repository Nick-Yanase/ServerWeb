var http = require('http')

http.createServer(function(reg, res){
    res.end("Mensagem de texto") //console log na web
}).listen(8081)

console.log("servidor funfando")