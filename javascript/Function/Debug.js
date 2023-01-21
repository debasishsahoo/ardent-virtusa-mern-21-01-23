let result;
function add(a, b) {
    if (a > b) {
        result = a + b;
        console.log('result:', result)

    } else if (a == b) {
        console.log(a - b)
    } else if (a < b) {
        console.log(a * b)
    } else {
        console.log(a / b)
    }

}

add(2, 3)
add(4, 9)
add(3, 5)
add(7, 4)
add(10, 6)
add(2, 2)
