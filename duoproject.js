var cars = [

    {
        model:"fiat",
        img:"./images/fiat.png",
        models : [{
            model:"punto",
            img:"./images/punto.jpg"
        },
         {
            model:"500",
            img:"./images/500.jpg"
        }]
    },{
        model:"kia",
        img:"./images/kia.jpg",
        models : [{
            model:"sportage",
            img:"./images/sportage.jpg"
        },
         {
            model:"seltos",
            img:"./images/seltos.jpg"
        }]
    },{
        model:"peugeot",
        img:"./images/peugeot.png",
        models : [{
            model:"landtrek",
            img:"./images/peugeot_landtrek-double-cabine (1).jpg"
        },
         {
            model:"3008",
            img:"./images/peugeot (2).jpg"
        }]
    },{
        model:"renault",
        img:"./images/renault.png",
        models : [{
            model:"capture",
            img:"./images/renault-captur (1).jpg"
        },
         {
            model:"clio",
            img:"./images/renault1 (1).jpg"
        }]
    },{
        model:"hyundai",
        img:"./images/hyundai.png",
        models : [{
            model:"i20",
            img:"./images/hyundai1 (1).png"
        },
         {
            model:"santafe",
            img:"./images/hyundai2 (1).png"
        }]
    },{
        model:"toyota",
        img:"./images/toyota.png",
        models :[ {
            model:"yaris",
            img:"./images/toyota3 (1).jpg"
        },{
            model:"chr",
            img:"./images/toyota1 (1).jpg"
        }]
    },{
        model:"seat",
        img:"./images/seat.png",
        models : [{
            model:"ibiza",
            img:"./images/seatibiza (1).png"
        },
         {
            model:"leon",
            img:"./images/seatleon (1).jpg"
        }]
    },{
        model:"volkwagen",
        img:"./images/volkswagen.png",
        models : [{
            model:"golf",
            img:"./images/golf8.jpg"
        },
         {
            model:"polo",
            img:"./images/polo7.jpg"
        }]
    }
    
    ];
    
    var each = function (coll,func){
        if (Array.isArray(coll)){
            for (var i =0;i<coll.length;i++){
            func(coll[i],i)
        }
        }
        else {
            for (var key in coll){
                func(coll[key],key)
            }
        }
    }
    
    var filter = function(array,predicate){
    var acc = [];
    each(array,function(e,i){
        if (predicate(e,i)){
            acc.push(e)
        }
    })
    return acc;
    }
    
    function myfunc(i)
    {
      
        
    }
   each(cars,function(e,i){
    $("body").append('<div class="aa"><img src="'+e.img+'" id="img'+i+'" onclick="myfunc('+i+')"></div>')
    })


    $("#btn1").on("click",function(e){
       

      
      var x =   filter (cars,function(e){
          return   $("#inpt").val()===e.model 
            
         })
         
         $("div").empty()

         each(x,function(e){
            each(e.models ,function (k){
                $("body").append('<div class="aa"><img src="'+k.img+'"/></div>')
            })
           
            })
            each(cars,function(e){
                each(e.models ,function (k){
                    if(k.model===$("#inpt").val())
                    {$("body").append('<div class="aa"><img src="'+k.img+'"/></div>')}
                })
               
                })   
      
    })



    //$("div").on("click",function(e){
     //   if (e.target.children()===)
        
     //   $("div").empty()

     //   each(e.models ,function (k){
     //       $("body").append('<div class="aa"><img src="'+k.img+'"/></div>')
      //  })
    //})
    $(document).on("click",function(e){
        
        if(e.target.tagName==="IMG"){
            
          
            

          
    }

        if(e.target.tagName==="DIV"){
            // var p="#img"+e.target.id
            console.log($(e.target).children()[0])
            // $(p).show()
            $($(e.target).children()[0]).show("slow")
        }
    
    }) 

    


        


    function map(array, f) { 
        var acc = []; 
        each(array, function(element, i) { 
              acc.push(f(element, i)); 
        }); 
        return acc; 
  }

 
 

