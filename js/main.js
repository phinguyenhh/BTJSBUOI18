// Get element
function getELE(id) {
    return document.getElementById(id);
}

// Add number
var mang = []
function addNumber() {

    var number = getELE("number").value
    if (number || number) {
        mang.push(number)
        getELE("resultAdd").innerHTML = mang
    } else {
        alert('Nhập số')
    }

}

getELE("btnAdd").onclick = function () {
    addNumber()
    getELE("number").value = ''
    getELE("number").focus()
}

// Plus
function plusNumber() {
    var sum = 0;
    for (var i = 0; i < mang.length; i++) {
        if (mang[i] > 0) {
            sum += Number(mang[i])
        }
    }
    getELE("resultPlus").innerHTML = sum
}

getELE("btnPlus").onclick = function () {
    plusNumber()
}

// Postive
function posNumber() {
    var count = 0;
    if (mang != null) {
        for (var i = 0; i < mang.length; i++) {
            if (mang[i] > 0) {
                count += 1
            }
        }
        getELE("resultPos").innerHTML = count
    } else {
        alert('mảng rỗng')
    }




}

getELE("btnPos").onclick = function () {
    posNumber()
}

// Min
function minNumber() {

    var dem = 0;
    for (var i = 0; i < mang.length; i++) {
        if (mang[i] > 0) {
            dem++;
            var min = mang[i];
            break;
        }
    }

    if (dem != 0) {
        for (var i = i + 1; i < mang.length; i++) {
            if (min > mang[i] && mang[i] > 0) {
                min = mang[i]
            }
        }
        getELE("resultMin").innerHTML = min
    } else {
        getELE("resultMin").innerHTML = "Không có số dương trong mảng"
    }

}

getELE("btnMin").onclick = function () {
    minNumber()
}

// Last Postive number
function lastNumber() {
    var last
    for (var i = mang.length - 1; i >= 0; i--) {
        if (mang[i] % 2 == 0) {
            last = mang[i]
            getELE("resultLast").innerHTML = last
            break
        }
    }

}

getELE("btnLast").onclick = function () {
    lastNumber()
}

// Swap number
function swapNumber() {
    var number1 = getELE("number1").value
    var number2 = getELE("number2").value
    var tam = []
    tam = mang[number1 - 1]
    mang[number1 - 1] = mang[number2 - 1]
    mang[number2 - 1] = tam
    getELE("resultSwap").innerHTML = "Mảng sau khi đổi: " + mang

}

getELE("btnSwap").onclick = function () {
    swapNumber()
}

// Prime number
function primeNumber() {
    var prime = 0
    for (var i = 0; i < mang.length; i++) {
        if (mang[i] < 2) {
            prime = -1
            getELE("resultPrime").innerHTML = prime
        } else if (mang[i] == 2) {
            prime = mang[i]
            getELE("resultPrime").innerHTML = prime
            break
        }
        else if (mang[i] % 2 !== 0) {
            prime = mang[i]
            getELE("resultPrime").innerHTML = prime
            break
        }
    }


}

getELE("btnPrime").onclick = function () {
    primeNumber()
}

// Integer number
var mangnew = []
function addNumber1() {

    var number3 = getELE("number3").value
    if (number3 || number3) {
        mangnew.push(number3)
        getELE("resultInteger").innerHTML = mangnew
    } else {
        alert('Nhập số')
    }
}

getELE("btnInteger").onclick = function () {
    addNumber1()
    getELE("number3").value = ''
    getELE("number3").focus()
}

function integerNumber() {
    var dem = 0
    for (var i = 0; i < mangnew.length; i++) {

        if (Number.isInteger(Number(mangnew[i]))) {
            dem++
        }
    }
    getELE("resultInte").innerHTML = dem

}

getELE("btnInte").onclick = function () {
    integerNumber()
}

// Comparative number 
function ComparaNumber() {
    var nguyenduong = 0
    var nguyenam = 0
    for (var i = 0; i < mang.length; i++) {
        if (mang[i] > 0) {
            nguyenduong++
        } else {
            nguyenam++
        }
    }

    if (nguyenduong > nguyenam) {
        getELE("resultCompa").innerHTML = "Nguyên dương lớn hơn nguyên âm"
        
    } else if (nguyenduong < nguyenam) {
        getELE("resultCompa").innerHTML = "Nguyên dương nhỏ hơn nguyên âm"

    } else{
        getELE("resultCompa").innerHTML = "Nguyên dương bằng nguyên âm"

    }




}

getELE("btnCompa").onclick = function () {
    ComparaNumber()
}

