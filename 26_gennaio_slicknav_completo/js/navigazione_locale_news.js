var aux ='';
$(document).ready(function(){
	

	$('#past').on('click', function(){
		$('#div_past').addClass('nav_locale_selected');
		$('#div_next').removeClass('nav_locale_selected');
		$('#past').addClass('selected');
		$('#next').removeClass('selected');
		$('#past').removeClass('nav_locale');
		$('#next').addClass('nav_locale');
		aux= "Archivio news"
	        $.ajax({
	             url: './tpl/navigazione_locale_archivio_news.html',
	             type: 'GET',
	             dataType: 'html',
	             success: successo
	         });
	    });

	$('#next').on('click', function(){
		$('#div_next').addClass('nav_locale_selected');
		$('#div_past').removeClass('nav_locale_selected');
		$('#next').addClass('selected');
		$('#past').removeClass('selected');
		$('#next').removeClass('nav_locale');
		$('#past').addClass('nav_locale');
		aux = "Ultime news"
		$.ajax({
	             url: './tpl/navigazione_locale_ultime_news.html',
	             type: 'GET',
	             dataType: 'html',
	             success: successo
	         });
		
	});
});

function successo(data){     
    $('#navigazione_locale').html(data).show('fast');
    $('#briciole').text(aux);
}