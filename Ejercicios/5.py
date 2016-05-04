import pickle
import urllib.request

site = "http://www.pythonchallenge.com/pc/def/banner.p"
handle = urllib.request.urlopen(site)

unserialized = pickle.load(handle)

message = []
for i in unserialized:
    for j in i:
        message.append(j[0]*j[1])
    message.append('\n')
print("".join(message))
