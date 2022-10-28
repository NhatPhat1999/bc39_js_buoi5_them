// tính thuế thu nhập cá nhân
function tienThue() {
    var hoVAten = document.getElementById("hoVAten").value;
    var tongThunhap = document.getElementById("tongThunhap").value * 1;
    var soNguoipt = document.getElementById("soNguoipt").value * 1;
    var thuNhapchiuthue = tongThunhap - 4000000 - soNguoipt * 1600000;
    var thueXuat = tinhPhantramthue(thuNhapchiuthue);
    var tienThue = thuNhapchiuthue * thueXuat;
    tienThue = Intl.NumberFormat("vn-VN").format(tienThue);
    document.getElementById("infoThue").innerHTML = "Họ và tên: " + hoVAten + "; tiền thuế thu nhập cá nhân: " + tienThue + "VND";
}

function tinhPhantramthue(thuNhapchiuthue) {
    if (0 < thuNhapchiuthue && thuNhapchiuthue <= 60000000) {
        thueXuat = 5 / 100;
    } else if (thuNhapchiuthue <= 120000000) {
        thueXuat = 10 / 100;
    } else if (thuNhapchiuthue <= 210000000) {
        thueXuat = 15 / 100;
    } else if (thuNhapchiuthue <= 384000000) {
        thueXuat = 20 / 100;
    } else if (thuNhapchiuthue <= 624000000) {
        thueXuat = 25 / 100;
    } else if (thuNhapchiuthue <= 960000000) {
        thueXuat = 30 / 100;
    } else if (thuNhapchiuthue >= 960000000) {
        thueXuat = 35 / 100;
    }
    return thueXuat;
}


// tính tiền cáp
function tienCap() {
    var maKh = document.getElementById("maKh").value;
    var loaiKh = document.getElementById("loaiKh").value;
    var soKenhcc = document.getElementById("soKenhcc").value * 1;
    var soKetnoi = document.getElementById("soKetnoi").value * 1;

    var tienCap = "";

    if (loaiKh === "nhadan") {
        tienCap = tienCapnhadan(soKenhcc);
    } else if (loaiKh === "doanhnghiep") {
        tienCap = tienCapdoanhnghiep(soKenhcc, soKetnoi);
    } else {
        alert("vui lòng chọn loại khách hàng");
    }
    tienCap = Intl.NumberFormat("en-US").format(tienCap);
    document.getElementById("infoTiencap").innerHTML = "Mã khách hàng: " + maKh + "; Tiền cáp: $" + tienCap;
}

function tienCapnhadan(soKenhcc) {
    var phiXlhodaon = 4.5;
    var kenhCaocap = 7.5 * soKenhcc;
    var phiDvcoban = 20.5;
    var tienCap = phiXlhodaon + phiDvcoban + kenhCaocap;
    return tienCap;
}

function tienCapdoanhnghiep(soKenhcc, soKetnoi) {
    var phiXlhodaon = 15;
    var kenhCaocap = 50 * soKenhcc;
    if (0 < soKetnoi && soKetnoi <= 10) {
        phiDvcoban = 75;
    } else {
        phiDvcoban = 75 + (soKetnoi - 10) * 5;
    }
    var tienCap = phiXlhodaon + phiDvcoban + kenhCaocap;
    return tienCap;
}

function soKetnoiOnoff() {
    var loaiKh = document.getElementById("loaiKh").value;
    if (loaiKh === "doanhnghiep") {
        div_soKetnoi.style.display = "block";
    } else {
        div_soKetnoi.style.display = "none";
    }
}
