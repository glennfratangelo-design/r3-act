import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { CHANGE_ORG_URL, ACTION_NETWORK_URL, CONTACT_EMAIL } from '../config.js'

export function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) { el.scrollIntoView(); return }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  return (
    <nav className="nav" aria-label="Main">
      <div className="wrap">
        <Link to="/" className="brand" aria-label="The R3 Act, home">
          <b>R<span>3</span> Act</b>
          <small>Retain · Retrain · Redeploy</small>
        </Link>
        <button className="menu-btn" aria-expanded={open} aria-controls="navlinks" onClick={() => setOpen(o => !o)}>
          {open ? 'Close' : 'Menu'}
        </button>
        <div className={`links${open ? ' open' : ''}`} id="navlinks">
          <NavLink to="/bill">The bill</NavLink>
          <NavLink to="/funding">Funding</NavLink>
          <NavLink to="/employers">Employers</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/act" className="cta">Sign</NavLink>
        </div>
      </div>
    </nav>
  )
}

export function PetitionButtons({ size = '' }) {
  const [note, setNote] = useState(false)
  const btn = (url, label, primary) =>
    url ? (
      <a className={`btn ${primary ? 'primary' : ''} ${size}`} href={url} target="_blank" rel="noopener noreferrer">{label}</a>
    ) : (
      <button type="button" className={`btn ${primary ? 'primary' : ''} ${size}`} onClick={() => setNote(true)}>{label}</button>
    )
  return (
    <>
      <div className="actions">
        {btn(CHANGE_ORG_URL, 'Sign the petition', true)}
        {btn(ACTION_NETWORK_URL, 'Get updates', false)}
      </div>
      {note && (
        <p className="notice" role="status">
          The petition opens this week. To hear when it's live, email <strong>{CONTACT_EMAIL}</strong> with "R3" in the subject line.
        </p>
      )}
    </>
  )
}

export function SignBand() {
  return (
    <section className="band" aria-labelledby="sign-title">
      <div className="wrap">
        <div className="mono">Final section · Enactment</div>
        <h2 id="sign-title">Add your name.</h2>
        <p>Ask Congress to introduce the R3 Act in the new Congress that begins in January 2027, with Democratic and Republican co-leads. Add your ZIP code when you sign: staff count the signatures that come from their own district.</p>
        <PetitionButtons />
      </div>
    </section>
  )
}

export function CostBars() {
  return (
    <div className="compare" role="img" aria-label="Net cost to the company for one $120,000 worker with 10 years of service: laying off costs $106,000; retaining and retraining for six months costs $61,000.">
      <div className="mono muted">Net cost to the company · one $120,000 worker, 10 years' service</div>
      <div className="bar layoff">
        <div className="name">Lay off<small>severance + displacement fee</small></div>
        <div className="track"><div className="fill">$106,000</div></div>
      </div>
      <div className="bar retain">
        <div className="name">Retain and retrain<small>6 months' wages + training, less credit</small></div>
        <div className="track"><div className="fill">$61,000</div></div>
      </div>
      <p className="note">Illustrative figures from the proposal. When the company retrains, it also keeps a trained employee with ten years of experience.</p>
    </div>
  )
}

export function PageHead({ kicker, title, children }) {
  return (
    <header className="pagehead">
      <div className="wrap">
        <div className="mono muted">{kicker}</div>
        <h1>{title}</h1>
        {children && <p>{children}</p>}
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="cols">
          <div>
            <h4>About</h4>
            <p>The R3 Act is an independent citizen proposal by Glenn Fratangelo of Pennington, New Jersey. It is not affiliated with any member of Congress, party or organization. Figures are illustrative and come from the full proposal.</p>
            <p>Contact: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
          </div>
          <div>
            <h4>The proposal</h4>
            <ul>
              <li><Link to="/bill">The bill, title by title</Link></li>
              <li><Link to="/funding">How it pays for itself</Link></li>
              <li><Link to="/employers">What employers get</Link></li>
              <li><Link to="/faq">Questions</Link></li>
              <li><Link to="/act">Take action</Link></li>
            </ul>
          </div>
          <div>
            <h4>Sources</h4>
            <ul>
              <li><a href="https://www.cbo.gov/system/files/2026-02/51316-2026-02-unemployment.pdf">CBO: TAA expired June 2022</a></li>
              <li><a href="https://fortune.com/2026/04/21/america-silent-army-jll-report-skilled-trades-job-shortage-cost/">Fortune on JLL trades report</a></li>
              <li><a href="https://www.warner.senate.gov/public/index.cfm/2025/11/warner-hawley-to-introduce-bipartisan-legislation-to-track-number-of-jobs-lost-to-ai">Warner–Hawley Clarity Act</a></li>
              <li><a href="https://policyrisk.com/behind-the-curtain/legislation/S3339">AI Workforce PREPARE Act</a></li>
              <li><a href="https://www.governance.ai/research-paper/how-congress-is-approaching-ais-labor-market-impacts">GovAI: Congress and AI's labor impacts</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
