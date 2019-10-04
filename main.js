$('#banner').text("Kulo Nuwun Donya!");
function tambahkan(){
	var angka1 = parseInt($('#angka1').val());
	var angka2 = parseInt($('#angka2').val());
	var hasil = angka1 + angka2;
	$('#hasil').text(`Hasil dari ${angka1} + ${angka2} = ${hasil}`);
}