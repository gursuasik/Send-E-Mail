function ValidateForm() {
    if (Form.fname.value == "" || Form.fname.value == null) {
        alert("Adınızı girmek zorundasınız!");
        Form.fname.focus();
        return false;
    }
    if (Form.fsurname.value == "" || Form.fsurname.value == null) {
        alert("Soyadınızı girmek zorundasınız!");
        Form.fsurname.focus();
        return false;
    }
    if (Form.fdateofbirth.value == "" || Form.fdateofbirth.value == null) {
        alert("Doğum tarihinizi girmek zorundasınız! 'gg.aa.yyyy' formatında.");
        Form.fdateofbirth.focus();
        return false;
    }
    var len = Form.fdateofbirth.value.length;
    var dotpos1 = Form.fdateofbirth.value.indexOf(".");
    var dotpos2 = Form.fdateofbirth.value.lastIndexOf(".");
    if (!(len==10 && dotpos1==2 && dotpos2==5)) {
        alert("Doğum tarihinizi 'gg.aa.yyyy' formatında girmek zorundasınız! ");
        Form.fdateofbirth.focus();
        return false;
    }
    if (Form.femail.value == "" || Form.femail.value == null) {
        alert("E-posta adresini girmek zorundasınız!");
        Form.femail.focus();
        return false;
    }
    var apos = Form.femail.value.indexOf("@");
    var dotpos = Form.femail.value.lastIndexOf(".");
    if (apos < 1 || dotpos - apos < 2) {
        alert("E-posta adresini doğru giriniz! 'mailadresiniz@ornek.com formatında.");
        Form.femail.focus();
        return false;
    }
}
