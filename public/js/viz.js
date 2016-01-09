$('#mydropdown').change(function(){
    var category= $('#mydropdown').val();
    console.log(category);
    console.log("I donno why");
    display(category);
  });




function display(category){
	if (category == "category1") {
	$('form#title').hide();	
	$('form#textbox').show();
	$('form#image').show();
	$('form#songlist').hide();
}

else if (category == "worship"){
	$('form#title').hide();	
	$('form#textbox').show();
	$('form#image').hide();
	$('form#songlist').show();

}

else if (category == "etc"){
	$('form#title').show();
	$('form#textbox').show();
	$('form#image').show();
	$('form#songlist').hide();
}

else{
	$('form#title').hide();	
	$('form#textbox').hide();
	$('form#image').hide();
	$('form#songlist').hide();
}
}

