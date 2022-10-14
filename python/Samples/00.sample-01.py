#숫자 맞추기 게임

import random

random_number = random.randint(1, 100)   #1부터 100까지

#print(random_number)

game_count = 1

while(True):

    try:
        my_number = int(input("1~100 사이의 숫자를 입력하세요"))     #문자열로 입력받기 때문에 정수형으로 변경하여야 한다.

        if my_number > random_number:
            print('Down!!')
        elif my_number < random_number:
            print("Up!!")
        else:
            print(f"축하합니다, {game_count} 만에 맞추셨습니다.")     #앞에 f를 입력하게 되면 원하는 변수가 출력된다.
        break

        game_count += 1
    
    except:
        print("숫자를 제대로 입력하여 주세여")