$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
$("button").click(function(){
// $(".output").text("");
    let nums=$("input").val();
    let nums_array = nums.split('');
    console.log(nums_array);

        let sum = 0;
        nums_array.forEach(function(element){
            sum += element;
        });

    $('.output').append(nums + "=" + sum);
    let 

});
});

