import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'
import { profile } from '../../data/profile.js'

const QUICK_LINKS = ['about', 'skills', 'projects', 'experience', 'contact']

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-base-950/60">
      <div className="section !py-12 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-lg font-semibold text-ink-100">
            Yousaf<span className="gradient-text">.dev</span>
          </p>
          <p className="mt-3 text-sm text-ink-500 max-w-xs leading-relaxed">{profile.tagline}</p>
        </div>

        <div>
          <p className="text-xs font-mono uppercase tracking-wide text-ink-500 mb-4">Quick Links</p>
          <ul className="space-y-2">
            {QUICK_LINKS.map((id) => (
              <li key={id}>
                <button
                  onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-ink-300 hover:text-accent-cyan transition-colors capitalize"
                >
                  {id}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-mono uppercase tracking-wide text-ink-500 mb-4">Connect</p>
          <div className="flex items-center gap-4 text-ink-300">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent-cyan transition-colors text-lg" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent-cyan transition-colors text-lg" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-accent-cyan transition-colors text-lg" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="section !py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-700">© {year} {profile.name}. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs text-ink-500 hover:text-accent-cyan transition-colors"
          >
            Back to top <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}
