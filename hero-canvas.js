import { prepare, layoutNextLine } from 'https://esm.sh/@chenglou/pretext@latest'

const HERO_TEXT = "I design the\nexperience.\nI build the system."

let mouse = { x: -1, y: -1 }
let prepared = null
let animFrame = null

const canvas = document.getElementById('hero-canvas')
const ctx = canvas.getContext('2d')
const domLayer = document.querySelector('.hero-dom-layer')

function resize() {
  canvas.width = window.innerWidth * devicePixelRatio
  canvas.height = window.innerHeight * devicePixelRatio
  ctx.scale(devicePixelRatio, devicePixelRatio)

  const fontSize = Math.max(32, Math.min(72, window.innerWidth * 0.05))
  const font = `600 ${fontSize}px Inter, Pretendard, sans-serif`
  ctx.font = font
  prepared = prepare(HERO_TEXT, font)
  draw()
}

function draw() {
  const W = window.innerWidth
  const H = window.innerHeight
  ctx.clearRect(0, 0, W, H)

  const splitX = mouse.x > 0 ? mouse.x : W * 0.5
  const maxWidth = Math.max(80, splitX - 40)
  const fontSize = Math.max(32, Math.min(72, W * 0.05))
  const lineHeight = fontSize * 1.25

  ctx.font = `600 ${fontSize}px Inter, Pretendard, sans-serif`
  ctx.fillStyle = getComputedStyle(document.documentElement)
    .getPropertyValue('--text-primary').trim() || '#111111'

  const cursor = { segmentIndex: 0, graphemeIndex: 0 }
  let y = H / 2 - lineHeight * 1.5

  while (true) {
    const line = layoutNextLine(prepared, cursor, maxWidth)
    if (!line) break

    const distFromMouse = mouse.x > 0 ? Math.abs(y - mouse.y) : 9999
    const charSpacingFactor = Math.max(0.4, 1 - (1 / (1 + distFromMouse * 0.01)))
    ctx.letterSpacing = `${(charSpacingFactor - 1) * fontSize * 0.05}px`
    ctx.fillText(line.text, 40, y)

    cursor.segmentIndex = line.end.segmentIndex
    cursor.graphemeIndex = line.end.graphemeIndex
    y += lineHeight
  }

  const ratio = mouse.x > 0 ? splitX / W : 0.5
  domLayer.dataset.splitRatio = ratio < 0.35 ? 'low' : ratio < 0.65 ? 'mid' : 'high'
  domLayer.style.clipPath = mouse.x > 0 ? `inset(0 0 0 ${splitX}px)` : 'none'
}

window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX
  mouse.y = e.clientY
  if (animFrame) cancelAnimationFrame(animFrame)
  animFrame = requestAnimationFrame(draw)
})
window.addEventListener('mouseleave', () => {
  mouse = { x: -1, y: -1 }
  draw()
})
window.addEventListener('resize', resize)
window.addEventListener('touchmove', (e) => {
  const t = e.touches[0]
  mouse.x = t.clientX
  mouse.y = t.clientY
  draw()
}, { passive: true })

resize()
