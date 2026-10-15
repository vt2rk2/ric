export type CrewMember = {
  name: string
  discord: string
  role: string
  specialty: string
  code: string
  pfp?: string
}

export const DISCORD_INVITE = 'https://discord.gg/4wCmSsxxA2'

export const founder = {
  name: 'Ghostly',
  discord: '.vt2',
  pfp: '/pfp/ghostly.jpg' as string | undefined,
  role: 'Founder & Leader',
  bio: 'The one who started it all. Ghostly founded RichBoyZ on one rule: nobody gets blackmailed on our watch. Moves in silence, leads from the front.',
}

export const vision = {
  name: 'm3qab',
  discord: 'richspot',
    pfp: '/pfp/m3qab.webp' as string | undefined,
  role: 'The Vision',
  bio: 'The mind behind the mission. m3qab sees where RichBoyZ is headed and shapes every move the crew makes to get there.',
}

export const members: CrewMember[] = [
  { name: 'Lie', discord: '._69', role: 'Operator', specialty: 'Recon & OSINT', code: 'RBZ-01', pfp: '/pfp/lie.webp' },
  { name: 'Try', discord: 'vixst', role: 'Operator', specialty: 'Web Development', code: 'RBZ-02', pfp: '/pfp/try.webp' },
  { name: 'Nhjk', discord: '6f4i', role: 'Operator', specialty: 'Security Audits', code: 'RBZ-03', pfp: '/pfp/nhjk.webp' },
  { name: 'Alb8mi', discord: 'covenile', role: 'Operator', specialty: 'Strategy & Planning', code: 'RBZ-04', pfp: '/pfp/Alb8mi.webp' },
  { name: 'undelusion', discord: '_sex', role: 'Business Partner', specialty: 'He Knows Too Much!!', code: 'RBZ-05', pfp: '/pfp/_sex.webp' },
]
