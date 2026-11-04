import { PageHead, SignBand } from '../components/Shared.jsx'

const qa = [
  ['Does this stop companies from using AI?', 'No. Companies can adopt any AI they want. The act only requires that the people AI replaces aren\'t left on their own, and that the companies profiting from the change pay for the transition.'],
  ['Will it raise my taxes?', 'No. It runs on fees paid by large, profitable companies that lay off workers for AI. No general taxpayer money goes into the trust fund, and it keeps its own reserve.'],
  ['Which companies does it cover?', 'Employers with 1,000 or more U.S. employees that are profitable or buying back stock. Small businesses are not covered, and companies in genuine financial distress are exempt.'],
  ['How do you know a layoff was caused by AI?', 'A layoff is presumed AI-related if it comes within 18 months of deploying AI in the same work, or if the company publicly credited AI with the savings. The company can rebut that with evidence, and federal auditors check how layoffs are classified.'],
  ['Won\'t companies just move jobs overseas?', 'Moving the work offshore after deploying AI counts as a covered layoff, and so does reclassifying employees as contractors.'],
  ['Can a company avoid the fee?', 'Yes, by doing the right thing. Every dollar spent retraining workers comes off the fee, and a company that redeploys most of its affected workers pays a much lower rate. The point is to make keeping people the cheaper choice.'],
  ['What jobs would people retrain for?', 'Any job with a real employer behind it, with extra support for shortage occupations such as electricians, HVAC technicians, plumbers, welders, lineworkers, nurses and advanced manufacturing technicians. The list is updated every year to follow demand.'],
  ['What if I want to start a business instead?', 'You can take part of your transition support as startup money, and get access to interest-free SBA-backed loans and matched investment.'],
  ['Why would both parties support it?', 'For Republicans, it is pro-worker and pro-trades, uses no general taxpayer money and pays employers to keep their people. For Democrats, it protects workers and holds companies accountable. It builds on bipartisan bills already in Congress that would track AI layoffs.'],
  ['Is this a real bill?', 'Not yet. It is a detailed citizen proposal. The goal is to have it introduced in the 120th Congress, with Democratic and Republican co-leads, and drafted into legal text by congressional counsel.'],
  ['Who wrote it?', 'Glenn Fratangelo, a technology product marketer in Pennington, New Jersey. It isn\'t funded by or affiliated with any party, campaign or company.'],
]

export default function Faq() {
  return (
    <>
      <PageHead kicker="Questions" title="Straight answers" />
      <section className="s">
        <div className="wrap measure">
          {qa.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        </div>
      </section>
      <SignBand />
    </>
  )
}
