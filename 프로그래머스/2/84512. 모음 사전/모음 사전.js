function solution(word) {
    var answer = 0;
    let result = []
    
    function dfs(n, w){
        if(n == 0) {
            result.push(w)
            return
        }
        dfs(n-1, w+'')
        dfs(n-1, w+'A')
        dfs(n-1, w+'E')
        dfs(n-1, w+'I')
        dfs(n-1, w+'O')
        dfs(n-1, w+'U')
    }
    dfs(5, "")
    
    result = Array.from(new Set(result)).sort()
    
    return result.indexOf(word);
}