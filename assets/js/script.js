$("button").on("click",function(){
    var  itemid = $(this).attr("id");   
    var id = itemid.split("-")[0]; 
    var userdata = $("#" +id+"-input").val();
    localStorage.setItem(id, userdata)  
    console.log(itemid,id,userdata);
    })
    
        for (var i = 9; i < 18; i++) {
            $("#"+i+"-input").val(localStorage.getItem(i))  
            var currentTime = moment().hours()
            if ( i < currentTime) {
                $("#"+i+"-row").addClass("past")
            }
            else if (i === currentTime) {
                $("#"+i+"-row").addClass("present")
                $("#"+i+"-row").removeClass("past")
            }
            else {
                $("#"+i+"-row").addClass("future") 
                $("#"+i+"-row").removeClass("present") 
                $("#"+i+"-row").removeClass("past")
            }

    
        }
    
    $("#currentDay").text(moment().format('MMMM Do YYYY')); 
    
    