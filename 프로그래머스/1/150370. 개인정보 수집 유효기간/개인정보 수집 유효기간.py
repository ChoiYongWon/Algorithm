def date_to_num(d):
    date_split = d.split(".")
    return ((int(date_split[0]) - 2000) * 12 * 28) + (int(date_split[1]) * 28) + (int(date_split[2]))

def solution(today, terms, privacies):
    answer = []
    terms_dict = {terms[i].split(" ")[0]:28*int(terms[i].split(" ")[1]) for i in range(len(terms))}
    today_date = date_to_num(today)
    
    for idx, val in enumerate(privacies):
        privacy_date = date_to_num(val.split(" ")[0])
        term_date = terms_dict[val.split(" ")[1]]
        if privacy_date + term_date <= today_date:
            answer.append(idx+1)
    return answer