function solution(a, b) {
    const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
    const date_2016 = new Date(`2016-${a}-${b}`)
    return DAYS[date_2016.getDay()];
}