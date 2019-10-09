import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const scholarModels = [
  {
    id: 'alskjdf',
    scholarName: 'Junaid',
    moreInfo: '18294-2938',
    century: 7
  },
  {
    id: 'alsdfskjdf',
    scholarName: 'Junaid Choudhary',
    moreInfo: '182942-2938',
    century: 8
  },
  {
    id: 'asdf3o823j2',
    scholarName: 'Aman',
    moreInfo: '1-2938',
    century: 9
  },
  {
    id: '2938ujsldkjf',
    scholarName: 'Rohit',
    moreInfo: '18294',
    century: 10
  },
  {
    id: 'alskjdf',
    scholarName: 'Junaid',
    moreInfo: '18294-2938',
    century: 11
  },
  {
    id: 'alsdfsasdfkjdf',
    scholarName: 'Junaid Choudhary',
    moreInfo: '182942-2938',
    century: 12
  },
  {
    id: 'asdf3o8223dsf3j2',
    scholarName: 'Aman',
    moreInfo: '1-2938',
    century: 13
  },
  {
    id: '2938ujs234dsfldkjf',
    scholarName: 'Rohit',
    moreInfo: '18294',
    century: 14
  },
  {
    id: 'alskjsdf234wqeqdf',
    scholarName: 'Junaid',
    moreInfo: '18294-2938',
    century: 15
  },
  {
    id: 'alsdfs234ekjdf',
    scholarName: 'Junaid Choudhary',
    moreInfo: '182942-2938',
    century: 16
  },
  {
    id: 'asd23f3o823j2',
    scholarName: 'Aman',
    moreInfo: '1-2938',
    century: 17
  },
  {
    id: '2938asdujsldkjf',
    scholarName: 'Rohit',
    moreInfo: '18294',
    century: 18
  },
  {
    id: '29xvxlc38asdujsldkjf',
    scholarName: 'Rohit',
    moreInfo: '18294',
    century: 19
  },
  {
    id: '29kxkcnvl38asdujsldkjf',
    scholarName: 'Rohit',
    moreInfo: '18294',
    century: 20
  },
  {
    id: '2938asdulkjsdjsldkjf',
    scholarName: 'Rohit',
    moreInfo: '18294',
    century: 21
  }
]

const IndexPage = ({ data }) => {
  const { gcmsdata: { scholarModels } } = data
  console.log('data', scholarModels)
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h2>Centuries</h2>
        {
          scholarModels.map(scholar => <a href={`#${scholar.id}`}><p>{scholar.century}</p></a>)
        }
      </div>
      <div>
        <h2>Scholar Data</h2>
        {
          scholarModels.map(scholarData => {
            const { scholarName, id, birthYear, deathYear, century } = scholarData
            return (
              <div id={id}>
                <h1>{scholarName}</h1>
                <p>{birthYear}</p>
                <p>{deathYear}</p>
              </div>
            )
          })
        }
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    gcmsdata {
      scholarModels {
        id
        scholarName
        birthYear
        deathYear
        century
      }      
    }
  }
`