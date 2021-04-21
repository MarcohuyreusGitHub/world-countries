import json

ws = open("world5.txt", 'r', encoding="utf-8")

data = json.load(ws)

subregion = []
for d in data:

    if not d['subregion'] in subregion:
        subregion.append(d['subregion'])

out = open('subregion.txt', 'w')
json.dump(subregion, out)
