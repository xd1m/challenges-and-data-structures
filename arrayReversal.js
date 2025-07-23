function ArrayReversal(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed[reversed.length] = arr[i];
    }
    return reversed;
}