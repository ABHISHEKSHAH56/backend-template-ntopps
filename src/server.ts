import bodyParser from 'body-parser';
import HomeController from "./controllers/home.controller";
import App from "./app";


const  app = new App({
    port:3000,
    controllers:[
        new HomeController()
    ],
    middlewares:[
        bodyParser.json(),
        bodyParser.urlencoded({extended:true})
    ]
})
app.listen()