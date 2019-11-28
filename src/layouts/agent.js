import React from "react"
import Helmet from 'react-helmet'

import Header from "../components/header/header"
import Hero from "../components/hero/hero"
import Services from "../components/services/services"
import Cta from "../components/cta/cta"
import Portfolio from "../components/portfolio/portfolio"
import Questions from "../components/questions/questions"
import Clients from "../components/clients/clients"
import Contact from "../components/contact/contact"
import Footer from "../components/footer/footer"

import { replaceTokens } from "../utils/helpers"

const TopAgent = ({ data, pageType, siteData, pageData, photoData }) => {
    
  const cityDescription = JSON.parse(data.cityDescription.cityDescription)
  const fullName = data.greaterAreaName
  const city = data.cityName
  const { creaStatsPage, provinceCode, associationImages, ctaImages, areaPhoneNumber, subRegions } = data
  let { pageTitle, metaDescription, structuredData } = siteData
  const contactImage = data.contactImage.fluid

  let tokensToReplace

  if (pageType === "top-real-estate-agents") {

    tokensToReplace = {
          "{city}": city,
          "{fullName}": fullName,
          "{prov}": provinceCode.toLowerCase(),
          "{realtorWord}": "Real Estate Agent",
          "{realtorsWord}": "Real Estate Agents",
          "{possessiveWord}": "Real Estate Agent’s",
          "{creaStatsPage}": creaStatsPage
      }

  } else {

      tokensToReplace = {
          "{city}": city,
          "{fullName}": fullName,
          "{prov}": provinceCode.toLowerCase(),
          "{realtorWord}": "REALTOR®",
          "{realtorsWord}": "REALTORS®",
          "{possessiveWord}": "REALTOR®’s",
          "{creaStatsPage}": creaStatsPage
      }       
  }

  pageTitle = replaceTokens(pageTitle, tokensToReplace) + " | KEYLO.CA"
  metaDescription = replaceTokens(metaDescription, tokensToReplace)
  structuredData = JSON.parse(replaceTokens(structuredData))

  let cta1Data = pageData.Cta[0].content.content
  cta1Data = JSON.parse(replaceTokens(cta1Data, tokensToReplace))

  let cta2Data = pageData.Cta[1].content.content
  cta2Data = JSON.parse(replaceTokens(cta2Data, tokensToReplace))

  let cta1Text = cta1Data.content[0].content[0].value
  let cta2Text = cta2Data.content[0].content[0].value

  return (
    <>
      <Helmet>
        <meta name="google-site-verification" content="vkgWzSu_aW4JRq3UECEn7mwf-XQ2dRi7IRNbhhb_1EI" />
        <script>
          {`
            (function (w, d, s, l, i) {
              w[l] = w[l] || []; w[l].push({
                  'gtm.start':
                      new Date().getTime(), event: 'gtm.js'
              }); var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                      'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-N2QHGX9');
          `}
        </script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-137238312-1"></script>
        <script>{`(function (w, d, t, r, u) { var f, n, i; w[u] = w[u] || [], f = function () { var o = { ti: "25041961" }; o.q = w[u], w[u] = new UET(o), w[u].push("pageLoad") }, n = d.createElement(t), n.src = r, n.async = 1, n.onload = n.onreadystatechange = function () { var s = this.readyState; s && s !== "loaded" && s !== "complete" || (f(), n.onload = n.onreadystatechange = null) }, i = d.getElementsByTagName(t)[0], i.parentNode.insertBefore(n, i) })(window, document, "script", "//bat.bing.com/bat.js", "uetq");`}</script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'UA-137238312-1', { 'optimize_id': 'GTM-56PGF4H' });
            gtag('config', 'AW-780214171');
          `}
        </script>
        <style>
          {`
            .async-hide {
                opacity: 0 !important
            }
          `}
        </style>
        <script>
          {`(function (a, s, y, n, c, h, i, d, e) {
                s.className += ' ' + y; h.start = 1 * new Date;
                h.end = i = function () { s.className = s.className.replace(RegExp(' ?' + y), '') };
                (a[n] = a[n] || []).hide = h; setTimeout(function () { i(); h.end = null }, c); h.timeout = c;
            })(window, document.documentElement, 'async-hide', 'dataLayer', 4000,
                { 'GTM-56PGF4H': true });
          `}
        </script>
        <script>
          {`! function (f, b, e, v, n, t, s) {
                if (f.fbq) return;
                n = f.fbq = function () {
                    n.callMethod ?
                        n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = '2.0';
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s)
            }(window, document, 'script',
                'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1082345221917316');
            fbq('track', 'PageView');
          `}
        </script>
        <meta charset="utf-8"/>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <Header provinceCode={provinceCode.toLowerCase()} city={city.toLowerCase()} logo={photoData.logo} />
      <Hero pageType={pageType} name={city} fullName={fullName} headerImage={data.headerImage.fluid} />
      <Services pageType={pageType} name={city} fullName={fullName} sectionData={pageData.Services} />
      <Cta
        text={cta1Text}
        image={ctaImages[0].fluid}
        position={"right"}
      />
      {subRegions && <Portfolio
        realtorsWord={tokensToReplace["{realtorsWord}"]}
        fullName={fullName}
        description={cityDescription}
        images={subRegions}
      />}
      {subRegions && <Cta
        text={cta2Text}
        image={ctaImages[1].fluid}
        position={"left"}
      />}
      <Questions pageType={pageType} name={city} creaStatsPage={creaStatsPage} provinceCode={provinceCode} sectionData={pageData.Questions} />
      {associationImages && <Clients name={city} images={associationImages} />}
      <Contact name={city} areaPhoneNumber={areaPhoneNumber} city={city} provinceCode={provinceCode} image={contactImage} />
      <Footer areaPhoneNumber={areaPhoneNumber} />
    </>
  )
}

export default TopAgent
