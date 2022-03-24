//Id leri ile verilere erisicegiz

const btn = document.getElementById('btn');
const isim = document.getElementById('userName');
const mail = document.getElementById('email');
const dogum = document.getElementById('birthday');
const sehir = document.getElementById('city');
const sifre = document.getElementById('password');
const sifre2 = document.getElementById('password2')


let sayac = 0;
 
btn.addEventListener ("click" , e => {
	e.preventDefault();
	checkInput();
} )

function checkInput() {
	const IsimDeger = isim.value;
	const mailDeger = mail.value;
	const dogumDeger = dogum.value;
	const sehirDeger = sehir.value;
	const sifreDeger = sifre.value;
	const sifreIkiDeger = sifre2.value;


	if(IsimDeger == "" ){
		showEror(isim , "Isim Kismini Doldurunuz" )
	}else{
		successfulTransaction(isim)
	}


	if(mailDeger == "" ){
		showEror(mail , "Mail Kismini Doldurunuz" )
	}else if( !(isMail(mailDeger))){
		showEror(mail , "Mail Formunda doldurunuz!" )
	}
	else{
		successfulTransaction(mail)
	}

	
	if(dogumDeger == "" ){
		showEror(dogum , "Dogum Gunu Kismini Doldurunuz" )
	}else{
		successfulTransaction(dogum)
	}

	if(sifreDeger == "" ){
		showEror(sifre , "Sifre Kismini Doldurunuz" )
	}else{
		successfulTransaction(sifre)
	}


	if(sifreIkiDeger == "" ){
		showEror(sifre2, "Sifre Kismini Doldurunuz" )
	}else if(!(sifreDeger == sifreIkiDeger)){
		showEror(sifre2 , "Sifre Kisminiz Dogrulanamadi !")
	}else{
		successfulTransaction(sifre2)
	}

	insertLog()

}


function insertLog(){
	if(sayac == 5){
		let kisiler = {
			isim : isim.value,
			mail : mail.value,
			dogumTarihi : dogum.value,
			sehir : sehir.value,
			sifre : sifre.value,	
		}
		console.log(kisiler)
		window.alert("Kaydiniz alinmistir");
		clearInput();
		sayac = 0;
		
	}else{
		console.log("eksik")
		console.log(sayac)
		sayac = 0;
	}
}


function clearInput(){
	isim.value = "";
	mail.value = "";
	dogum.value = "" ;
	sifre.value = "";
	sifre2.value = "";
	sehir.value = "istanbul";

}

function showEror(input , message){
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function  successfulTransaction(input){
	const formControl = input.parentElement;
	formControl.className = "form-control success"; 
	sayac ++;
}

function isMail(mail){
	 return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail);
}

