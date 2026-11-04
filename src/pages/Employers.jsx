import { PageHead, SignBand } from '../components/Shared.jsx'

export default function Employers() {
  return (
    <>
      <PageHead kicker="Title X · Employer incentives" title="What employers get">
        Under R3, keeping a worker through retraining costs a company clearly less than laying them off. The act also helps with problems large employers already have: hiring for data-center construction, a patchwork of state rules, and public backlash.
      </PageHead>

      <section className="s">
        <div className="wrap sec">
          <div className="label mono">The math</div>
          <div>
            <h2>Retain vs. lay off</h2>
            <p className="measure">One $120,000 worker with 10 years of service, retrained on the job for six months.</p>
            <div className="tablewrap">
              <table>
                <thead><tr><th>Cost</th><th className="num">Lay off</th><th className="num">Retain and retrain</th></tr></thead>
                <tbody>
                  <tr><td>Wages during transition</td><td className="num">—</td><td className="num">$60,000</td></tr>
                  <tr><td>Training</td><td className="num">—</td><td className="num">$25,000</td></tr>
                  <tr><td>Severance floor (Title II)</td><td className="num">$46,000</td><td className="num">—</td></tr>
                  <tr><td>Displacement fee (50%)</td><td className="num">$60,000</td><td className="num">—</td></tr>
                  <tr><td>Retention credit (40% of wages)</td><td className="num">—</td><td className="num">−$24,000</td></tr>
                  <tr className="total"><td>Net cost to the company</td><td className="num">$106,000</td><td className="num">$61,000</td></tr>
                </tbody>
              </table>
            </div>
            <p className="measure">Retention comes out about $45,000 cheaper per worker, and the company keeps a trained employee who knows its business. That is before counting what it would cost to recruit and onboard replacements later.</p>
          </div>
        </div>
      </section>

      <section className="s">
        <div className="wrap sec">
          <div className="label mono">Incentives</div>
          <div>
            <h2>Six reasons to sign on</h2>
            <ol className="provisions">
              <li><div><h3>Retention credit</h3><p>40% of wages paid while a worker retrains on the job, up to $25,000 per worker for up to 12 months. Paid from the trust fund, not general revenue.</p></div></li>
              <li><div><h3>Bigger tax-free training</h3><p>The limit on tax-free employer-paid education rises from $5,250 a year to $25,000 for workers in a certified retraining plan.</p></div></li>
              <li><div><h3>Your own trades pipeline</h3><p>Companies can steer retraining credits to apprenticeships for the electricians, lineworkers and HVAC technicians their data centers can't find.</p></div></li>
              <li><div><h3>In-kind contributions count</h3><p>Cloud computing, AI tools, certification programs and instructors provided at cost count toward retraining credits and the private match.</p></div></li>
              <li><div><h3>Federal contracting</h3><p>Companies certified as R3-compliant get extra evaluation points on federal AI and cloud contracts.</p></div></li>
              <li><div><h3>Less legal and reputational risk</h3><p>A certified redeployment plan counts as evidence of good faith in layoff litigation. It also gives a public answer to the question of what happens to the people AI replaces.</p></div></li>
            </ol>
          </div>
        </div>
      </section>

      <section className="s">
        <div className="wrap sec">
          <div className="label mono">Founding partners</div>
          <div className="measure">
            <h2>Shape it early</h2>
            <p>We're looking for two or three large AI adopters to pilot the retention credit voluntarily before the law takes effect, and to help write the list of shortage occupations. Companies that join early get to shape the rules. If you're an employer interested in that, get in touch through the contact address below.</p>
          </div>
        </div>
      </section>
      <SignBand />
    </>
  )
}
