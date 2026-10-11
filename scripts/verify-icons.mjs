import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// Validates App Router's favicon.ico as well as public/favicon.ico without any dependencies.
// Next.js' ICO decoder requires embedded PNGs to use RGBA (PNG colour type 6).
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const appPath = path.join(root, 'src/app/favicon.ico')
const publicPath = path.join(root, 'public/favicon.ico')
const appIcon = fs.readFileSync(appPath)
const publicIcon = fs.readFileSync(publicPath)

function validateIco(file, name) {
  function fail(message) { throw new Error(`${name}: ${message}`) }
  if (file.length < 22 || file.readUInt16LE(0) !== 0 || file.readUInt16LE(2) !== 1) {
    fail('not a valid ICO header')
  }
  const count = file.readUInt16LE(4)
  if (count < 2) fail('expected multiple favicon sizes')
  const sizes = []
  for (let i = 0; i < count; i++) {
    const directory = 6 + i * 16
    if (directory + 16 > file.length) fail(`truncated directory entry ${i}`)
    const width = file[directory] || 256
    const height = file[directory + 1] || 256
    const size = file.readUInt32LE(directory + 8)
    const offset = file.readUInt32LE(directory + 12)
    const png = file.subarray(offset, offset + size)
    if (png.length !== size) fail(`truncated PNG at ${width}px`)
    if (!png.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10]))) {
      fail(`entry ${width}px is not an embedded PNG`)
    }
    if (png.toString('ascii', 12, 16) !== 'IHDR') fail(`entry ${width}px has no IHDR`)
    if (png.readUInt32BE(16) !== width || png.readUInt32BE(20) !== height) {
      fail(`incorrect dimensions for ${width}px icon`)
    }
    if (png[24] !== 8 || png[25] !== 6) {
      fail(`entry ${width}px must be 8-bit RGBA PNG (colour type 6); got bit depth ${png[24]}, colour type ${png[25]}`)
    }
    sizes.push(width)
  }
  console.log(`PASS ${name}: ${count} RGBA PNG entries (${sizes.join(', ')}px)`)
}

validateIco(appIcon, 'src/app/favicon.ico')
validateIco(publicIcon, 'public/favicon.ico')
if (!appIcon.equals(publicIcon)) throw new Error('App Router and public favicons must be identical')
console.log('PASS both favicon.ico copies are identical')
