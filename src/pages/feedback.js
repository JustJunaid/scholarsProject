import React, { createRef } from "react"
import { Link } from "gatsby"
import ReCAPTCHA from "react-google-recaptcha";

import Layout from "../components/layout"
import SEO from "../components/seo"

const FeedbackPage = () => {
  const recaptchaRef = createRef()

  const onChange = (value) => {
    console.log("Captcha value:", value)
  }

  const onSubmit = () => {
    const recaptchaValue = recaptchaRef.current.getValue();
    this.props.onSubmit(recaptchaValue);
  }

  return (
    <Layout>
      <SEO title="Page two" />
      Thiis
      <form onSubmit={onSubmit} >
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LcmirwUAAAAAHnZ7XuIbPGUlqkLw4GI7em7l5jA"
          onChange={onChange}
        />
      </form>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default FeedbackPage
