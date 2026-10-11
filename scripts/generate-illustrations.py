"""Draw original logo-palette conceptual industrial scenes with Pillow (not stock photography).
Run: python scripts/generate-illustrations.py. Replace the WebP files with original project photos at any time.
"""
from PIL import Image, ImageDraw, ImageFilter
from pathlib import Path
import math, random
BASE=Path(__file__).resolve().parent.parent/'public/images/generated'
BASE.mkdir(parents=True,exist_ok=True)
INK='#22254E'; INDIGO='#444791'; MAROON='#A1282F'; GOLD='#F6C100'; ORANGE='#FCA512'; BLUE='#0C9AD3'; TEAL='#32B088'; CREAM='#FBFAF7'; GREEN='#11AA34'; LIGHT='#E9ECF6'; SLATE='#526073'
W,H=1200,900

def make(name,scenes,hero=False):
 global W,H,d
 W,H=(1600,1100) if hero else (1200,900)
 a=Image.new('RGB',(W,H)); pix=a.load()
 for y in range(H):
  t=y/H;rgb=(int(251+t*3),int(250-t*8),int(247-t*20))
  for x in range(W):pix[x,y]=rgb
 d=ImageDraw.Draw(a)
 # every composition uses the same restrained motif and visual lighting
 for k in range(4):
  x,y=int(W*(.63+.11*k)),int(H*(.11+.16*k))
  d.rounded_rectangle((x,y,x+110,y+110),radius=22,outline='#E4E4F0',width=5)
 scenes()
 # soft warm bottom line, and controlled edge highlight
 d.rectangle((0,H-11,W,H),fill=GOLD)
 target=BASE/name
 a.save(target,'WEBP',quality=86,method=6)
 print(name,target.stat().st_size)

def shadow(box):d.ellipse(box,fill='#CCD0DF')
def ground():
 d.polygon([(0,int(H*.65)),(W,int(H*.56)),(W,H),(0,H)],fill='#E7EAF3')
 for i in range(5):
  x=int(i*W/5);d.line([(W//2,int(H*.6)),(x,H)],fill='#D3D9E8',width=5)
def truck(x=120,y=430,s=1):
 # front-facing generic delivery truck, logos and text absent
 def pt(x0,y0):return (int(x+x0*s),int(y+y0*s))
 d.rounded_rectangle((*pt(60,80),*pt(490,255)),radius=int(24*s),fill=INDIGO)
 d.rounded_rectangle((*pt(80,94),*pt(320,223)),radius=int(15*s),fill='#D9DFEF')
 d.polygon([pt(360,152),pt(467,152),pt(508,197),pt(508,268),pt(360,268)],fill=ORANGE)
 d.polygon([pt(373,161),pt(456,161),pt(478,191),pt(373,191)],fill='#F6FBFF')
 d.rectangle((*pt(25,250),*pt(523,286)),fill=INK)
 for q in [140,439]:
  xp,yp=pt(q,279);r=int(44*s);d.ellipse((xp-r,yp-r,xp+r,yp+r),fill=INK);d.ellipse((xp-r//2,yp-r//2,xp+r//2,yp+r//2),fill='#F8F9FC')

def bags():
 for row in range(3):
  for col in range(4):
   x=95+col*111+row*14;y=360+row*105
   d.rounded_rectangle((x,y,x+101,y+106),radius=13,fill=('#FCE29A' if col%2 else '#DCDFF0'),outline='#7D85AC',width=4)
   d.line([(x+18,y+25),(x+82,y+25)],fill='#B4A47C',width=4)

def steel():
 shadow((45,710,1120,845))
 for i in range(22):
  y=200+i*24;x=90+i*9
  c=INDIGO if i%4 else BLUE
  d.line([(x,y+275),(x+810,y-30)],fill=c,width=17)
  d.ellipse((x-11,y+265,x+11,y+286),fill=INK)
  if i%4==0:d.line([(x+280,y+170),(x+310,y+158)],fill=ORANGE,width=19)
 d.line([(100,710),(1070,330)],fill=INK,width=6)

def aac():
 shadow((70,710,1090,840))
 for r in range(5):
  for c in range(5):
   x=97+c*180+(r%2)*45;y=664-r*100
   d.rounded_rectangle((x,y,x+173,y+96),radius=10,fill='#E1E6EC' if r%2 else '#D3DBE5',outline='#A5ACBC',width=4)
   d.line([(x+12,y+20),(x+164,y+20)],fill='#EFF2F5',width=6)

def plywood():
 shadow((115,700,1110,824))
 for r in range(9):
  z=r*26
  d.polygon([(185+z,680-z),(730+z,426-z),(1066+z,575-z),(514+z,836-z)],fill=('#F5BE65' if r%2 else '#D18D44'),outline=INK)
  d.polygon([(185+z,680-z),(514+z,836-z),(514+z,849-z),(185+z,694-z)],fill=MAROON)

def chemicals():
 shadow((100,720,1110,820))
 for x,y,w,h,c in [(150,265,240,450,BLUE),(430,345,220,366,TEAL),(703,310,260,408,ORANGE)]:
  d.rounded_rectangle((x,y,x+w,y+h),radius=40,fill=c,outline=INDIGO,width=8)
  d.rectangle((x,y+60,x+w,y+100),fill=INK)
  d.rounded_rectangle((x+w*.23,y-47,x+w*.77,y+1),radius=10,fill=INK)
  d.rounded_rectangle((x+45,y+200,x+w-45,y+270),radius=12,fill='#F7F9FC')

def insulation():
 shadow((105,720,1140,836))
 for x,y,w in [(140,295,360),(440,380,350),(740,290,305)]:
  d.rounded_rectangle((x+85,y,x+w,y+420),radius=45,fill=TEAL,outline=INDIGO,width=9)
  d.ellipse((x,y,x+190,y+420),fill=BLUE,outline=INK,width=8)
  d.ellipse((x+44,y+85,x+149,y+330),fill='#F7FAFD',outline='#96ABC7',width=9)
  d.ellipse((x+70,y+144,x+125,y+270),fill=INDIGO)

def warehouse(mode='epoxy'):
 # architectural vanishing point. Substrate colouring changes by system.
 d.rectangle((0,0,W,int(H*.63)),fill='#EDF2F8')
 d.polygon([(0,int(H*.21)),(W,int(H*.14)),(W,int(H*.58)),(0,int(H*.64))],fill='#DDE3EF')
 for x in range(65,W,190):
  d.line([(x,200),(x,580)],fill='#7486AC',width=13)
  d.line([(x,200),(x+150,130)],fill='#A1AEC9',width=8)
 d.line([(0,260),(W,185)],fill=INDIGO,width=15)
 for x in range(120,W,260):d.rounded_rectangle((x,155,x+128,178),radius=11,fill='#FBF5DC')
 floor=('#81A7CD' if mode=='epoxy' else '#ADC2C0' if mode=='pu' else '#A8B7C7')
 d.polygon([(0,int(H*.62)),(W,int(H*.55)),(W,H),(0,H)],fill=floor)
 for i in range(8):
  d.line([(W//2,int(H*.57)),(i*W//7,H)],fill='#DDE7EF',width=5)
 for i in range(4):
  d.line([(0,int(H*(.66+i*.08))),(W,int(H*(.63+i*.08)))],fill='#D6E2EB',width=5)
 if mode=='pu':
  for x in (145,445,755,1030):
   d.rectangle((x,310,x+80,580),fill='#A3B1BA');d.ellipse((x,290,x+80,330),fill='#D8DEE6');d.line([(x+40,315),(x+40,565)],fill='#75899B',width=12)
 if mode=='uncrete':
  for x in (140,410,700,1000):d.rectangle((x,270,x+22,540),fill='#9CAEC0')
  d.polygon([(480,700),(730,660),(850,730),(605,770)],fill=INK)
  for i in range(10):d.line([(510+i*25,690-i*4),(625+i*25,760-i*4)],fill='#D3DBE6',width=4)

def applicator():
 warehouse('epoxy')
 d.ellipse((480,235,630,386),fill=INK)
 d.polygon([(490,365),(645,378),(690,580),(445,604)],fill=INDIGO)
 d.polygon([(480,590),(552,595),(525,770),(460,773)],fill=INK)
 d.polygon([(615,588),(695,593),(732,769),(655,774)],fill=INK)
 d.line([(635,468),(840,611)],fill=INK,width=18)
 d.line([(840,608),(1030,608)],fill=INK,width=12)
 d.rounded_rectangle((985,590,1120,630),radius=18,fill=ORANGE)
 d.ellipse((436,365,641,409),fill=GOLD)

def macro():
 d.rectangle((0,0,W,H),fill='#4482A6')
 d.polygon([(0,0),(W,0),(W,int(H*.32)),(0,int(H*.60))],fill='#679DB5')
 d.polygon([(0,int(H*.6)),(W,int(H*.32)),(W,H),(0,H)],fill='#286D9C')
 rand=random.Random(73129)
 for _ in range(450):
  x=rand.randrange(W);y=rand.randrange(H);r=rand.randrange(2,10);c=rand.choice(['#A9D5E0','#D9E6E9','#87BDC9','#ACCBCD','#D4E8EC'])
  d.ellipse((x,y,x+r,y+r//2+1),fill=c)
 d.line([(0,int(H*.42)),(W,int(H*.18))],fill='#CAE1E8',width=7)

def hero():
 warehouse('epoxy')
 d.rounded_rectangle((95,125,810,555),radius=70,fill='#F3F1E5',outline='#D0D3E2',width=8)
 # three products within staged panels
 d.rounded_rectangle((130,170,380,500),radius=32,fill='#ECDAAA')
 d.rounded_rectangle((409,170,775,500),radius=32,fill='#E2E3F5')
 d.polygon([(160,400),(235,266),(340,401),(270,463)],fill=GOLD)
 for i in range(7):d.line([(455+i*34,406),(600+i*17,231)],fill=INDIGO,width=14)
 d.rounded_rectangle((830,205,1390,540),radius=60,fill='#EBE8D7')
 d.polygon([(875,400),(1120,265),(1340,378),(1080,510)],fill=ORANGE,outline=MAROON)
 d.line([(890,414),(1080,520),(1350,384)],fill=INK,width=12)

assets={
 'hero-composite.webp':(hero,True),'cement-site.webp':(lambda:(ground(),truck()),False),
 'steel-rebar.webp':(lambda:(ground(),steel()),False),'aac-blocks.webp':(lambda:(ground(),aac()),False),
 'shuttering-plywood.webp':(lambda:(ground(),plywood()),False),
 'construction-chemicals.webp':(lambda:(ground(),chemicals()),False),
 'insulation-roll.webp':(lambda:(ground(),insulation()),False),
 'epoxy-warehouse.webp':(lambda:warehouse('epoxy'),False),
 'pu-food-plant.webp':(lambda:warehouse('pu'),False),
 'uncrete-cold-storage.webp':(lambda:warehouse('uncrete'),False),
 'floor-application.webp':(applicator,False),
 'coloured-floor-closeup.webp':(macro,False),
}
if __name__=='__main__':
 for fn,(drawer,is_hero) in assets.items():make(fn,drawer,is_hero)
