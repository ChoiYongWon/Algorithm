
def solution(park, routes):
    
    coord = [0,0]
    max_x = len(park[0]) - 1
    max_y = len(park) - 1
    
    direction = {
        'N': [-1, 0],
        'S': [1, 0],
        'W': [0, -1],
        'E': [0,1]
    }
    
    for i in range(len(park)):
        j = park[i].find('S')
        if(j == -1):
            continue;
        coord = [i, j]
    for i in routes:
        d = i.split(" ")[0]
        c = int(i.split(" ")[1])
        
        if (coord[0] + (direction[d][0] * (c))) > max_y or (coord[0] + (direction[d][0] * (c))) < 0:
            continue
        if (coord[1] + (direction[d][1] * (c))) > max_x or (coord[1] + (direction[d][1] * (c))) < 0:
            continue
        k = 0
        for j in range(1, c+1):
            if park[coord[0] + (direction[d][0] * j)][coord[1] + direction[d][1] * j] == 'X':
                break
            k = k+1
        if(k == c):
            coord = [coord[0] + (direction[d][0] * j), coord[1] + (direction[d][1] * j)]
        
            
                     
    return coord