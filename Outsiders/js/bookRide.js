
$( document ).ready(function() {

$(init);

function init() {
  $.ajax({
    type: "POST",
    url: "bookRide.php",
    dataType:"json",
    success: function(response) {
      //console.log(response);
      //console.log(response);

      var tempList = '';
      var dataClick = [];
      var image=[];

      var d = new Date();
      for (i = 0; i < response.length; i++) {
        if(response[i].carType === "Basic Car"){
          image.push("images/basic.jpg")
          }
          else if(response[i].carType === "Premium Car"){
            image.push("images/premium.jpg")
          }
          else if(response[i].carType === "Luxury Car"){
            image.push("images/luxury.jpg")
          }
          else{
            image.push("images/basic.jpg")
          }
      }

      for (i = 0; i < response.length; i++) {  
        console.log(response[i]);

        var d1 = new Date(response[i].journeyDate);

        if((d.getDate()<=d1.getDate()) && response[i].availableSeats>0){
        dataClick.push(response[i].id);

       
        tempList +=  '<div class="card col-md-3" >'+ '<img class="card-img-top" src="'+image[i]+'"  alt="Card image cap">'+
        '<div class="card-body">'+
          '<h5 class="card-title">'+response[i].carType+'</h5>'+
          '<p class="card-text">'+'<b>From: </b>'+response[i].from+'</p>'+
          '<p class="card-text">'+'<b>To: </b>'+response[i].to+'</p>'+
          '<p class="card-text">'+'<b>Departure Time: </b>'+response[i].departureTime+'</p>'+
          '<p class="card-text">'+'<b>Arrival Time: </b>'+response[i].arrivalTime+'</p>'+
          '<p class="card-text">'+'<b>Journey Date: </b>'+response[i].journeyDate+'</p>'+
          '</div>'+
          '<a href = "confirmBooking.html?carId='+response[i].rideID+'" id = "bookACar" value="'+response[i].rideID+'" class="btn btn-info">'+"Book"+'</a>'+
        '</div>' + '</div>';
        }
        //tempList += '<option value="' + data[i].id + '" name="' + data[i].name +'">' + data[i].name + '</option>';            
    }
    $("#getRideDetails").html(tempList);
    //window.localStorage.setItem('Book', JSON.stringify(response));

    }
});
}


    //window.localStorage.setItem('Book', JSON.stringify(data));

    // var d = new Date();
    // var strDate = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear();
    // console.log(data)
    // console.log(strDate <= data[0].journeyDate)

    // var tempList = '';
    // var dataClick = [];

    // for (i = 0; i < data.length; i++) {  
    //     if(strDate <= data[i].journeyDate){
    //         dataClick.push(data[i].id);
    //     tempList +=  '<div class="card col-md-3" >'+ '<img class="card-img-top" src="'+data[i].image+'"  alt="Card image cap">'+
    //     '<div class="card-body">'+
    //       '<h5 class="card-title">'+data[i].carType+'</h5>'+
    //       '<p class="card-text">'+'<b>From: </b>'+data[i].from+'</p>'+
    //       '<p class="card-text">'+'<b>To: </b>'+data[i].to+'</p>'+
    //       '<p class="card-text">'+'<b>Departure Time:: </b>'+data[i].Departure+'</p>'+
    //       '<p class="card-text">'+'<b>Arrival Time: </b>'+data[i].Arrival+'</p>'+
    //       '<p class="card-text">'+'<b>Journey Date: </b>'+data[i].journeyDate+'</p>'+
    //       '</div>'+
    //       '<a href = "confirmBooking.html?carId='+data[i].id+'" id = "bookACar" value="'+data[i].id+'" class="btn btn-primary">'+"Book"+'</a>'+
    //     '</div>' + '</div>';
    //     }
    //     //tempList += '<option value="' + data[i].id + '" name="' + data[i].name +'">' + data[i].name + '</option>';            
    // }
    // $("#getRideDetails").html(tempList);

    // console.log($('#bookACar').attr("value"))
    // $( "#bookACar").click(function() {
    //     var value = $("#bookACar").attr("value")
    //     console.log(value);
    //     alert(value);
    //     // window.localStorage.setItem('Book', value);
    //     // window.location.href = 'confirmBooking.html?value=';
    //   });

    $('button').click(
          function(){
                
    });
});

$(window).on( "load", function() {

});