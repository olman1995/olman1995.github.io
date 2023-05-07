window.Main = class{
    constructor(){
        this.Main = document.getElementById("main");
        this.Colors =  ["color1","color2","color3"];
        this.ColorIndex = 0;
        this.NColors = this.Colors.length;
    }
    Build(){
        let scope = this;

        scope.ChangeColor();
        scope.ChangeColor();
    }

    ChangeColor(){
        let scope = this;

        scope.Main.classList.remove(scope.Colors[scope.ColorIndex]);
        scope.ColorIndex += 1;
        if(scope.ColorIndex>= scope.NColors){
            scope.ColorIndex = 0;
        }
        scope.Main.classList.add(scope.Colors[scope.ColorIndex]);

    }


}


document.addEventListener("DOMContentLoaded", () => {
    let main = new window.Main();
    main.Build();
  
});