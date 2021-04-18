function validate_form(formname, name, mobile, email, city, carowned, course, comment) {

    if( formname == "sticky-form" )
    {
        var fieldID="_sticky_form";
    }
    else if( formname == "top-form" )
    {
        var fieldID="_top_form";
    }
    else if( formname == "pricing-form" )
    {
        var fieldID="_pricing_form";
    }
    else if( formname == "download-form" )
    {
        var fieldID="_download_form";
    }
    else if( formname == "query-form" )
    {
        var fieldID="_query_form";
    }
    else if( formname == "enquire-form" )
    {
        var fieldID="_enquire_form";
    }
    else if( formname == "contact-form" )
    {
        var fieldID="_contact_form";
    }
    else if( formname == "quote-form" )
    {
        var fieldID="_quote_form";
    }
    else if( formname == "admission-form" )
    {
        var fieldID="_admission_form";
    }
    
        
    var name=$('#name'+fieldID).val();
    var mobile=$('#mobile'+fieldID).val();
    var email=$('#email'+fieldID).val();
    var city=$('#city'+fieldID).val();   
    var course=$('#course'+fieldID).val();  
    //var carowned=$('#carowned'+fieldID).val();  
	
	var reg_email = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	var reg_name= /^[A-Za-z\s]+$/;
	var reg_number= /^\d{10}$/;
    
	if(name.trim()=="" || name==null)
	{
        $('#error_name'+fieldID).html('Please Enter Your Name');
		$('#name'+fieldID).focus();        
		return false;
	}     
    else
    {
		$('#error_name'+fieldID).html(' ');
	}
	if(reg_name.test(name)==false)
	{
        $('#error_name'+fieldID).html('Please Enter Valid Name');
		$('#name'+fieldID).focus();        
		return false;
	}
    else
    {
		$('#error_name'+fieldID).html(' ');
	}
    

    
	if(mobile.trim()=="" || mobile==null)
	{
        $('#error_mobile'+fieldID).html('Please Enter Your Mobile');
		$('#mobile'+fieldID).focus();        
		return false;
	}     
    else
    {
		$('#error_mobile'+fieldID).html(' ');
	}
	if(reg_number.test(mobile)==false)
	{
        $('#error_mobile'+fieldID).html('Please Enter Valid Mobile');
		$('#mobile'+fieldID).focus();        
		return false;
	}
    else
    {
		$('#error_mobile'+fieldID).html(' ');
	}
    
    
    
	if(email.trim()=="" || email==null)
	{
        $('#error_email'+fieldID).html('Please Enter Your Email');
		$('#email'+fieldID).focus();        
		return false;
	}     
    else
    {
		$('#error_email'+fieldID).html(' ');
	}
	if(reg_email.test(email)==false)
	{
        $('#error_email'+fieldID).html('Please Enter Valid Email');
		$('#email'+fieldID).focus();        
		return false;
	}
    else
    {
		$('#error_email'+fieldID).html(' ');
	}
    
    
    
	if(city.trim()=="" || city==null)
	{
        $('#error_city'+fieldID).html('Please Enter Your City');
		$('#city'+fieldID).focus();        
		return false;
	}     
    else
    {
		$('#error_city'+fieldID).html(' ');
	}
	if(reg_name.test(city)==false)
	{
        $('#error_city'+fieldID).html('Please Enter Valid City');
		$('#city'+fieldID).focus();        
		return false;
	}
    else
    {
		$('#error_city'+fieldID).html(' ');
	}   
    
    
    
/*	if(carowned.trim()=="" || carowned==null)
	{
        $('#error_carowned'+fieldID).html('Please Enter Your Owned Car');
		$('#carowned'+fieldID).focus();        
		return false;
	}     
    else
    {
		$('#error_carowned'+fieldID).html(' ');
	}*/
  
    
    
    
    if(course==0 || course == null)
    {
        $('#error_course'+fieldID).html('Please Select Specialization');
		$('#course'+fieldID).focus();        
		return false;
    }
    else{
        $('#error_course'+fieldID).html(' ');
    }

}













