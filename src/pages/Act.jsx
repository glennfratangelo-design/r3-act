import { useState } from 'react'
import { PageHead, PetitionButtons } from '../components/Shared.jsx'
import { CONTACT_EMAIL } from '../config.js'

function CopyBox({ label, text }) {
  const [state, setState] = useState('Copy')
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); setState('Copied') }
    catch { setState('Select and copy') }
    setTimeout(() => setState('Copy'), 2500)
  }
  return (
    <div className="copybox">
      <p>{text}</p>
      <div className="row">
        <span className="mono">{label}</span>
        <button type="button" className="btn small" onClick={copy}>{state}</button>
      </div>
    </div>
  )
}

export default function Act() {
  const url = typeof window !== 'undefined' ? window.location.origin : ''
  return (
    <>
      <PageHead kicker="Take action" title="Four ways to help">
        A bill gets introduced when members of Congress hear from their own constituents and from groups they trust. Each of these takes five minutes or less.
      </PageHead>
      <section className="s">
        <div className="wrap">
          <ol className="steps">
            <li>
              <div className="measure">
                <h2>Sign the petition</h2>
                <p>Add your name and ZIP code. Signatures are grouped by congressional district, so your own representative's office sees how many of their constituents have signed.</p>
                <PetitionButtons />
              </div>
            </li>
            <li>
              <div className="measure">
                <h2>Contact your members of Congress</h2>
                <p>A short, personal message works best. Say you live in the district or state, and ask them to introduce or cosponsor the Retain, Retrain, Redeploy Act.</p>
                <div className="actions" style={{ marginBottom: 12 }}>
                  <a className="btn small" href="https://www.house.gov/representatives/find-your-representative" target="_blank" rel="noopener noreferrer">Find your representative</a>
                  <a className="btn small" href="https://www.senate.gov/senators/senators-contact.htm" target="_blank" rel="noopener noreferrer">Find your senators</a>
                </div>
                <CopyBox label="Message to your member" text={`I'm a constituent writing to ask you to introduce or cosponsor the Retain, Retrain, Redeploy (R3) Act. It would require large, profitable companies to retrain workers before replacing them with AI, and to pay for the transition of anyone they let go into the trades and other jobs we need filled. It uses no general taxpayer money. Details: ${url}`} />
              </div>
            </li>
            <li>
              <div className="measure">
                <h2>Share it</h2>
                <p>Most signatures come from people who heard about it from someone they know.</p>
                <CopyBox label="Short post" text={`Companies replacing workers with AI should retrain them first, and pay to retrain the ones they let go. Not taxpayers. The R3 Act: keep workers, build the trades. Sign and add your ZIP: ${url}`} />
                <CopyBox label="Text to a friend" text={`Someone wrote a proposal for a law on AI layoffs: big profitable companies would have to retrain people before replacing them, and pay to retrain them into the trades if they don't. It takes 30 seconds to sign, and your ZIP code routes it to your own representative: ${url}`} />
              </div>
            </li>
            <li>
              <div className="measure">
                <h2>Bring it to your union or association</h2>
                <p>Endorsements from building trades unions, contractor associations and workforce groups carry the most weight with both parties. If you belong to one, forward this site to your local's leadership or your association's government affairs staff.</p>
                <p>Congressional offices and organizations can reach the author directly at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </>
  )
}
