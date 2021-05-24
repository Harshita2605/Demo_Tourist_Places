import pandas as pd
import numpy as np
import math
import sys

fout = "js/n.js"
f = open(fout, "w")

def write(fin, distt):
    df = pd.read_csv(fin)
    arr = df.T.to_numpy()
    prev = ""
    t = 0
    count = 1

    for r in range (1, np.size(arr, 0)):
        for c in range (0, np.size(arr, 1)):
            x = math.floor(arr[r][c]/2) # x_max = 8 (/2)
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

write("mumbai/n_connectivity.csv", "Mumbai")
write("mumbai/n_education.csv", "Mumbai")
write("mumbai/n_govt_fac.csv", "Mumbai")
write("mumbai/n_health.csv", "Mumbai")
write("mumbai/n_utility.csv", "Mumbai")

f.close()
