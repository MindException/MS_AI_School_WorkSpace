# 컴퓨터의 ip 주소를 확인하는 코드
import socket

in_name = socket.gethostname()                              #gethostname만 가지고 오면 pc의 이름만 가지고온다.
in_addr = socket.gethostbyname(in_name)                     #IP 주소 반환

print(in_name)
print(in_addr)