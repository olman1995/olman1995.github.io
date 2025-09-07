class Main{
    constructor(){
        this.BTLeft = document.getElementById("btLeft");
        this.BTRight = document.getElementById("btRight");
        this.BTHome = document.getElementById("btHome");

        this.Pages = ["#pg1","#pg2","#pg3","#pg4","#pg5","#pg6","#pg7","#pg8","#pg9","#pg10"]
        this.NDX = 0;
        let url = window.location.href;
        let urlSplit = url.split("#")
        if(urlSplit.length > 1){
            url = urlSplit[0];
            this.NDX = this.Pages.indexOf("#"+urlSplit[1]);
        }else{
            url = window.location.href;
        }
        this.Url = window.location.href.split("#")[0];
    }
    Build(){
        let scope = this;
        
        scope.BTLeft.onclick = scope.LeftClick(); 
        scope.BTRight.onclick = scope.RightClick(); 
        scope.BTHome.onclick = scope.HomeClick(); 

    }

    UpdatePage(){
        let scope = this;
        // console.log(scope.LeftNDX);
        // console.log(scope.RightNDX);
        // scope.BTLeft.setAttribute("href",scope.Pages[scope.LeftNDX]);
        // scope.BTRight.setAttribute("href",scope.Pages[scope.RightNDX]);
        window.location.replace(scope.Url + scope.Pages[scope.NDX])
    }

    HomeClick(){
        let scope = this;
        return () => { 
            scope.NDX = 0;
            scope.UpdatePage();
        };
    }

    LeftClick(){
        let scope = this;
        return () => { 
            if(scope.NDX-1 < 0){
                scope.NDX = 0;
            }else{
                scope.NDX -= 1;
            }
            scope.UpdatePage();
        };
    }

    RightClick(){
        let scope = this;
        return () => { 

            if(scope.NDX+1 > scope.Pages.length -1){
                scope.NDX = scope.Pages.length -1;
            }else{
                
                scope.NDX += 1;
            }
            scope.UpdatePage();

        };
    }
} 
window.addEventListener("DOMContentLoaded",()=>{

    let main = new Main();
    main.Build();

});