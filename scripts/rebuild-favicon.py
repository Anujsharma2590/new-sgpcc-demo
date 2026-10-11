#!/usr/bin/env python3
"""Regenerate both ICO files from public/logo.png using Pillow (python -m pip install Pillow).

Unlike a normal Pillow ICO save, this explicitly embeds RGBA PNGs in every ICO slot.
Next.js requires embedded PNG colour type 6, not the RGB colour type 2.
"""
from pathlib import Path
from io import BytesIO
from struct import pack
from PIL import Image

root=Path(__file__).resolve().parent.parent
source=Image.open(root/'public/logo.png').convert('RGBA')
sizes=(16,32,48,64,128,256)
pngs=[]
for size in sizes:
    out=BytesIO()
    source.resize((size,size), Image.Resampling.LANCZOS).convert('RGBA').save(out,format='PNG',compress_level=9)
    data=out.getvalue()
    assert data[25] == 6, f'{size}px PNG must be RGBA, not colour type {data[25]}'
    pngs.append(data)

header=pack('<HHH',0,1,len(sizes))
offset=6+len(sizes)*16
entries=[]
for size,data in zip(sizes,pngs):
    entries.append(pack('<BBBBHHII',size%256,size%256,0,0,1,32,len(data),offset))
    offset+=len(data)
ico=header+b''.join(entries)+b''.join(pngs)
for name in ('src/app/favicon.ico','public/favicon.ico'):
    target=root/name
    target.write_bytes(ico)
    print(f'Wrote {target.relative_to(root)} ({len(ico)} bytes)')
