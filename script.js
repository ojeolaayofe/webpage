<script type="text/javascript">
	$(document).ready(function(){
		$("#pass1").keyup(function(){
			if($(this).val().length<6){
				$("#show1").html("Your Password strenght is weak");
				$("#show1").css("color", 'red');
				$(this).css("border", ' 2px double red');
			}
			else if ($(this).val().length<7){
				$("#show1").html("Your password strenght is medium");
				$("#show1").css("color",'green');
				$(this).css("border",'2px solid green');
			}
			else if ($(this).val().length<8) {
				$("#show1").html("Your password strenght is strong");
				$("#show1").css("color",'blue');
				$(this).css("border",'2px solid blue')
			}
		});
		$("#pass2").keyup(function(){
			if ($("#pass1").val() !== ($("#pass2").val())){
				$("#show2").html("Your password doesnot match");
				$("#show2").css("color",'red');
			}
		});
		// $("#pass2").keyup(function(){
		// 	if ($("$pass1").value() !== ($("#pass2").val())) {

		// 	}
		// })
	});
</script>