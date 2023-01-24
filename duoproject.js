var cars = [

    {
        model:"fiat",
        img:"./images/fiat.png",
        models : [{
            model:"punto",
            img:"./images/punto.jpg",
            price: 46000
            
        },
         {
            model:"500",
            img:"./images/500.png",
            price: 53500
        }]
    },{
        model:"kia",
        img:"./images/kia.png",
        models : [{
            model:"sportage",
            img:"./images/sportage.jpg",
            price: 80000
        },
         {
            model:"seltos",
            img:"./images/seltos.jpg",
            price: 65000
        }]
    },{
        model:"peugeot",
        img:"./images/peugeot.png",
        models : [{
            model:"landtrek",
            img:"./images/peugeot_landtrek-double-cabine (1).jpg",
            price: 65000
        },
         {
            model:"3008",
            img:"./images/peugeot (2).jpg",
            price: 73100
        }]
    },{
        model:"renault",
        img:"./images/renault.png",
        models : [{
            model:"capture",
            img:"./images/renault-captur (1).jpg",
            price: 95500
        },
         {
            model:"clio",
            img:"./images/renault1 (1).jpg",
            price: 88000
        }]
    },{
        model:"hyundai",
        img:"./images/hyundai.png",
        models : [{
            model:"i20",
            img:"./images/hyundai1 (1).png",
            price: 66000
        },
         {
            model:"santafe",
            img:"./images/hyundai2 (1).png",
            price: 78500
        }]
    },{
        model:"toyota",
        img:"./images/toyota.png",
        models :[ {
            model:"yaris",
            img:"./images/toyota3 (1).jpg",
            price: 58000
        },{
            model:"chr",
            img:"./images/toyota1 (1).jpg",
            price: 71500
        }]
    },{
        model:"seat",
        img:"./images/seat.png",
        models : [{
            model:"ibiza",
            img:"./images/seatibiza.png",
            price: 46000
        },
         {
            model:"leon",
            img:"./images/seatleon.jpg",
            price: 45000
        }]
    },{
        model:"volkwagen",
        img:"./images/volkswagen.png",
        models : [{
            model:"golf",
            img:"./images/golf8.jpg",
            price: 76000
        },
         {
            model:"polo",
            img:"./images/polo7.jpg",
            price: 84000
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
        
        var e = cars[i];
        $("div").empty()

        
        each(e.models ,function (k){
            $("#container").append('<img class="aa" src="'+k.img+'"/>'+k.price+'   DT')
        })

    }
   each(cars,function(e,i){
    $("#container").append('<img   class="aa" src="'+e.img+'" id="img'+i+'" onclick="myfunc('+i+')">')
    })


    $("#btn1").on("click",function(e){
       

      
      var x =   filter (cars,function(e){
          return   $("#inpt").val()===e.model 
            
         })
         
         $("div").empty()

         each(x,function(e){
            each(e.models ,function (k){
                $("#container").append('<img class="aa" src="'+k.img+'"/>'+k.price+'  DT')
            })
           
            })
            each(cars,function(e){
                each(e.models ,function (k){
                    if(k.model===$("#inpt").val())
                    {$("#container").append('<img class="aa" src="'+k.img+'"/>'+k.price+'  DT')}
                })
               
                })   
      
    })



 
 

