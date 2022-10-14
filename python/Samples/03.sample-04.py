#qr 코드 생성
import qrcode

#단일 생성
# qr_data = "www.naver.com"
# qr_image = qrcode.make(qr_data)

# qr_image.save( './python/Samples/' + qr_data + '.png')

#여러 개 한번에 생성

#with를 사용시 알아서 파일을 열고 닫아준다. 동작을 하나의 블록으로 만들어주는 느낌이다.
with open('./python/Samples/sitelist.txt', 'rt', encoding = 'UTF8') as f:   #f가 파일 이름이다.
    read_lines = f.readlines()      #전체 파일에 있는 모든 라인을 읽는다.

    for line in read_lines:
        line = line.strip()         #특수문자 등을 없애고 순수한 문자들만 나오게 하는 코드이다.
        print(line)

        qr_data = line
        qr_image = qrcode.make(qr_data)

        qr_image.save('./python/Samples/' + qr_data + '.png')