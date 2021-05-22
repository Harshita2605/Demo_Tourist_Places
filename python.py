import pandas as pd
import numpy as np
import sys

#fin = "indicators/Bangalore19.csv"
fin = sys.argv[1]
fout = "data.js"

df = pd.read_csv(fin, index_col=0, header=None).T
arr = df.to_numpy()

f = open(fout, "w")

prev = ""
t = 0

f.write("\nvar " + arr[5][1] + "_Grid_Coordinates = " + str(arr[0][1])) #Grid Coordinates
for r in range (1, np.size(arr, 0)):
    for c in range (0, np.size(arr, 1)):
        if c == 0:
            f.write("\nvar " + arr[5][1] + "_" + str(arr[r][c]) + " = [") #arr[5][0]: District Name Row: arr[5][1]
            t = 0
        elif c == 1:
            f.write("\"" + str(arr[r][c]) + "\"")
            prev = str(arr[r][c])
            t += 1
        else:
            if arr[r][c] == prev:
                t += 1
            else:
                f.write(", " + str(t) + ", " + "\"" + str(arr[r][c]) + "\"")
                prev = str(arr[r][c])
                t = 1
    f.write(", " + str(t) + "]")

f.close()
