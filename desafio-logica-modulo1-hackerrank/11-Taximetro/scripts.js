function solucao(min, km) {
        let precoPorMin = 0;
        if (min <= 20) {
            precoPorMin = min * 50;
        } else if (min > 20) {
            precoPorMin = (20 * 50) + ((min - 20) * 30);
        }
        
        let precoPorKm = 0;
        if (km <= 10) {
            precoPorKm = km * 70;
        } else if (km > 10) {
            precoPorKm = (10 * 70) + ((km - 10) * 50);
        }
    
        let total = Math.floor(precoPorMin + precoPorKm);
        console.log(total);
}

const min = 25;
const km = 11.5;

solucao(min, km);