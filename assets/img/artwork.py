"""Generates the Riyadh skyline + Najdi pattern artwork as inline SVG defs.
Original illustration — no third-party assets. Deterministic output."""
import random

random.seed(1179)   # Riyadh founded 1179 AH (Najdi era) — keeps window layout stable

W, H, BASE = 1440, 260, 260

def rect(x,y,w,h,**k):
    a=''.join(f' {n.replace("_","-")}="{v}"' for n,v in k.items())
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}"{a}/>'
def poly(pts,**k):
    a=''.join(f' {n.replace("_","-")}="{v}"' for n,v in k.items())
    p=' '.join(f'{x},{y}' for x,y in pts)
    return f'<polygon points="{p}"{a}/>'

# ── far layer: plain massing, no detail ───────────────────────────
far=[]
spec=[(0,120,54),(96,80,38),(160,150,72),(280,96,46),(350,130,84),
      (450,70,40),(505,110,96),(620,86,52),(690,140,66),(775,64,44),
      (835,120,74),(925,92,50),(990,150,88),(1095,72,42),(1150,116,70),
      (1240,88,54),(1310,140,78),(1400,96,40)]
far.append(rect(0, BASE-16, W, 16))   # horizon plinth: the crop line lands here
for x,w,h in spec:
    far.append(rect(x, BASE-h, w, h, rx=2))
    if h>110:  # roof plant
        far.append(rect(x+w*0.3, BASE-h-7, w*0.4, 7, rx=1))

# ── near layer: the landmarks ─────────────────────────────────────
near=[]

# Masmak Fort — Najdi mud fortress, corner towers and triangular crenellations
near.append('<g class="sk-fort">')
near.append(rect(52, BASE-70, 140, 70))
for tx in (40, 178):
    near.append(rect(tx, BASE-86, 26, 86, rx=13))
near.append(rect(108, BASE-96, 24, 96, rx=12))
cren=[]
x=54
while x < 190:
    cren.append(poly([(x,BASE-70),(x+7,BASE-80),(x+14,BASE-70)]))
    x+=17
near.append(''.join(cren))
# triangular Najdi openings
for ox in (70, 96, 140, 164):
    near.append(poly([(ox,BASE-44),(ox+6,BASE-56),(ox+12,BASE-44)], class_='sk-void'))
near.append('</g>')

# date palms
def palm(bx, s=1.0):
    t=f'<path d="M{bx} {BASE} q3 -{28*s} 1 -{46*s}" stroke-width="{3*s}" fill="none" stroke="currentColor"/>'
    fr=''
    for a in (-1,-0.6,0,0.6,1):
        fr+=(f'<path d="M{bx+1} {BASE-46*s} q{16*a*s} -{10*s} {26*a*s} {2*s}" '
             f'stroke-width="{2.2*s}" fill="none" stroke="currentColor" stroke-linecap="round"/>')
    return t+fr
near.append(palm(214)+palm(244,.82)+palm(1392,.9))

# Riyadh TV tower
near.append(rect(316, BASE-140, 9, 140, rx=3))
near.append('<ellipse cx="320.5" cy="120" rx="23" ry="11"/>')
near.append(rect(318, BASE-186, 5, 46))

# Al Faisaliah — tapering pyramid, sphere, spire
near.append('<g class="sk-fais">')
near.append(poly([(436,BASE),(470,BASE-186),(490,BASE-186),(524,BASE)]))
near.append('<circle cx="480" cy="66" r="15"/>')
near.append(rect(478, 18, 4, 34))
near.append(rect(452, BASE-96, 56, 5, class_='sk-void'))
near.append('</g>')

# mid-rise
near.append(rect(548, BASE-104, 46, 104, rx=2)+rect(600, BASE-78, 38, 78, rx=2))

# Kingdom Centre — two converging legs bridged near the top, open beneath
near.append('<g class="sk-kingdom">')
near.append(poly([(682,BASE),(716,BASE),(738,58),(722,52)]))
near.append(poly([(800,BASE),(766,BASE),(744,58),(760,52)]))
near.append(rect(716, 44, 50, 12, rx=5))
near.append('</g>')

# stepped / twisting tower (CMA-style)
for i in range(6):
    near.append(rect(856+i*4, BASE-40-i*33, 70-i*4, 33, rx=2))
near.append(rect(878, 44, 6, 24))

# KAFD-ish cluster: diagonal-cut tower + cylinder + slab
near.append(poly([(950,BASE),(950,BASE-128),(1002,BASE-160),(1002,BASE)]))
near.append(rect(1016, BASE-96, 40, 96, rx=20))
near.append(rect(1064, BASE-142, 52, 142, rx=2))
near.append(rect(1072, BASE-156, 36, 14, rx=2))

# office blocks
near.append(rect(1128, BASE-88, 44, 88, rx=2)+rect(1180, BASE-116, 38, 116, rx=2))

# Najdi mosque: dome and minaret
near.append('<g class="sk-mosque">')
near.append(rect(1240, BASE-46, 96, 46))
near.append('<path d="M1252 214 q36 -50 72 0 z"/>')
near.append(rect(1284, 158, 5, 14))
near.append(rect(1348, BASE-118, 11, 118, rx=3))
near.append('<circle cx="1353.5" cy="140" r="9"/>')
near.append(rect(1352, 116, 3, 16))
near.append('</g>')

# ── lit windows for the night silhouette ─────────────────────────
win=[]
bands=[(58,186,BASE-64,BASE-14),(548,592,BASE-98,BASE-16),(600,636,BASE-72,BASE-16),
       (688,714,BASE-150,BASE-20),(768,796,BASE-150,BASE-20),
       (858,922,BASE-190,BASE-20),(952,1000,BASE-124,BASE-20),
       (1066,1114,BASE-136,BASE-20),(1130,1170,BASE-82,BASE-18),(1182,1216,BASE-110,BASE-18)]
for x0,x1,y0,y1 in bands:
    x=x0+6
    while x < x1-8:
        y=y0
        while y < y1:
            if random.random() < .42:
                win.append(rect(x, y, 4, 6, rx=1, opacity=round(random.uniform(.35,1),2)))
            y+=13
        x+=11
windows=''.join(win)

defs = f'''<svg class="artdefs" width="0" height="0" aria-hidden="true" focusable="false">
  <defs>
    <!-- Najdi triangular lattice, after the crenellations and carved plaster
         of Riyadh's mud-brick architecture -->
    <pattern id="najdi" width="48" height="28" patternUnits="userSpaceOnUse">
      <polygon points="24,3 45,25 3,25" fill="none" stroke="currentColor" stroke-width="1.5"/>
      <polygon points="0,25 12,9 24,25" fill="currentColor" opacity=".22"/>
      <polygon points="24,25 36,9 48,25" fill="currentColor" opacity=".22"/>
      <circle cx="24" cy="25" r="1.6" fill="currentColor"/>
    </pattern>
    <g id="sky-far" fill="currentColor">{''.join(far)}</g>
    <g id="sky-near" fill="currentColor">{''.join(near)}</g>
    <g id="sky-win" fill="currentColor">{windows}</g>
  </defs>
</svg>'''

print(defs)
