$('#btn-change').click(function(){
	$('#body').toggleClass("dark-theme");
	$('.container').toggleClass("dark-theme");
});
function tambahkan(){
	var alas = parseInt($('#alas').val());
	var tinggi = parseInt($('#tinggi').val());
	var hasil = (alas * tinggi)/2;
	$('#hasil').text(`Luas Segitinya ${hasil}`);
}
function change(){
}