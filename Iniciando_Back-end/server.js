const express = require('express')
const nunjucks = require('nunjucks')

const server = express();
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine" , "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})

server.get("/", function( req, res){

    const about = {
        avatar: "img/dudu.jpg", 
        name: "Duany Souza",
        role: "Estágiaria em Programação",
        description: "Estudande do Centro Univdersitário Carioca, atualmente trabalha como desenvoldedora front-end.",
        links: [
            { name: "Github", url: "https://github.com/DuanySouza"},
            { name: "Twitter", url: "https://twitter.com/DuanySouza01"},
            { name: "Linkedin", url: "https://www.linkedin.com/in/duany/"},
        ]

    }

    return res.render("about", {about})
})

server.get("/aulas", function( req, res){

    return res.render("aulas", {items: videos})
})

server.get("/video", function(req, res){
    const id = req.query.id

    const video = videos.find(function(video){
        return video.id == id
    })

    if(!video){
        return res.send("Video not found!")
    }
    
    return res.render("video", {item: video})
})

server.listen(5000, function() {
    console.log("server is running")
})