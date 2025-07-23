function MostFrequentNumber(arr) {
    let counts = {};
    let maxCount = 0;
    let mostFrequent = arr[0];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        counts[num] = (counts[num] || 0) + 1;

        if (counts[num] > maxCount) {
            maxCount = counts[num];
            mostFrequent = num;
        }
    }

    return mostFrequent;
}