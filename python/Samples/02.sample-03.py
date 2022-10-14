#텍스트를 음성으로 변환
#gtts가 없는 경우
#pip install gtts
from gtts import gTTS
from playsound import playsound
import os

text = "안녕하세요 마이크로소프트 에이아이 스쿨에 오신 것을 환영합니다."

#텍스트를 사운드로 변환
tts = gTTS(text = text, lang = 'ko')

current_file_path = os.getcwd() + "/hi.mp3"
tts.save(current_file_path)

#mp3 재생
playsound(current_file_path)