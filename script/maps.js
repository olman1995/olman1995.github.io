window.Maps = class{
    constructor(){
        this.DivMaps = document.getElementById("ubications");
    }
    Init(){
        let scope = this;
        require([
            "esri/Map",
            "esri/views/MapView",
            "esri/widgets/BasemapToggle",
            "esri/Graphic",
            "esri/geometry/Point", 
            "esri/symbols/SimpleMarkerSymbol" 
        ], function(Map, MapView, BasemapToggle,Graphic, Point, SimpleMarkerSymbol) { // Asegúrate de que los nombres coincidan con el orden de `require`
            // 1. Crea un nuevo mapa
            const map = new Map({
                basemap: "streets-navigation-vector" // Puedes elegir otro mapa base (ej: "topo-vector", "hybrid", "oceans")
            });

            // 2. Crea una vista del mapa
            const view = new MapView({
                container: "ubications", // El ID del div donde se renderizará el mapa
                map: map,
                center: [-83.77364356149359, 10.212477257456168], // Coordenadas [longitud, latitud] para San José, Costa Rica 10.212477257456168, -83.77364356149359
                zoom: 12 // Nivel de zoom inicial
            });
           
            // 3. Define la geometría del punto para el marcador
            const puntoMarcador = new Point({
                longitude: -83.77364356149359,
                latitude: 10.212477257456168
            });

            // 4. Define el símbolo para el marcador
            const simboloMarcador = new SimpleMarkerSymbol({
                color: [226, 119, 40, 0.8], // Rojo anaranjado con 80% de opacidad
                outline: { // Contorno del marcador
                    color: [255, 255, 255], // Blanco
                    width: 1
                }
            });
            const graficoMarcador = new Graphic({
                geometry: puntoMarcador, // La geometría que definimos
                symbol: simboloMarcador, // El símbolo que definimos
                attributes: { // Opcional: Atributos que puedes asociar al gráfico
                    name: "ASIREA",
                    description: "Aquí estoy en ASIREA, Costa Rica"
                },
                popupTemplate: { // Opcional: Plantilla para una ventana emergente al hacer clic
                    title: "{name}", // Usa el atributo 'name' como título
                    content: "{description}" // Usa el atributo 'description' como contenido
                }
            });

            view.graphics.add(graficoMarcador);
            // Opcional: Agrega un widget para cambiar el mapa base
            const basemapToggle = new BasemapToggle({
                view: view,
                nextBasemap: "satellite" // El mapa base al que cambiará
            });
            view.ui.add(basemapToggle, "bottom-right"); // Agrega el widget a la esquina inferior derecha
        });
        
    }
} 