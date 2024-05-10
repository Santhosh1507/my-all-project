let notshowarray =[];

let products =[
    {
        id:1,
        name : "Motorola G34 5G",
        src: "./image/image16.png"
    },
    {
        id:2,
        name : "SAMSUNG Galaxy F04",
        src: "./image/image15.png"
    },
    {
        id:3,
        name : "Apple iPhone 15",
        src: "./image/image14.png"
    },
    {
        id:4,
        name : "REDMI 12",
        src: "./image/image13.png"
    },
    {
        id:5,
        name : "BLUETOOTH HEADSET",
        src: "./image/image12.png"
    },
    {
        id:6,
        name : "ROXIN AIRODS",
        src: "./image/image11.png"
    },
    {
        id:7,
        name : "ROKAVO BLUETOOTH",
        src: "./image/image10.png"
    },
    {
        id:8,
        name : "APPLE AIRPODS",
        src: "./image/image9.png"
    },
    {
        id:9,
        name : "Noise Watch",
        src: "./image/image8.png"
    },
    {
        id:10,
        name : "Fastrack Watch",
        src: "./image/image7.png"
    },
    {
        id:11,
        name : "Revoltt Watch",
        src: "./image/image6.png"
    },
    {
        id:12,
        name : "Crown Watch",
        src: "./image/image5.png"
    },
    {
        id:13,
        name : "Watch Trackfly",
        src: "./image/image4.png"
    },
    {
        id:14,
        name : "Watch Sonata",
        src: "./image/image3.png"
    },
    {
        id:15,
        name : "Alley solly Watch",
        src: "./image/image2.png"
    },
    {
        id:16,
        name : "Fogg Watch",
        src: "./image/image1.png"
    }
];


showshopcard(products);

function showshopcard(curarra){
    document.getElementById("card").innerText = "";
    for(var i=0;i<curarra.length;i++){
        document.getElementById("card").innerHTML += `
            <div class="showcards">
 
           <img src="${curarra[i].src}" class="cardimagesrc"/>
           <h4 class="cardtitlename">${curarra[i].name}</h4>
           <button class="showbtn">Details</button>
        
           </div>
        `
    }
 
 }

 document.getElementById("cardname").addEventListener("keyup",function(){
    let text = document.getElementById("cardname").value;

    notshowarray= products.filter(function(a){
        if(a.name.includes(text)){
            return a.name;
           }

   });
   if(this.value==""){
        showshopcard(products);
   }
   else{
       if(notshowarray == ""){
           document.getElementById("para").style.display = 'block';
           document.getElementById("card").innerHTML = ""; 
       }
       else{

           showshopcard(notshowarray);
           document.getElementById("para").style.display = 'none';
       }
   }

});
