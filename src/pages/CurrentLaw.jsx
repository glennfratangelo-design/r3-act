import { Link } from 'react-router-dom'
import { PageHead, SignBand } from '../components/Shared.jsx'

const rows = [
  { where: 'New York', status: 'In effect since March 2025', what: 'WARN filings include a checkbox asking whether "technological innovation or automation" contributed to a layoff. Filers who check it must name the technology.', lesson: 'Not one of the more than 160 employers that filed in the first year checked the box. Self-reporting with no definition and no penalty doesn\'t work.', src: 'https://natlawreview.com/article/new-york-warn-act-no-ai-related-layoffs-reported-first-year-adding-ai-related' },
  { where: 'California', status: 'SB 951 · effective Jan. 1, 2027', what: 'When a mass layoff is caused "in whole or in substantial part" by AI or automation, the notice must open with "This notice is for a technology displacement" and list the jobs, the functions automated and the type of AI. The state publishes summaries.', lesson: 'R3 adopts the same "in whole or in substantial part" standard, and California\'s idea of a permanent stop to hiring for a role because of AI.', src: 'https://www.fisherphillips.com/en/insights/insights/california-employers-will-soon-need-to-say-when-ai-causes-a-mass-layoff' },
  { where: 'Connecticut', status: 'In effect Oct. 1, 2026', what: 'Layoffs that qualify under WARN must state whether they relate to the employer\'s use of AI or other technological change.', lesson: 'Disclosure only. No duty to retrain.', src: 'https://www.ebglaw.com/workforce-bulletin/connecticut-joins-growing-number-of-states-regulating-workplace-ai-and-mandating-notice-for-certain-ai-uses-as-well-as-imposing-new-disclosure-requirements-for-certain-reductions-in-force' },
  { where: 'New Jersey', status: 'NJ WARN since April 2023 · AI bill S1840 pending', what: '90 days\' notice and mandatory severance of one week per year of service for any mass layoff. S1840 would add an AI Impact Disclosure for AI-driven layoffs.', lesson: 'R3 keeps New Jersey\'s stronger protections and counts state-required severance toward its own floor.', src: 'https://pub.njleg.gov/Bills/2026/S2000/1840_I1.HTM' },
  { where: 'Other states', status: 'Pending', what: 'New York\'s Automation Displacement Protection Act (A9533), Illinois SB 3571, and bills in Pennsylvania and Minnesota.', lesson: 'Momentum is building state by state. A federal floor heads off a 50-state patchwork.', src: 'https://www.multistate.ai/updates/vol-108-ai-workforce-displacement-legislation' },
  { where: 'Federal WARN Act', status: 'In effect', what: '60 days\' notice for mass layoffs at employers with 100 or more workers. No reason has to be given.', lesson: 'R3 extends notice to 120 days for AI layoffs at covered companies.', src: null },
  { where: 'Great American AI Act', status: 'Bipartisan House draft · June 2026', what: 'From Reps. Jay Obernolte (R-CA) and Lori Trahan (D-MA): layoff notices must say when AI was a "substantial factor," describe the AI, estimate the share of job losses due to AI, and list retraining steps.', lesson: 'R3 uses the same trigger and the same percentage estimate, then attaches duties and funding.', src: 'https://www.fisherphillips.com/en/insights/insights/congress-proposes-first-comprehensive-federal-ai-framework' },
  { where: 'Clarity Act and PREPARE Act', status: 'Pending in the Senate', what: 'Quarterly reporting of AI-related layoffs (Warner–Hawley), and AI flagged in layoff notices (Hickenlooper, Husted, Marshall).', lesson: 'R3 adopts their reporting format, so companies file once.', src: 'https://www.warner.senate.gov/public/index.cfm/2025/11/warner-hawley-to-introduce-bipartisan-legislation-to-track-number-of-jobs-lost-to-ai' },
]

const indicators = [
  ['The company said so', 'It credited AI with savings or headcount cuts in that work, in earnings calls, SEC filings, investor materials, press releases or internal business cases.'],
  ['Timing', 'AI was deployed, piloted or bought for that work within 18 months before, or 6 months after, the layoff.'],
  ['Task substitution', '30% or more of the eliminated jobs\' core duties are now done by AI, or by remaining staff using it.'],
  ['No backfill', 'The role isn\'t refilled while the work continues to be done with AI.'],
  ['State filing', 'The company named AI or technology as a factor in any state layoff filing. This counts automatically.'],
]

export default function CurrentLaw() {
  return (
    <>
      <PageHead kicker="The law today · November 2026" title="Disclosure isn't enough">
        Three states now make companies say when AI is behind a mass layoff, and Congress is considering the same. No law anywhere requires a company to retrain anyone first, or to pay for the transition. That's the gap R3 fills.
      </PageHead>

      <section className="s">
        <div className="wrap">
          <div className="tablewrap">
            <table className="lawtable">
              <thead><tr><th>Where</th><th>Status</th><th>What it requires</th><th>What R3 takes from it</th></tr></thead>
              <tbody>
                {rows.map(r => (
                  <tr key={r.where}>
                    <td><strong>{r.src ? <a href={r.src} target="_blank" rel="noopener noreferrer">{r.where}</a> : r.where}</strong></td>
                    <td className="muted">{r.status}</td>
                    <td>{r.what}</td>
                    <td>{r.lesson}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="s" id="test">
        <div className="wrap sec">
          <div className="label mono">Title I</div>
          <div>
            <h2>How R3 decides a layoff is AI-related</h2>
            <p className="measure">The standard is the one California adopted and the federal draft uses: AI caused the layoff <em>in whole or in substantial part</em>. Rather than trusting a checkbox, R3 presumes AI was a substantial factor whenever any one of these is true:</p>
            <ol className="provisions">
              {indicators.map(([h, p]) => <li key={h}><div><h3>{h}</h3><p>{p}</p></div></li>)}
            </ol>
            <div className="measure" style={{ marginTop: 20 }}>
              <p><strong>Companies can rebut it</strong> with documented evidence that the layoff would have happened anyway, such as a site closure, a lost contract or a real drop in demand.</p>
              <p><strong>Mixed causes are split.</strong> The company files a good-faith estimate of the share of jobs due to AI, and R3's duties and fee apply to that share.</p>
              <p><strong>A senior officer signs it</strong> under penalty of perjury, the way executives already certify financial statements. Federal audits and whistleblower protections back it up.</p>
              <p><strong>It's a floor, not a ceiling.</strong> States can keep stronger rules, like New Jersey's mandatory severance. One R3 filing covers what the New York, California and Connecticut notices ask for.</p>
              <p><Link to="/bill#coverage">Read Title I in full →</Link></p>
            </div>
          </div>
        </div>
      </section>
      <SignBand />
    </>
  )
}
