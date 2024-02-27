def solution(expression):
    operations = [('+', '-', '*'),('+', '*', '-'),('-', '+', '*'),('-', '*', '+'),('*', '+', '-'),('*', '-', '+')]
    answer = []
    for op in operations:
        print('op가', op,'일때')
        a = op[0]
        b = op[1]
        temp_list = []
        for e in expression.split(a):
            print('e가 ',e,'일때')
            temp = [f"({i})" for i in e.split(b)]
            print(temp)
            temp_list.append(f'({b.join(temp)})')
            print('temp_list', b.join(temp))
        print("result",a.join(temp_list), eval(a.join(temp_list)))
        answer.append(abs(eval(a.join(temp_list))))
    return max(answer)