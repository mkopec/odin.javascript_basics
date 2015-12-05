function pr1() {
    var sum = 0;
    for (var i = 0; i < 1000; ++i)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;

    document.getElementById('pr1_result').innerHTML = sum;
}

function pr2() {
    var a = 1; // Current fibonacci number
    var b = 1; // How much to increment a every loop turn
    var c = 0; // Previous value of a
    var sum = 0;

    while (a < 4000000) {
        if (a % 2 === 0)
            sum = sum + a;

        c = a;
        a += b;
        b = c;
    }

    document.getElementById('pr2_result').innerHTML = sum;
}

function pr3() {
    var a = 0;
    var max = 9999999;
    var result = 0;

    for (var i = 2; i < max; ++i) {
        if (isPrime(i) && max % i === 0) {
            result = i;
            max /= i;
            i = 2;
        }
    }

    document.getElementById('pr3_result').innerHTML = result;
}

function isPrime(a) {
    for (var i = 2; i < a; ++i)
        if (a % i === 0)
            return false;

    return true;
}
