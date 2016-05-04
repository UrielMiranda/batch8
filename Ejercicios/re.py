import re
data = "One small letter, surrounded by EXACTLY three big bodyguards on each of its sides."

print "".join(re.findall("[^A-Z]+[A-Z]{3}([a-z])[A-Z]{3}[^A-Z]+", data))
