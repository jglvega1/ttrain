#!/usr/bin/env python3
import urllib.request

def detector(rawreq):
	#obtencion de datos
	req = ""
	encodings = ["ascii", "utf-8", "utf-16", "utf-32", 'windows-1250', 'windows-1252', 'base64']
	for e in encodings:
		try:
			req = rawreq.decode(e)
		except UnicodeDecodeError:
			print('got unicode error with %s , trying different encoding' % e)
		else:
			print('opening the file with encoding:  %s ' % e)
			break 

	#modelamiento de datos
	for i, letter in enumerate(req):
		#incercion de letra y veces que aparece
		if letter in rawLetters:
			rawLetters[letter]["times"] += 1
		else:
			rawLetters[letter] = {
					"key": letter,
					"times": 1,
					"conections": {}
				}
		#conecciones proximas de la letra en conctreto
		if i > 0: #letra anterior
			y = i - 1
			nl = req[y]
			if nl in rawLetters[letter]["conections"]:
				rawLetters[letter]["conections"][nl] += 1
			else:
				rawLetters[letter]["conections"][nl] = 1
		if i < (len(req)-1): #letra posterior
			y = i + 1
			nl = req[y]
			if nl in rawLetters[letter]["conections"]:
				rawLetters[letter]["conections"][nl] += 1
			else:
				rawLetters[letter]["conections"][nl] = 1

		#ordenamiento de las conecciones por cantidad de apariciones
		rawLetters[letter]["conections"] = {k: v for k, v in sorted(
				rawLetters[letter]["conections"].items(), 
				key=lambda item: item[1],
				reverse = True
			)
		}
#obtencion de origenes
listURL = ["https://google.com", "https://facebook.com"]

rawLetters = {}#datos sin procesar

for url in listURL:
	detector(urllib.request.urlopen(url).read())

#preprocesamiento de datos
letters = sorted(
	rawLetters.keys(), 
	key = lambda x:(rawLetters[x]["times"], rawLetters[x]["times"]),
	reverse= True
)

print(len(rawLetters))#visualisacion de longitud de los datos