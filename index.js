//L'application requiert l'utilisation du module Express.
//La variable express nous permettra d'utiliser les fonctionnalités du module Express.  
var express = require('express'); 
 
// Nous définissons ici les paramètres du serveur.
//var hostname = 'localhost'; 
var port = 3000; 
 
var app = express(); 

//Afin de faciliter le routage (les URL que nous souhaitons prendre en charge dans notre API), nous créons un objet Router.
//C'est à partir de cet objet myRouter, que nous allons implémenter les méthodes. 
var myRouter = express.Router(); 
 
// Je vous rappelle notre route (/abcd).  
myRouter.route('/abcd')
// GET
.get(function(req,res){ 
	  res.json({message : "Liste toutes les piscines de Lille Métropole", methode : req.method});
})
// Nous demandons à l'application d'utiliser notre routeur
app.use(myRouter);  
// Démarrer le serveur 
app.listen(port, function(){
	console.log("Mon serveur fonctionne sur http://localhost:"+port+"\n"); 
});
 