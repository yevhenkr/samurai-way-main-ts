import { SVGProps, memo } from 'react'

export const PersonIcon = memo((props: SVGProps<SVGSVGElement>) => (
  <svg
    fill={'var(--color-light-100)'}
    height={16}
    viewBox={'0 0 14 14'}
    width={16}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    {/*<g clipPath={'url(#clip0_6693_1154)'} fill={'var(--color-light-100)'}>*/}
      <path
        d={
          'M8 7.334a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.334zm0-4a1.333 1.333 0 1 1 0 2.667 1.333 1.333 0 0 1 0-2.666zM8 8.668a4.667 4.667 0 0 0-4.667 4.666.667.667 0 1 0 1.334 0 3.333 3.333 0 0 1 6.666 0 .667.667 0 1 0 1.334 0A4.667 4.667 0 0 0 8 8.668z'
        }
      />
    {/*</g>*/}
    <defs>
      <clipPath id={'clip0_6693_1154'}>
        <path d={'M0 0h16v16H0z'} fill={'var(--color-light-100)'} />
      </clipPath>
    </defs>
  </svg>
))
