function pr1() {
    var sum = 0;
    for (var i = 0; i < 1000; ++i)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;

    document.getElementById('pr1_result').innerHTML = sum;
}