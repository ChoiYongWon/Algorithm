def solution(participant, completion):
    answer = ''
    p = {}
    for i in participant:
        if i not in p:
            p[i] = 1
        else:
            p[i] += 1
    for i in completion:
        p[i] -= 1
    for i in participant:
        if p[i] ==  1:
            return i