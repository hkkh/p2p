$(document).ready(function() {

	$("#login-form").validate({
		errorElement : 'span',
		errorClass : 'help-block',

		rules : {
			firstname : {
				required : true,
				minlength : 4
			},
			password : {
				required : true,
				minlength : 6
			}
		},
		messages : {
			firstname : {
					required : "请输入姓名",
					minlength : jQuery.format("姓名不能小于{0}个字符")
			},
			password : {
				required : "请输入密码",
				minlength : jQuery.format("密码不能小于{0}个字符")
			}
		},
		errorPlacement : function(error, element) {
			element.next().remove();
			element.after('<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
			element.closest('.form-group').append(error);
		},
		highlight : function(element) {
			$(element).closest('.form-group').addClass('has-error has-feedback');
		},
		success : function(label) {
			var el=label.closest('.form-group').find("input");
			el.next().remove();
			el.after('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');
			label.closest('.form-group').removeClass('has-error').addClass("has-feedback has-success");
			label.remove();
		},
		submitHandler: function(form) {
			var options = {
				// beforeSubmit:  showRequest,  // pre-submit callback
				success:       showResponse,

				// other available options:
				url:       "/login.do",        // override for form's 'action' attribute
				type:      "post",        // 'get' or 'post', override for form's 'method' attribute
				dataType:  "json",        // 'xml', 'script', or 'json' (expected server response type)
				clearForm: true,        // clear all form fields after successful submit
				resetForm: true,        // reset the form after successful submit
			};

			// bind to the form's submit event
			$('#login-form').submit(function() {
				// inside event callbacks 'this' is the DOM element so we first
				// wrap it in a jQuery object and then invoke ajaxSubmit
				$(this).ajaxSubmit(options);
				// !!! Important !!!
				// always return false to prevent standard browser submit and page navigation
				return false;
			});

		}
	});
});

// post-submit callback
function showResponse(responseText, statusText)  {
	// for normal html responses, the first argument to the success callback
	// is the XMLHttpRequest object's responseText property

	// if the ajaxSubmit method was passed an Options Object with the dataType
	// property set to 'xml' then the first argument to the success callback
	// is the XMLHttpRequest object's responseXML property

	// if the ajaxSubmit method was passed an Options Object with the dataType
	// property set to 'json' then the first argument to the success callback
	// is the json data object returned by the server

	if (responseText.status == '0') {
		alert(responseText.msg);
	} else {
		window.location.href("/persionCenter.html");
	}

	// alert('status: ' + statusText + '\n\nresponseText: \n' + responseText.msg  +
	// 	'\n\nThe output div should have already been updated with the responseText.' + responseText.status);
}
// pre-submit callback
// function showRequest(formData, jqForm, options) {
// 	// formData is an array; here we use $.param to convert it to a string to display it
// 	// but the form plugin does this for you automatically when it submits the data
// 	var queryString = $.param(formData);
//
// 	// jqForm is a jQuery object encapsulating the form element.  To access the
// 	// DOM element for the form do this:
// 	// var formElement = jqForm[0];
//
// 	alert('About to submit: \n\n' + queryString);
//
// 	// here we could return false to prevent the form from being submitted;
// 	// returning anything other than false will allow the form submit to continue
// 	return true;
// }