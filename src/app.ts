import  express  from "express";
import { Application } from "express";

class App{
    public app:Application
    public port: number

    constructor(appInit: { port : number; middlewares:any; controllers:any}){
        this.app=express()
        this.port=appInit.port;
        this.routes(appInit.controllers)
        this.middlewares(appInit.middlewares)
    }
    public listen(){
        this.app.listen(this.port,()=>{
            console.log(`server running on a ${this.port}`)
        })
    }

    private routes(controllers:any){
        controllers.forEach(controller => {
            this.app.use(controller.path,controller.router);
            
        });
    }
    private middlewares(mids:any){
        mids.forEach(mid => {
            this.app.use(mid);
            
        });
    }


}

export default App;