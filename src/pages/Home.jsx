import { Link } from 'react-router-dom'
import { SignBand, CostBars, PetitionButtons } from '../components/Shared.jsx'

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="wrap">
          <div className="billhead mono">
            <span>A Bill · Proposed for the 120th Congress</span>
            <span>Citizen draft · November 2026</span>
          </div>
          <h1><span>Retain.</span><span>Retrain.</span><span className="r">Redeploy.</span></h1>
          <div className="hero-grid" style={{ marginTop: 36 }}>
            <p className="purpose"><em>To require</em> profitable companies that replace workers with AI to keep and retrain them first, and to pay for the transition of anyone they let go into the trades and other jobs America can't fill. No general taxpayer money.</p>
            <div className="ticket">
              <h2>Back the bill</h2>
              <p>Sign the petition asking Congress to introduce the R3 Act with sponsors from both parties.</p>
              <PetitionButtons size="small" />
            </div>
          </div>
          <div className="facts">
            <div className="fact"><b>60 days</b><span>Notice a company owes workers before a mass layoff today, and no duty to retrain anyone.</span></div>
            <div className="fact"><b>600,000</b><span>Skilled-trades jobs posted in 2025, against about 150,000 new apprentices.</span></div>
            <div className="fact"><b>$0</b><span>General taxpayer money the R3 Act would use. The companies that profit pay.</span></div>
          </div>
        </div>
      </header>

      <section className="s" id="problem">
        <div className="wrap sec">
          <div className="label mono">Sec. 1</div>
          <div className="measure">
            <h2>The problem</h2>
            <p>Large, profitable companies are cutting staff and crediting AI. The savings go to margins and stock buybacks. The costs go to workers, their families and the public safety net.</p>
            <p>The program built for this kind of job loss, Trade Adjustment Assistance, expired in 2022 and was never renewed. New York, California and Connecticut now make companies <em>disclose</em> AI layoffs, and bills in Congress would do the same. None requires companies to do anything about them. In New York, not one employer checked the AI box in the first year. <Link to="/current-law">See the law today →</Link></p>
            <p>Meanwhile, contractors turn down work because they can't hire electricians, HVAC technicians, welders and lineworkers. Laid-off office workers have no paid path into those jobs.</p>
          </div>
        </div>
      </section>

      <section className="s" id="what">
        <div className="wrap sec">
          <div className="label mono">Sec. 2</div>
          <div>
            <h2>What the act does</h2>
            <p className="measure">It applies only to employers with 1,000 or more U.S. employees that are profitable or buying back stock, and only to layoffs where AI is a substantial factor.</p>
            <ol className="provisions">
              <li><div><h3>Try first</h3><p>120 days' notice. Laid-off workers get first call on open internal jobs at 90% or more of their pay, and up to 12 months of company-paid retraining.</p></div></li>
              <li><div><h3>Pay for who you let go</h3><p>Fund a Retraining Account for every worker let go, worth a quarter of their pay. Skip that, and a backstop fee costs about twice as much, more with stock buybacks.</p></div></li>
              <li><div><h3>Paid transitions</h3><p>Up to 24 months of income support while retraining, wage insurance if the next job pays less, and help with health coverage.</p></div></li>
              <li><div><h3>Build the trades</h3><p>Paid mid-career apprenticeships, wage support for employers who take on apprentices, and more instructors and training seats in shortage occupations.</p></div></li>
              <li><div><h3>Back new businesses</h3><p>Workers can take their support as startup money instead, with SBA-backed loans and matched investment.</p></div></li>
            </ol>
            <p style={{ marginTop: 20 }}><Link to="/bill">Read the bill, title by title →</Link></p>
          </div>
        </div>
      </section>

      <section className="s" id="cost">
        <div className="wrap sec">
          <div className="label mono">Sec. 3</div>
          <div>
            <h2>Keeping people is cheaper</h2>
            <p className="measure">A tax credit covers 40% of pay while a worker retrains on the job, up to $25,000. A certified transition plan costs less than a layoff with no plan, and nothing in the act taxes AI investment.</p>
            <CostBars />
            <p style={{ marginTop: 20 }}><Link to="/employers">See what employers get →</Link> · <Link to="/funding">How it pays for itself →</Link></p>
          </div>
        </div>
      </section>

      <section className="s" id="who">
        <div className="wrap sec">
          <div className="label mono">Sec. 4</div>
          <div>
            <h2>Who it helps</h2>
            <div className="three">
              <div className="who"><h3>Workers</h3><p>A paid path into a new career, instead of a pink slip and an unemployment check.</p></div>
              <div className="who"><h3>The trades</h3><p>A steady, funded supply of motivated mid-career apprentices, at no cost to contractors.</p></div>
              <div className="who"><h3>Employers</h3><p>Credits for keeping people, a pipeline of the technicians data centers need, and one clear national rule.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="s" id="both">
        <div className="wrap sec">
          <div className="label mono">Sec. 5</div>
          <div className="measure">
            <h2>Built for both parties</h2>
            <p><strong>For Republicans:</strong> it is pro-worker and pro-trades, uses no general taxpayer money, and pays employers to keep their people. Companies with a certified transition plan pay no fee, and AI investment is never taxed.</p>
            <p><strong>For Democrats:</strong> real protections for workers, accountability for companies profiting from layoffs, and a path into union apprenticeships and good jobs.</p>
            <p>It builds on bipartisan bills already in Congress that would track AI layoffs. Those bills measure the problem. R3 acts on it.</p>
          </div>
        </div>
      </section>

      <SignBand />
    </>
  )
}
