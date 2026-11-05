import { useState } from 'react'
import { PageHead, PetitionButtons } from '../components/Shared.jsx'
import { CHANGE_ORG_URL, CONTACT_EMAIL } from '../config.js'

function CopyBox({ label, text }) {
  const [state, setState] = useState('Copy')
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); setState('Copied') }
    catch { setState('Select and copy') }
    setTimeout(() => setState('Copy'), 2500)
  }
  return (
    <div className="copybox">
      <p style={{ whiteSpace: 'pre-line' }}>{text}</p>
      <div className="row">
        <span className="mono">{label}</span>
        <button type="button" className="btn small" onClick={copy}>{state}</button>
      </div>
    </div>
  )
}

const SITE = 'https://r3act.up.railway.app'
const PETITION = CHANGE_ORG_URL

export default function Partners() {
  const signOn = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('R3 Act: our organization wants to help')}&body=${encodeURIComponent('Organization:\nYour name and role:\nHow you would like to help (share with members, sign on as a supporting organization, policy feedback, other):\n')}`
  return (
    <>
      <PageHead kicker="For organizations" title="Partner kit">
        Trades councils, workforce boards, business groups, unions, colleges and think tanks: everything here is free to use as is or edit. You don't need to endorse the full proposal to share it with your members.
      </PageHead>

      <section className="s">
        <div className="wrap">
          <ol className="steps">
            <li>
              <div className="measure">
                <h2>Why groups like yours are joining</h2>
                <p><strong>Trades and apprenticeship programs</strong> get a funded pipeline of motivated adults, with wages paid during training.</p>
                <p><strong>Employers and business groups</strong> get a retrain-first approach that doesn't restrict AI adoption. Only profitable companies with 1,000+ employees are covered, and smaller firms get hiring credits.</p>
                <p><strong>Workers and unions</strong> get a real path to the next job instead of a notice and a severance check.</p>
                <p><strong>Taxpayers</strong> pay nothing. The fund comes from a fee on AI layoffs where companies chose not to retrain.</p>
              </div>
            </li>
            <li>
              <div className="measure">
                <h2>Three ways to help</h2>
                <p><strong>1. Share it with your members.</strong> Drop the newsletter blurb or a social post below into your next update.</p>
                <p><strong>2. Sign on as a supporting organization.</strong> We list supporters by name when we take the proposal to members of Congress and state legislators from both parties.</p>
                <p><strong>3. Tell us what to fix.</strong> Policy feedback from people who run training and hiring programs is exactly what this needs.</p>
                <div className="actions">
                  <a className="btn" href={signOn}>Tell us you're in</a>
                  <a className="btn small" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </div>
              </div>
            </li>
            <li>
              <div className="measure">
                <h2>Newsletter blurb</h2>
                <CopyBox label="About 110 words" text={`The R3 Act: Retain, Retrain, Redeploy

As AI changes jobs, a new citizen proposal asks large, profitable companies to keep people working instead of just issuing layoff notices. Before an AI layoff, companies with 1,000+ employees would offer affected workers open roles first and fund retraining, with tax credits that make retaining people cheaper than cutting them. Workers who do leave would be paid while they train for the trades and other in-demand jobs, or get capital to start a business. It's funded by a fee on AI layoffs, not taxpayers.

Read the plan: ${SITE}
Add your name: ${PETITION}`} />
              </div>
            </li>
            <li>
              <div className="measure">
                <h2>Social posts</h2>
                <CopyBox label="Short post" text={`AI should make American workers stronger, not leave them behind. The R3 Act asks big, profitable companies to Retain, Retrain and Redeploy workers before AI layoffs, funded by a layoff fee, not taxpayers. Sign: ${PETITION}`} />
                <CopyBox label="Trades angle" text={`We need electricians, HVAC techs, welders and lineworkers. Millions of workers are about to need a new path. The R3 Act connects the two, with paid retraining funded by companies that lay off for AI. Sign: ${PETITION}`} />
                <CopyBox label="Business angle" text={`Pro-tech, pro-business, pro-work: the R3 Act doesn't slow AI down. It makes retraining cheaper than layoffs for the largest companies and gives smaller employers a pipeline of trained workers. ${SITE}`} />
              </div>
            </li>
            <li>
              <div className="measure">
                <h2>Images</h2>
                <p>Free to use in newsletters, slides and social posts.</p>
                <p><a href="/og.jpg" download="r3-act-card.jpg"><img src="/og.jpg" alt="Retain. Retrain. Redeploy. The R3 Act, with the three steps and the petition link." style={{ width: '100%', border: '1px solid var(--rule)' }} /></a></p>
                <div className="actions">
                  <a className="btn small" href="/og.jpg" download="r3-act-card.jpg">Download image (1200 × 630)</a>
                </div>
              </div>
            </li>
            <li>
              <div className="measure">
                <h2>Add your own name</h2>
                <p>Individual signatures from your staff and members carry weight too.</p>
                <PetitionButtons />
              </div>
            </li>
          </ol>
        </div>
      </section>
    </>
  )
}
