import { useState } from 'react'
import BrandMark from './BrandMark'

export default function HeroController() {
  const [broken, setBroken] = useState(false)

  return (
    <button
      type="button"
      className={`hero-pad ${broken ? 'is-broken' : ''}`}
      onClick={() => setBroken(true)}
      aria-pressed={broken}
      aria-label={broken ? 'İDEONİX' : 'Press the controller to reveal the İDEONİX logo'}
    >
      <span className="hero-pad-stage">
        <svg viewBox="0 0 400 250" className="hero-pad-art" fill="none" aria-hidden="true">
          <defs>
            <clipPath id="hero-pad-clip-l">
              <rect x="0" y="0" width="201" height="250" />
            </clipPath>
            <clipPath id="hero-pad-clip-r">
              <rect x="199" y="0" width="201" height="250" />
            </clipPath>
          </defs>

          <g className="hero-pad-piece piece-shoulder-l">
            <path
              d="M96 30h68c4 0 7 3 7 7v8H89v-8c0-4 3-7 7-7Z"
              fill="#14141c"
              stroke="currentColor"
              strokeWidth="1.7"
            />
          </g>
          <g className="hero-pad-piece piece-shoulder-r">
            <path
              d="M236 30h68c4 0 7 3 7 7v8H229v-8c0-4 3-7 7-7Z"
              fill="#14141c"
              stroke="currentColor"
              strokeWidth="1.7"
            />
          </g>

          <g className="hero-pad-piece piece-body-l" clipPath="url(#hero-pad-clip-l)">
            <path
              d="M200 74c-14 0-28-14-40-24-12-10-28-14-58-14-38 0-64 20-72 52-8 36-2 70 20 94 18 22 34 40 52 52 20 14 44 8 56-14 10-18 18-38 32-50 6-6 10-8 10-8s4 2 10 8c14 12 22 32 32 50 12 22 36 28 56 14 18-12 34-30 52-52 22-24 28-58 20-94-8-32-34-52-72-52-30 0-46 4-58 14-12 10-26 24-40 24Z"
              fill="#101014"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
          </g>
          <g className="hero-pad-piece piece-body-r" clipPath="url(#hero-pad-clip-r)">
            <path
              d="M200 74c-14 0-28-14-40-24-12-10-28-14-58-14-38 0-64 20-72 52-8 36-2 70 20 94 18 22 34 40 52 52 20 14 44 8 56-14 10-18 18-38 32-50 6-6 10-8 10-8s4 2 10 8c14 12 22 32 32 50 12 22 36 28 56 14 18-12 34-30 52-52 22-24 28-58 20-94-8-32-34-52-72-52-30 0-46 4-58 14-12 10-26 24-40 24Z"
              fill="#101014"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
          </g>

          <g className="hero-pad-piece piece-dpad" fill="currentColor">
            <rect x="108" y="86" width="13" height="40" rx="3" />
            <rect x="95" y="99" width="39" height="13" rx="3" />
            <rect x="111.5" y="102.5" width="6" height="6" rx="1" fill="#8d7cba" />
          </g>

          <g className="hero-pad-piece piece-stick-l">
            <circle cx="148" cy="152" r="13" fill="#0c0c10" stroke="currentColor" strokeWidth="1.7" />
            <circle cx="148" cy="152" r="3.5" fill="#8d7cba" />
          </g>
          <g className="hero-pad-piece piece-stick-r">
            <circle cx="246" cy="162" r="13" fill="#0c0c10" stroke="currentColor" strokeWidth="1.7" />
            <circle cx="246" cy="162" r="3.5" fill="#8d7cba" />
          </g>

          <circle className="hero-pad-piece piece-btn-n" cx="286" cy="92" r="7.5" stroke="currentColor" strokeWidth="1.7" />
          <circle className="hero-pad-piece piece-btn-e" cx="306" cy="112" r="7.5" stroke="currentColor" strokeWidth="1.7" />
          <circle className="hero-pad-piece piece-btn-s" cx="286" cy="132" r="7.5" fill="#8d7cba" />
          <circle className="hero-pad-piece piece-btn-w" cx="266" cy="112" r="7.5" stroke="currentColor" strokeWidth="1.7" />

          <rect
            className="hero-pad-piece piece-core"
            x="186"
            y="108"
            width="28"
            height="14"
            rx="4"
            stroke="#8d7cba"
            strokeWidth="1.4"
          />
        </svg>
        <BrandMark className="hero-pad-mark" />
      </span>
    </button>
  )
}
