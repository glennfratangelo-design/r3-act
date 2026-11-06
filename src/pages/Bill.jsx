import { Link } from 'react-router-dom'
import { PageHead, SignBand } from '../components/Shared.jsx'

const titles = [
  { id: 'coverage', n: 'Title I', name: 'Coverage and the AI-layoff test', lead: 'Only large, profitable employers are covered, and only layoffs caused in whole or in substantial part by AI. That is judged by evidence, not a checkbox.', items: [
    ['Covered employer', '1,000 or more U.S. employees, counted across the whole corporate group so a company can\'t split into smaller entities to avoid it.'],
    ['Profitable', 'Positive pre-tax income in either of the two prior fiscal years, or any stock buyback or dividend increase in the prior 12 months.'],
    ['Covered separation', 'A layoff, position elimination, cut in hours of more than 50%, or non-renewal of a long-term contractor. Also covered: permanently stopping hiring for a role because AI now does the work, an idea taken from California\'s SB 951.'],
    ['The standard', 'AI caused the layoff "in whole or in substantial part," the same test California adopted and the bipartisan Great American AI Act draft uses.'],
    ['Five indicators', 'AI is presumed a substantial factor if any one applies: the company credited AI with savings in that work; AI was deployed there within 18 months before or 6 months after; AI now does 30% or more of the jobs\' core duties; the role isn\'t refilled; or the company named AI in a state layoff filing.'],
    ['Rebuttal', 'A company can rebut the presumption with documented evidence the layoff would have happened anyway, such as a site closure, a lost contract or a real drop in demand.'],
    ['Mixed causes', 'The company files a good-faith estimate of the share of jobs due to AI. Duties and fees apply to that share.'],
    ['Officer certification', 'A senior officer certifies the determination under penalty of perjury, as executives already do for financial statements.'],
    ['Anti-evasion', 'Rolling layoffs are added up over 12 months. Reclassifying employees as contractors, or moving the work offshore after AI is deployed, counts as a layoff.'],
    ['Exempt', 'Companies in bankruptcy or genuine financial distress, firings for cause, and voluntary retirements.'],
    ['State law', 'R3 is a federal floor. States can keep stronger rules, such as New Jersey\'s mandatory severance, which counts toward R3\'s severance floor. One R3 filing covers what the New York, California and Connecticut notices ask for.'],
  ]},
  { id: 'duty', n: 'Title II', name: 'The duty to retain, retrain and redeploy', lead: 'Before an AI layoff, a covered company works through these steps in order and documents each one.', items: [
    ['Notice', '120 days to workers, the state workforce board and the Department of Labor, naming the AI system and the work it replaces.'],
    ['Redeploy', 'Affected workers get first call on open internal jobs, at no less than 90% of prior pay for 12 months.'],
    ['Retrain', 'Up to 12 months of company-paid training on paid time, including training to run or oversee the AI system itself.'],
    ['Transition package', 'For anyone not placed: severance of two weeks per year of service (minimum eight weeks), 12 months of subsidized health coverage, and automatic enrollment in Title V support.'],
    ['Certified transition plan (safe harbor)', 'A company that offers internal roles first, follows the steps above, and funds a Retraining Account for every worker it lets go owes no backstop fee. The safe harbor is not free: the company pays for its own workers\' transition directly.'],
    ['Retraining Account', '25% of the worker\'s prior-year pay, at least $15,000 and no more than $50,000, paid on top of severance. It belongs to the worker and covers approved training, income support while training, or startup costs.'],
  ]},
  { id: 'fee', n: 'Title III', name: 'The backstop fee', lead: 'The fee applies only when a company lays people off without a certified transition plan. It is set at about twice what the plan would have cost, so skipping the plan is always the more expensive choice.', items: [
    ['Base fee', '50% of the worker\'s prior-year pay, capped at $100,000 per worker, for each worker let go without a certified plan.'],
    ['Buyback surcharge', '25 points more when the company buys back stock within 12 months of the layoffs.'],
    ['Repeat surcharge', '15 points more for a second covered event within 24 months.'],
    ['Partial credit', 'Money a company spends retraining workers or sponsoring apprentices outside a certified plan comes off the fee, up to half of it. The full route out of the fee is the certified plan.'],
    ['Never a tax on AI', 'Nothing in the act taxes AI investment, research, computing or software. The only cost arises from letting workers go without a transition plan.'],
  ]},
  { id: 'fund', n: 'Title IV', name: 'Workforce Transition Trust Fund', lead: 'Backstop fees and coordinated workforce dollars go into a dedicated fund, spent through regional partnerships of employers, unions, community colleges and trade groups.', items: [
    ['Allocation', 'Income support 40%, training 30%, startup capital 15%, trades capacity 10%, data and administration 5%.'],
    ['Regional compacts', 'Local employers, unions, colleges and the state workforce board design training and certify providers, through the existing workforce system.'],
    ['Existing workforce money', 'Federal dislocated-worker funds under WIOA and the H-1B skills-training grants already paid for by visa fees are coordinated through the same regional compacts. No new tax.'],
    ['Matching', 'Private money put into a compact is matched 1:1.'],
    ['Pay for results', 'Training providers are paid in part only when trainees are placed and still employed a year later.'],
  ]},
  { id: 'support', n: 'Title V', name: 'Income support while retraining', lead: 'Workers get paid while they retrain, so they don\'t have to take the first job available.', items: [
    ['Allowance', '70% of prior wages for up to 12 months in approved training, extendable to 24 months for apprenticeships. 80% for training in a shortage occupation.'],
    ['Wage insurance', 'If the next job pays less, half the difference for two years, up to $20,000, at any age.'],
    ['Health coverage', 'A federal subsidy covering 80% of premiums while enrolled.'],
    ['Wraparound help', 'Childcare, transportation and relocation help, plus grants for tools and licensing fees for trades trainees.'],
  ]},
  { id: 'startup', n: 'Title VI', name: 'Startup capital', lead: 'Any displaced worker can turn their support into money to start a business.', items: [
    ['Allowance as a grant', 'Take up to 12 months of allowance as a business grant, paid in stages against a basic business plan.'],
    ['Loans', 'SBA-guaranteed loans up to $250,000, interest-free for 24 months, through community lenders.'],
    ['Co-investment', 'Private or community investment matched 1:1 up to $500,000.'],
    ['Trades first', 'Fast-track equipment financing, bonding and insurance help for workers opening their own contracting, HVAC, electrical or plumbing shop.'],
  ]},
  { id: 'trades', n: 'Title VII', name: 'Trades pipeline', lead: 'Money and people go where the country is short of workers.', items: [
    ['Shortage list', 'Published every year, nationally and by region: electricians, HVAC, plumbing, welding, lineworkers, data-center construction, nursing and care, advanced manufacturing.'],
    ['Mid-career bridges', '8 to 12 week pre-apprenticeships that credit prior experience.'],
    ['Hiring credit', '25% of first-year wages, up to $15,000, for hiring a participant into an apprenticeship or shortage job.'],
    ['Capacity', 'Pay for retiring tradespeople to teach, plus new labs and training seats wherever there are waitlists.'],
    ['Equal access', 'Registered apprenticeships and state-approved programs qualify on the same terms, judged on placement results.'],
  ]},
  { id: 'enforcement', n: 'Title VIII', name: 'Reporting and enforcement', lead: 'It builds on the quarterly AI-layoff reporting in bipartisan bills already in Congress.', items: [
    ['Reporting', 'Quarterly reports of AI layoffs, redeployments, training and fees paid, in one filing.'],
    ['Public dashboard', 'Each company\'s results published by the Department of Labor.'],
    ['Audits', 'Calling an AI layoff a "restructuring" to avoid the fee triggers the full fee plus a 50% penalty.'],
    ['Workers\' rights', 'Workers can sue for back pay if the steps were skipped, and whistleblowers are protected.'],
    ['Review', 'A government evaluation in year three, and rates reviewed every five years.'],
  ]},
  { id: 'self-funding', n: 'Title IX', name: 'Self-funding', lead: 'The program runs on company-funded Retraining Accounts, backstop fees, coordinated workforce dollars and money it earns back, not new general tax revenue.', items: [
    ['Compliance pays its own way', 'When companies use certified plans, they pay for their own workers\' retraining directly through Retraining Accounts, so the fund carries less. When they skip the plan, the backstop fee covers the cost.'],
    ['Reserve', 'The fund keeps 18 months of spending in reserve. The fee rate adjusts automatically if the reserve falls below 12 months.'],
    ['Startup bridge', 'Treasury lends start-up money, repaid with interest from fee revenue within seven years.'],
    ['Firewall', 'The money can\'t be moved to other programs and doesn\'t depend on annual appropriations.'],
  ]},
  { id: 'employers', n: 'Title X', name: 'Employer incentives', lead: 'Keeping a worker should be the cheapest option, a certified transition plan the next cheapest, and a layoff with no plan the most expensive.', items: [
    ['Retention credit', '40% of wages paid while a worker retrains on the job, up to $25,000 per worker for up to 12 months. This is the largest credit in the act, because keeping people is the outcome it wants most.'],
    ['Retraining Account credit', '25% of what a company puts into Retraining Accounts under a certified plan.'],
    ['Tax-free training', 'The tax-free limit on employer-paid education rises to $25,000 for workers in a certified retraining plan.'],
    ['Contracting', 'Certified companies get extra evaluation points on federal AI and cloud contracts.'],
    ['Good-faith presumption', 'A certified redeployment plan counts as evidence of good faith in layoff litigation.'],
  ]},
]

export default function Bill() {
  return (
    <>
      <PageHead kicker="The proposal · ten titles" title="The bill, title by title">
        Every provision of the Retain, Retrain, Redeploy Act in plain English. For how it fits with today's state and federal AI-layoff laws, see <Link to="/current-law">current law</Link>. Dollar amounts and rates are starting points for modeling and will be refined with legislative counsel.
      </PageHead>
      <div className="wrap bill-layout">
        <aside className="toc" aria-label="Titles">
          <div className="mono muted">Contents</div>
          <ol>
            {titles.map(t => <li key={t.id}><a href={`#${t.id}`}><span>{t.n.replace('Title ', '')}</span>{t.name}</a></li>)}
          </ol>
        </aside>
        <div>
          {titles.map(t => (
            <article className="title-block" id={t.id} key={t.id}>
              <div className="mono">{t.n}</div>
              <h2>{t.name}</h2>
              <p className="measure">{t.lead}</p>
              <ul className="measure">
                {t.items.map(([k, v]) => <li key={k}><strong>{k}.</strong> {v}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
      <SignBand />
    </>
  )
}
