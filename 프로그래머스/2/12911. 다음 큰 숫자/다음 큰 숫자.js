function solution(n) {
    var answer = 0;
    const bin = n.toString(2).replace(/0/g, "");
    let i, i_bin;
    for(i=n+1, i_bin=i.toString(2).replace(/0/g, "");bin.length!=i_bin.length;i++, i_bin=i.toString(2).replace(/0/g, ""));
    answer = i
    return answer;
}