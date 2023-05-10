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
    var last = []
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
    tam =  mang[number1-1]
    mang[number1-1] = mang[number2-1]
    mang[number2-1] = tam
    getELE("resultSwap").innerHTML = "Mảng sau khi đổi: " + mang

}

getELE("btnSwap").onclick = function () {
    swapNumber()
}
