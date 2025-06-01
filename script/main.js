class Main{
    constructor(){
        this.Maps = new window.Maps();
    }
    Init(){
        let scope = this;

        let bodyHtml = document.body;

        let content = document.getElementById("content");
        let rect = bodyHtml.getBoundingClientRect();

        let heightValue = rect.height * 0.75;
        content.setAttribute("style","height:"+heightValue+"px;")
        
        //scope.Init();
        scope.Maps.Init();
        console.log("Hola mundo");
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    let main = new Main();
    main.Init();
})

