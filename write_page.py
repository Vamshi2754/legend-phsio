import os
target = r"E:\Download\medical-5000-main\medical-5000-main\src\app\locations\[location]\page.tsx"

page_content = open(r"E:\Download\medical-5000-main\medical-5000-main\page_template.tsx", encoding="utf-8").read()

with open(target, "w", encoding="utf-8") as f:
    f.write(page_content)
print("Written", os.path.getsize(target), "bytes")
