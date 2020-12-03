$(document).ready(function() {

	$("#register-form").validate({
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
			},
			confirm_password : {
				required : true,
				minlength : 6,
				equalTo : "#password"
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
			},
			confirm_password : {
				required : "请输入确认密码",
				minlength : jQuery.format("密码不能小于{0}个字符"),
				equalTo : "两次输入密码不一致不一致"
			},
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
			alert("submitted!");
		}

	})
});