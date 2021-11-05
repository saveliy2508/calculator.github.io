//Textarea
var area = document.getElementById("area");

//Кнопки
var reset = document.getElementById("reset");
var backspace = document.getElementById("backspace");
var bracketLeft = document.getElementById("bracket-left");
var bracketRight = document.getElementById("bracket-right");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var divide = document.getElementById("divide");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var multipy = document.getElementById("multipy");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var minus = document.getElementById("minus");
var zero = document.getElementById("zero");
var point = document.getElementById("point");
var result = document.getElementById("result");
var plus = document.getElementById("plus");


//Функция ввода чисел и знаков
function enterNum() {
    if (area.innerHTML.length < 15) {
        area.append(this.number);
        areaSum.value = '';
    }
}

function enterSymbol() {
    if (area.innerHTML.length < 15) {
        if (area.innerHTML.slice(-1) == 1 || area.innerHTML.slice(-1) == 2 || area.innerHTML.slice(-1) == 3 || area.innerHTML.slice(-1) == 4 || area.innerHTML.slice(-1) == 5 || area.innerHTML.slice(-1) == 6 || area.innerHTML.slice(-1) == 7 || area.innerHTML.slice(-1) == 8 || area.innerHTML.slice(-1) == 9 || area.innerHTML.slice(-1) == 10) {
            area.append(this.number);
            areaSum.value = '';
        }
    }
}

//Символы для кнопок
var brackL = '(';
var brackR = ')';
var mult = '*';
var divi = '/';
var pl = '+';
var min = '-';
var poi = '.';
//Кнопки цифр и операторов
one.addEventListener('click', { handleEvent: enterNum, number: 1 });
two.addEventListener('click', { handleEvent: enterNum, number: 2 });
three.addEventListener('click', { handleEvent: enterNum, number: 3 });
four.addEventListener('click', { handleEvent: enterNum, number: 4 });
five.addEventListener('click', { handleEvent: enterNum, number: 5 });
six.addEventListener('click', { handleEvent: enterNum, number: 6 });
seven.addEventListener('click', { handleEvent: enterNum, number: 7 });
eight.addEventListener('click', { handleEvent: enterNum, number: 8 });
nine.addEventListener('click', { handleEvent: enterNum, number: 9 });
zero.addEventListener('click', { handleEvent: enterNum, number: 0 });
bracketLeft.addEventListener('click', { handleEvent: enterSymbol, number: brackL });
bracketRight.addEventListener('click', { handleEvent: enterSymbol, number: brackR });
multipy.addEventListener('click', { handleEvent: enterSymbol, number: mult });
divide.addEventListener('click', { handleEvent: enterSymbol, number: divi });
plus.addEventListener('click', { handleEvent: enterSymbol, number: pl });
minus.addEventListener('click', { handleEvent: enterSymbol, number: min });
point.addEventListener('click', { handleEvent: enterSymbol, number: poi });

//Кнопки действий =, сбросить и удалить
//Сбросить
function resetFunk() {
    area.innerHTML = '';
    areaSum.value = '';
}
reset.addEventListener('click', resetFunk);

//Равно
var areaSum = document.getElementById('area-sum');
function resultFunk() {
    /*var x = eval(area.value);
    y = String(x);
    areaSum.value = y;*/
    //JOKE
    areaSum.classList.add('joke');
    areaSum.value = 'Юра, когда отдашь долг?';
};
result.addEventListener('click', resultFunk);

//Удалить последний символ


function backspaceFunk() {
    var x = area.innerHTML;
    var y = String(x);
    area.innerHTML = y.slice(0, -1);
    areaSum.value = '';
}

backspace.addEventListener('click', backspaceFunk);