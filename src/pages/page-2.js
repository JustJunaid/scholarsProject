import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="col-md-6">
        <div className="divider">Enable Submit</div>
        <div data-provide="recaptcha" data-enable="#submit-btn">
            <div style={{width: 304, height: 78}}>
                <div>
                    <iframe title="feedback" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Ldaf0MUAAAAAHdsMv_7dND7BSTvdrE6VcQKpM-n&amp;co=aHR0cDovL3RoZXRoZW1lLmlvOjgw&amp;hl=en&amp;v=Zy-zVXWdnDW6AUZkKlojAKGe&amp;size=normal&amp;cb=umdk2gmryitz" width="304" height="78" role="presentation" name="a-ula9mofwd54q" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox">
                    </iframe>
                </div>
                <textarea id="g-recaptcha-response-3" name="g-recaptcha-response" className="g-recaptcha-response" style={{width: 250, height: 40, border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: 0, resize: 'none', display: 'none'}}>
                </textarea>
            </div>
        </div>
        <br />
        <button id="submit-btn" className="btn btn-primary" type="submit" disabled="">Submit</button>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
