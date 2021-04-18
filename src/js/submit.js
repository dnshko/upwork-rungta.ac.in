

 $(document).ready(function(){

        var urlname = encodeURI(document.getElementById("url_name").value);
        var actual_link = encodeURI(document.getElementById("actual_link").value);
        var lp_name = encodeURI(document.getElementById("lp_name").value);
        

        $("#submit_sticky_form").click(function(){
            
            var formtitle = " ";
            var formname = encodeURI(document.getElementById("formname_sticky_form").value);
            var name = encodeURI(document.getElementById("name_sticky_form").value);
            var mobile = encodeURI(document.getElementById("mobile_sticky_form").value);
            var email = encodeURI(document.getElementById("email_sticky_form").value);
            var city = encodeURI(document.getElementById("city_sticky_form").value);
            var carowned =  "";
            //var course =  "";
            var course =  encodeURI(document.getElementById("course_sticky_form").value);
            var comment = " ";
            
            var form_valid = validate_form(formname, name, mobile, email, city, carowned, course, comment);
            
            if(form_valid !== false) 
            {
                $('#loader').css('display', 'block');

                //save_azure_db(actual_link, lp_name, urlname, formtitle, formname, name, mobile, email, city, carowned, course, comment) ;
                send_mail_client(urlname, formtitle, formname, name, mobile, email, city, carowned, course, comment);

                window.setTimeout(function() {
                  window.location.href = "thankyou.php";
                }, 2000);

            }
            else
                {
                    return false;
                }
        });
        
        $("#submit_top_form").click(function(){
            
            var formtitle = " ";
            var formname = encodeURI(document.getElementById("formname_top_form").value);
            var name = encodeURI(document.getElementById("name_top_form").value);
            var mobile = encodeURI(document.getElementById("mobile_top_form").value);
            var email = encodeURI(document.getElementById("email_top_form").value);
            var city = encodeURI(document.getElementById("city_top_form").value);
            var carowned = "";
            //var course =  "";
            var course = encodeURI(document.getElementById("course_top_form").value);
            var comment = " ";
            
            var form_valid = validate_form(formname, name, mobile, email, city, carowned, course, comment);
            
            if(form_valid !== false) 
            {
                $('#loader').css('display', 'block');
                
                //save_azure_db(actual_link, lp_name, urlname, formtitle, formname, name, mobile, email, city, carowned, course, comment) ;
                send_mail_client(urlname, formtitle, formname, name, mobile, email, city, carowned, course, comment);

                window.setTimeout(function() {
                  window.location.href = "thankyou.php";
                }, 2000);
            }
            else
                {
                    return false;
                }
        });
     
        $("#submit_enquire_form").click(function(){
            
            var formtitle = " ";
            var formname = encodeURI(document.getElementById("formname_enquire_form").value);
            var name = encodeURI(document.getElementById("name_enquire_form").value);
            var mobile = encodeURI(document.getElementById("mobile_enquire_form").value);
            var email = encodeURI(document.getElementById("email_enquire_form").value);
            var city = encodeURI(document.getElementById("city_enquire_form").value);
            var carowned = "";
            //var course =  "";
            var course =  encodeURI(document.getElementById("course_enquire_form").value);
            var comment = " ";
            
            var form_valid = validate_form(formname, name, mobile, email, city, carowned, course, comment);
            
            if(form_valid !== false) 
            {
                $('#loader').css('display', 'block');   
                
                //save_azure_db(actual_link, lp_name, urlname, formtitle, formname, name, mobile, email, city, carowned, course, comment) ;      
                send_mail_client(urlname, formtitle, formname, name, mobile, email, city, carowned, course, comment);

                window.setTimeout(function() {
                  window.location.href = "thankyou.php";
                }, 3000);

            }
            else
                {
                    return false;
                }
        });
     
        $("#submit_contact_form").click(function(){
            
            var formtitle = " ";
            var formname = encodeURI(document.getElementById("formname_contact_form").value);
            var name = encodeURI(document.getElementById("name_contact_form").value);
            var mobile = encodeURI(document.getElementById("mobile_contact_form").value);
            var email = encodeURI(document.getElementById("email_contact_form").value);
            var city = encodeURI(document.getElementById("city_contact_form").value);
            var carowned = "";
            //var course =  "";
            var course =  encodeURI(document.getElementById("course_contact_form").value);
            var comment = " ";
            
            var form_valid = validate_form(formname, name, mobile, email, city, carowned, course, comment);
            
            if(form_valid !== false) 
            {
                $('#loader').css('display', 'block');   
                
                //save_azure_db(actual_link, lp_name, urlname, formtitle, formname, name, mobile, email, city, carowned, course, comment) ;      
                send_mail_client(urlname, formtitle, formname, name, mobile, email, city, carowned, course, comment);

                window.setTimeout(function() {
                  window.location.href = "thankyou.php";
                }, 3000);

            }
            else
                {
                    return false;
                }
        });
     
        $("#submit_quote_form").click(function(){
            
            var formtitle = " ";
            var formname = encodeURI(document.getElementById("formname_quote_form").value);
            var name = encodeURI(document.getElementById("name_quote_form").value);
            var mobile = encodeURI(document.getElementById("mobile_quote_form").value);
            var email = encodeURI(document.getElementById("email_quote_form").value);
            var city = encodeURI(document.getElementById("city_quote_form").value);
            var carowned = "";
            //var course =  "";
            var course =  encodeURI(document.getElementById("course_quote_form").value);
            var comment = " ";
            
            var form_valid = validate_form(formname, name, mobile, email, city, carowned, course, comment);
            
            if(form_valid !== false) 
            {
                $('#loader').css('display', 'block');   
                
                //save_azure_db(actual_link, lp_name, urlname, formtitle, formname, name, mobile, email, city, carowned, course, comment) ;      
                send_mail_client(urlname, formtitle, formname, name, mobile, email, city, carowned, course, comment);

                window.setTimeout(function() {
                  window.location.href = "thankyou.php";
                }, 3000);

            }
            else
                {
                    return false;
                }
        });
     
        $("#submit_download_form").click(function(){
            
            var formtitle = encodeURI(document.getElementById("formtitle_download_form").value);
            var formname = encodeURI(document.getElementById("formname_download_form").value);
            var name = encodeURI(document.getElementById("name_download_form").value);
            var mobile = encodeURI(document.getElementById("mobile_download_form").value);
            var email = encodeURI(document.getElementById("email_download_form").value);
            var city = encodeURI(document.getElementById("city_download_form").value);
            var carowned = "";
            //var course =  "";
            var course =  encodeURI(document.getElementById("course_download_form").value);
            var comment = " ";
            
            var form_valid = validate_form(formname, name, mobile, email, city, carowned, course, comment);
            
            if(form_valid !== false) 
            {
                $('#loader').css('display', 'block');
                
                //save_azure_db(actual_link, lp_name, urlname, formtitle, formname, name, mobile, email, city, carowned, course, comment) ;
                send_mail_client(urlname, formtitle, formname, name, mobile, email, city, carowned, course, comment);

                window.setTimeout(function() {
                  window.location.href = "thankyou.php?formname="+formtitle;
                }, 3000);

            }
            else
                {
                    return false;
                }
        });
     
        $("#submit_query_form").click(function(){
                
            var formtitle = "";
            var formname = encodeURI(document.getElementById("formname_query_form").value);
            var name = encodeURI(document.getElementById("name_query_form").value);
            var mobile = encodeURI(document.getElementById("mobile_query_form").value);
            var email = encodeURI(document.getElementById("email_query_form").value);
            var city = encodeURI(document.getElementById("city_query_form").value);
            var carowned = "";
            //var course =  "";
            var course =  encodeURI(document.getElementById("course_query_form").value);
            var comment = encodeURI(document.getElementById("comment_query_form").value);
            
            var form_valid = validate_form(formname, name, mobile, email, city, carowned, course, comment);
            
            if(form_valid !== false) 
            {
                $('#loader').css('display', 'block');
                
                //save_azure_db(actual_link, lp_name, urlname, formtitle, formname, name, mobile, email, city, carowned, course, comment) ;
                send_mail_client(urlname, formtitle, formname, name, mobile, email, city, carowned, course, comment);

                window.setTimeout(function() {
                  window.location.href = "thankyou.php";
                }, 3000);

            }
            else
                {
                    return false;
                }
        }); 

        $("#submit_admission_form").click(function(){
            
            var formtitle = " ";
            var formname = encodeURI(document.getElementById("formname_admission_form").value);
            var name = encodeURI(document.getElementById("name_admission_form").value);
            var mobile = encodeURI(document.getElementById("mobile_admission_form").value);
            var email = encodeURI(document.getElementById("email_admission_form").value);
            var city = encodeURI(document.getElementById("city_admission_form").value);
            var carowned =  "";
            //var course =  "";
            var course =  encodeURI(document.getElementById("course_admission_form").value);
            var comment = " ";
            
            var form_valid = validate_form(formname, name, mobile, email, city, carowned, course, comment);
            
            if(form_valid !== false) 
            {
                $('#loader').css('display', 'block');

                //save_azure_db(actual_link, lp_name, urlname, formtitle, formname, name, mobile, email, city, carowned, course, comment) ;
                send_mail_client(urlname, formtitle, formname, name, mobile, email, city, carowned, course, comment);

                window.setTimeout(function() {
                  window.location.href = "thankyou.php";
                }, 2000);

            }
            else
                {
                    return false;
                }
        });
            
     
  });    
  

      function save_azure_db(actual_link, lp_name, urlname, formtitle, formname, name, mobile, email, city, carowned, course, comment) 
	  {
            
		var hashes = window.location.href;
		var campaignid = "";
		var adgroup = "";
		var matchtype = "";
		var device = "";
		var creative = "";
		var utm_source = "";
		var utm_medium = "";
		var utm_campaign = "";
		var keyword = "";
			if (hashes.indexOf('?') > -1) {
				var parametersvalues = hashes.split('?')[1];
				if (parametersvalues.indexOf('&') > -1) {
					var allPaarparametersvalues = parametersvalues.split('&');
					for (var y = 0; y < allPaarparametersvalues.length; y++) 
					{
						if (allPaarparametersvalues[y].indexOf('campaigns') > -1) 
						{
							campaignid = allPaarparametersvalues[y].split('=')[1];
						
						}
						if (allPaarparametersvalues[y].indexOf('adgroup') > -1) {
							adgroup = allPaarparametersvalues[y].split('=')[1];
							
						}
						if (allPaarparametersvalues[y].indexOf('matchtype') > -1) {
							matchtype = allPaarparametersvalues[y].split('=')[1];
							
						}
						if (allPaarparametersvalues[y].indexOf('keyword') > -1) {
							keyword = allPaarparametersvalues[y].split('=')[1];
							
						}
						if (allPaarparametersvalues[y].indexOf('device') > -1) {
							device = allPaarparametersvalues[y].split('=')[1];
						
						}
						if (allPaarparametersvalues[y].indexOf('creative') > -1) {
							creative = allPaarparametersvalues[y].split('=')[1];
							
						}
						if (allPaarparametersvalues[y].indexOf('utm_source') > -1) {
							if (allPaarparametersvalues[y].indexOf('=') > -1) {
								utm_source = allPaarparametersvalues[y].split('=')[1];
							
							} 
						}
						if (allPaarparametersvalues[y].indexOf('utm_medium') > -1) {
							if (allPaarparametersvalues[y].indexOf('=') > -1) {
								utm_medium = allPaarparametersvalues[y].split('=')[1];
							
							} 
						}
						if (allPaarparametersvalues[y].indexOf('utm_campaign') > -1) {
							if (allPaarparametersvalues[y].indexOf('=') > -1) {
								utm_campaign = allPaarparametersvalues[y].split('=')[1];
								
							} 
						}
					}
				}
			}
		


			/*var name_ = $('#name_sticky_form').val();
			var mobile_ = $('#mobile_sticky_form').val();
			var email_ = $('#email_sticky_form').val();
			var city_ = $('#city_sticky_form').val();
			var admission_ = $('#admission_sticky_form option:selected').text();*/
			var createdDat = new Date();
			var yrs = createdDat.getFullYear();
			var TodayDate = createdDat.getDate();
			var months = createdDat.getMonth() + 1;
			var cdate = months + "/" + TodayDate + "/" + yrs;
			var hrs = createdDat.getHours();
			var min = createdDat.getMinutes();
			var sec = createdDat.getSeconds();
			var created_Dates = cdate + " " + hrs + ":" + min + ":" + sec;

			var Saveitem = JSON.stringify({
				'Name': name,
				'MobileNo': mobile,
				'EmailId': email,
				'City': city,
				'Specialization': course,
				'Created_Date': created_Dates,
				'DataFrom': urlname+' | '+formname,
				'Account_Name': '9dddaac2-0cc1-46c4-9b7a-b12b95703ea8',
				'campaign': campaignid,
				'adgroup': adgroup,
				'matchtype': matchtype,
				'device': device,
				'creative': creative,
				'utm_source': utm_source,
				'utm_medium': utm_medium,
				'utm_campaign': utm_campaign,
				'keyword':keyword
			});
			var urls = "https://e2ewebservice20190528111726.azurewebsites.net/e2e/data/savedata";

			$.ajax({
				url: urls,
				method: "POST",
				contentType: "application/json;odata=verbose",
				data: Saveitem,
				async: false,
				headers: {
					"Accept": "application/json;odata=verbose"
				},
				success: function(data) {
					//alert("Successfully Submitted" + data);
				},
				error: function(data) {
					//alert("failed:" + data);
				}
			});
			
}

    function send_mail_client(urlname, formtitle, formname, name, mobile, email, city, carowned, course, comment) {

      $.ajax({
            type: "POST",
            url: "../src/send_mail_client.php",
            data: {urlname: urlname, formtitle: formtitle, formname: formname, name: name, mobile: mobile, email: email, city: city, carowned: carowned, course:course, comment: comment},
            datatype: "html",
            success: function(result){
                //alert(result); 
            }
        });

}