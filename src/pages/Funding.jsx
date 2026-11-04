import { PageHead, SignBand } from '../components/Shared.jsx'

const ins = [
  ['Displacement fees', 'Paid for each worker let go instead of redeployed'],
  ['Buyback surcharge', 'When layoffs come alongside stock repurchases'],
  ['Repayments and returns', 'Startup loans and investments paid back'],
  ['Earnings recapture', 'Part of the higher taxes graduates pay once re-employed'],
  ['Private match', 'Employer, foundation and trade-group money'],
]
const outs = [
  ['Income support', 40],
  ['Training', 30],
  ['Startup capital', 15],
  ['Trades capacity', 10],
  ['Data and administration', 5],
]

export default function Funding() {
  return (
    <>
      <PageHead kicker="Title IX · Self-funding" title="It pays for itself">
        No general tax revenue. Each source of money is tied to AI layoffs or to money the program earns back, so funding rises when layoffs rise and falls when companies keep their people.
      </PageHead>

      <section className="s">
        <div className="wrap">
          <div className="flow" role="img" aria-label="Five revenue sources flow into the Workforce Transition Trust Fund, which spends 40% on income support, 30% on training, 15% on startup capital, 10% on trades capacity and 5% on data and administration.">
            <div className="flow-col">
              <div className="mono muted">Money in</div>
              {ins.map(([n, d]) => <div className="flow-in" key={n}><b>{n}</b><span>{d}</span></div>)}
            </div>
            <div className="flow-arrow" aria-hidden="true">→</div>
            <div className="flow-fund">
              <div className="mono">Dedicated trust fund</div>
              <b>Workforce Transition Trust Fund</b>
              <span>18-month reserve · can't be moved to other programs · run through regional employer, union and college partnerships</span>
            </div>
            <div className="flow-arrow" aria-hidden="true">→</div>
            <div className="flow-col">
              <div className="mono muted">Money out · share of each dollar</div>
              {outs.map(([n, p]) => (
                <div className="flow-out" key={n}>
                  <div className="flow-out-row"><b>{n}</b><span>{p}%</span></div>
                  <div className="flow-bar"><div style={{ width: `${p * 2.5}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="s">
        <div className="wrap sec">
          <div className="label mono">Solvency</div>
          <div className="measure">
            <h2>Rules that keep it solvent</h2>
            <ul>
              <li><strong>Reserve target.</strong> The fund holds 18 months of projected spending.</li>
              <li><strong>Automatic adjustment.</strong> If the reserve drops below 12 months, the fee rate rises by up to 10 points for the next year. Above 24 months, the rate falls and the extra money buys more training seats.</li>
              <li><strong>Startup bridge.</strong> Treasury lends up to $5 billion of start-up money, the way it lends to state unemployment funds today, repaid with interest from fee revenue within seven years.</li>
              <li><strong>Protected benefits.</strong> If the reserve ever falls below six months, wage insurance and business grants are scaled back first. Income support for workers already enrolled is protected.</li>
              <li><strong>Firewall.</strong> The money can't be moved to other programs and doesn't depend on annual appropriations, so it can't expire the way Trade Adjustment Assistance did in 2022.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="s">
        <div className="wrap sec">
          <div className="label mono">Example</div>
          <div className="measure">
            <h2>One layoff, worked through</h2>
            <p>A company lays off 500 workers averaging $90,000 a year and redeploys 200 of them, below the 60% safe harbor.</p>
            <div className="tablewrap">
              <table>
                <thead><tr><th>Step</th><th className="num">Amount</th></tr></thead>
                <tbody>
                  <tr><td>Base fee: 300 workers × $90,000 × 50%</td><td className="num">$13,500,000</td></tr>
                  <tr><td>With a stock buyback that year (75% rate)</td><td className="num">$20,250,000</td></tr>
                  <tr><td>Less $8 million spent on certified retraining</td><td className="num">−$8,000,000</td></tr>
                  <tr className="total"><td>Fee owed</td><td className="num">$12,250,000</td></tr>
                </tbody>
              </table>
            </div>
            <p className="muted">Illustrative. Rates are starting points for modeling.</p>
          </div>
        </div>
      </section>
      <SignBand />
    </>
  )
}
