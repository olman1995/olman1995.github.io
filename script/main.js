class Main{
    constructor(){

    }
    Init(){
        let bodyHtml = document.body;

        let content = document.getElementById("content");
        let rect = bodyHtml.getBoundingClientRect();

        let heightValue = rect.height * 0.75;
        content.setAttribute("style","height:"+heightValue+"px;")
        console.log("Hola mundo");
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    let main = new Main();
    main.Init();
})