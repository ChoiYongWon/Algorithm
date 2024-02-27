def solution(players, callings):
    tmp = None
    players_dict = {}
    rank_dict = {}
    for idx, val in enumerate(players):
        rank_dict[idx] = val
        players_dict[val] = idx
    for i in callings:
        calling_rank = players_dict[i]
        victim_rank = calling_rank - 1 # 내가 제친 플레이어의 순위
        victim_player = rank_dict[victim_rank]
        # players_dict의 플레이어의 순위를 서로 바꾸고
        players_dict[victim_player] += 1 
        players_dict[i] -= 1
        
        # rank_dict의 플레이어의 순위를 서로 바꾼다
        tmp = rank_dict[calling_rank]
        rank_dict[calling_rank] = rank_dict[victim_rank]
        rank_dict[victim_rank] = tmp
        
    return list(rank_dict.values())