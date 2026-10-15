import { ImageResponse } from 'next/og'

export const alt = 'RichBoyZ — We protect. We build. We secure.'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          color: '#f7f7f7',
          backgroundColor: '#0b0b0b',
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            color: '#ff4545',
            fontSize: 22,
            letterSpacing: '0.28em',
          }}
        >
          <div style={{ width: 12, height: 12, backgroundColor: '#ff4545' }} />
          RICHBOYZ // ONLINE SAFETY CREW
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 112,
              fontWeight: 700,
              letterSpacing: '-0.07em',
              lineHeight: 1,
            }}
          >
            RichBoyZ
          </div>
          <div
            style={{
              marginTop: 28,
              color: '#b8b8b8',
              fontSize: 30,
              letterSpacing: '0.04em',
            }}
          >
            We protect. We build. We secure.
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255,255,255,0.2)',
            paddingTop: 24,
            color: '#ff4545',
            fontSize: 18,
            letterSpacing: '0.16em',
          }}
        >
          <span>DEVELOPMENT / SECURITY / COMMUNITY</span>
          <span>RICHBOYS.LIFE</span>
        </div>
      </div>
    ),
    size,
  )
}
