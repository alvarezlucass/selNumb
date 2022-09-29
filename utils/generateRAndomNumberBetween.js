export const generateRAndomNumberBetween=( min, max, exclude) => {
    min= Math.ceil(min);
    max= Math.floor(max);
    const  randomNumber = Math.floor(Math.random()*(max - min)+ min);
    if (randomNumber === exclude) {
        return generateRAndomNumberBetween (min, max, exclude);
    } else {
        return randomNumber;
    }
}