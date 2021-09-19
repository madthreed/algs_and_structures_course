function cacheFunction(fn) {
    const cache = {}
    return function (n) {
        if (cache[n]) {
            console.log('Взято из кеша', cache[n])
            return cache[n]
        }
        let result = fn(n)
        console.log('Посчитала функция = ', result)
        cache[n] = result
        return result;
    };
}

function factorial(n) {
    let result = 1
    while (n != 1) {
        result *= n
        n -= 1
    }
    return result
}

const fibonachi = (n) => {
    if (n === 1 || n === 2) {
        return 1
    }
    return fibonachi(n-1) + fibonachi(n-2)
}

const cacheFactorial = cacheFunction(factorial)
const cacheFibonachi = cacheFunction(fibonachi)

cacheFactorial(5)

cacheFibonachi(5)
cacheFibonachi(4)

cacheFactorial(3)

cacheFibonachi(3)

cacheFactorial(4)

cacheFibonachi(4)

cacheFactorial(4)
cacheFactorial(5)
cacheFactorial(1)

cacheFibonachi(5)
cacheFibonachi(1)
