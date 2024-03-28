function solution(phone_book) {
    var answer = true;
    let map = new Map();
    // const min_length = Math.min(...phone_book.map(i=>i.length))
    for(let i in phone_book){
        // 이거 왜안됨??
        // for(let j=0;j<phone_book[i].length-min_length;j++){
        //     map.set(phone_book[i].slice(0, min_length+j), true)
        // }
        for(let j=1;j<phone_book[i].length;j++){
            map.set(phone_book[i].slice(0, j), true)
        }
    }
    for(let i in phone_book){
       if(map.has(phone_book[i])) return false
    } 
    return answer;
}