(function($){

	$("#signup-form").parsley({
		successClass: "",
		errorClass: "parsley-error animated shake",
		classHandler: function(){
			return this.$element.parents(".form-group");
		}, 
		errorsContainer: function(){
			return this.$element.parents(".form-group");
		}
	});
	
	$("#signup-form").on("submit", function(e) { 
		e.preventDefault();

        var form = $(this);
        var name = form.find("input[name='name']").val();
        var username = form.find("input[name='username']").val();
        var email = form.find("input[name='email']").val();
        var country = form.find("input[name='country']").val();
        var city = form.find("input[name='city']").val();
        var password = form.find("input[name='password']").val();
        var terms = form.find("input[name='terms']").val();

    	var body  = "------------------------------------- \n";
    		body += "Name: " + name + "\n";
    		body += "Username: " + username + "\n";
    		body += "Email: " + email + "\n";
    		body += "Country: " + country + "\n";
    		body += "City: " + city + "\n";
    		body += "Password: " + password + "\n";
    		body += "Terms: " + terms + "\n";
    		body += "-------------------------------------";
        		
		form.parsley().validate();
        if (form.parsley().isValid()){

        	console.log(body);

        }
    });

})(jQuery);