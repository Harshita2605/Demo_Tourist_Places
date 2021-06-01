from glob import glob
import pandas as pd
import numpy as np
import math
import sys

fout = "p.js"
f = open(fout, "w")

df = pd.DataFrame()
ls = []
for file in sorted(glob('mumbai/*.csv')):
    ls.append(pd.read_csv(file).T)

df = df.append(ls)
df = df.loc[:,~df.columns.duplicated()]
f.write(df.to_string(header = True, index = True))

f.write("\n\n\n")

distt = "Mumbai"
arr = df.to_numpy()
gType = df.T['Grid_type'].to_numpy()

f.write("\nvar " + distt + "_Number = " + str(np.size(arr, 1))) #Number
f.write("\nvar " + distt + "_Grid_Coordinates = " + str(arr[1][0])) #Grid Coordinates

fl = False
for c in range (0, np.size(arr, 1)):
    if c == 0:
        f.write("\nvar " + distt + "_Rejected" + " = [")
    if str(gType[c]) == "Rejected":
        if fl == False:
            f.write(str(arr[0][c]))
            fl = True
        else:
            f.write(", " + str(arr[0][c]))
f.write("]")

fl = False
for c in range (0, np.size(arr, 1)):
    if c == 0:
        f.write("\nvar " + distt + "_Rural" + " = [")
    if str(gType[c]) == "Rural":
        if fl == False:
            f.write(str(arr[0][c]))
            fl = True
        else:
            f.write(", " + str(arr[0][c]))
f.write("]\n")

#Grid Type: gType[]
for r in range (0, np.size(arr, 0)):
    flag = False
    for c in range (0, np.size(arr, 1)):
        if c == 0:
            f.write("\nvar " + distt + "_" + str(df.T.columns[r]) + " = [")
        elif str(gType[c]) != "Rejected" and str(gType[c]) != "Rural":
            if flag == False:
                f.write(str(arr[r][c]))
                flag = True
            else:
                f.write(", " + str(arr[r][c]))
    f.write("]")

#ArrSize: 196
f.close()