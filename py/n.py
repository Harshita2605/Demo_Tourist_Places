import pandas as pd
import numpy as np
import math
import sys

fout = "js/n.js"
f = open(fout, "w")

def write(fin, distt, fac):
    df = pd.read_csv(fin)
    arr = df.T.to_numpy()
    prev = ""
    t = 1
    count = 1

    for r in range (1, np.size(arr, 0)):
        for c in range (0, np.size(arr, 1)):
            x = math.floor(arr[r][c]/fac)
            if c == 0:
                f.write("\nvar " + distt + "_" + str(df.columns[r]) + " = [")
                t = 0
            elif c == 1:
                f.write("\"" + str(x) + "\"")
                count += 1
                prev = str(x)
                t += 1
            else:
                if str(x) == prev:
                    t += 1
                else:
                    f.write(", " + str(t) + ", " + "\"" + str(x) + "\"")
                    count += 2
                    prev = str(x)
                    t = 1
        f.write(", " + str(t) + "]")
    f.write("\n")
    f.write(str(count) + "\n")

write("mumbai/n_connectivity.csv", "Mumbai", 1)
write("mumbai/n_education.csv", "Mumbai", 1)
write("mumbai/n_govt_fac.csv", "Mumbai", 1)
write("mumbai/n_health.csv", "Mumbai", 1)
write("mumbai/n_utility.csv", "Mumbai", 1)

f.close()
