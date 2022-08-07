import speech_recognition as sr
import pyttsx3
r = sr.Recognizer()

with sr.Microphone() as mic:
    print("Speak to recognise:")
    r.adjust_for_ambient_noise(mic, duration=0.2)
    audio = r.listen(mic)
    try:
        text = r.recognize_google(audio)
        print("you said:", text)
    except:
         print("Couldn't Recognise you...")


