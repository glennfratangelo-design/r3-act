import { PageHead, SignBand } from '../components/Shared.jsx'

const ins = [
  ['Backstop fees', 'Paid only for workers let go without a certified transition plan'],
  ['Buyback surcharge', 'When layoffs come alongside stock repurchases'],
  ['Existing workforce funds', 'WIOA dislocated-worker money and H-1B training grants, coordinated, not new taxes'],
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
        No new general tax, and no tax on AI investment, research or computing. Companies with a certified transition plan pay their own workers' retraining directly through Retraining Accounts. The trust fund covers everyone else, from backstop fees, coordinated workforce money and money the program earns back.
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
              <li><strong>Automatic adjustment.</strong> If the reserve drops below 12 months, the backstop fee rate rises by up to 10 points for the next year. Above 24 months, the rate falls and the extra money buys more training seats.</li>
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
            <h2>One layoff, two paths</h2>
            <p>A company affects 500 workers averaging $90,000 a year. It redeploys 200 of them and lets 300 go.</p>
            <div className="tablewrap">
              <table>
                <thead><tr><th>Path A: certified transition plan</th><th className="num">Amount</th></tr></thead>
                <tbody>
                  <tr><td>Retraining Accounts: 300 workers × $90,000 × 25%</td><td className="num">$6,750,000</td></tr>
                  <tr><td>Retraining Account credit (25%)</td><td className="num">−$1,687,500</td></tr>
                  <tr><td>Backstop fee</td><td className="num">$0</td></tr>
                  <tr className="total"><td>Net cost, all of it going to the workers' retraining</td><td className="num">$5,062,500</td></tr>
                </tbody>
              </table>
            </div>
            <div className="tablewrap">
              <table>
                <thead><tr><th>Path B: no plan, with a stock buyback that year</th><th className="num">Amount</th></tr></thead>
                <tbody>
                  <tr><td>Base fee: 300 workers × $90,000 × 50%</td><td className="num">$13,500,000</td></tr>
                  <tr><td>With the buyback surcharge (75% rate)</td><td className="num">$20,250,000</td></tr>
                  <tr><td>Less $8 million spent on retraining (credit capped at half the fee)</td><td className="num">−$8,000,000</td></tr>
                  <tr className="total"><td>Fee owed to the trust fund</td><td className="num">$12,250,000</td></tr>
                </tbody>
              </table>
            </div>
            <p>Path B costs more than twice as much as Path A. Severance is owed on both paths and isn't shown.</p>
            <p className="muted">Illustrative. Rates are starting points for modeling.</p>
          </div>
        </div>
      </section>
      <SignBand />
    </>
  )
}
