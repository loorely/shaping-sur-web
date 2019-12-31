import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import logo from '../img/shapingSurLogoBlanco.png'
import triangulos from '../img/Triangulos-1.png'
import summer from '../img/paraguay_summer2019.jpg'
import asuncion from '../img/ASU.png'
import buenosAires from '../img/BAIRES.png'
import rosario from '../img/ROSARIO.png'
import montevideo from '../img/MVD.png'
import cordoba from '../img/CORDOBA.png'


import tucuman from '../img/TUCUMAN.png'
import santiago from '../img/SANTIAGO.png'
import mendoza from '../img/MENDOZA.png'
import mdq from '../img/MDQ.png'
import corrientes from '../img/CORRIENTES.png'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
          backgroundPosition: `center left`,
          backgroundAttachment: `fixed`,
        }}
      >
        <div
          style={{
            display: 'flex',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <div className="content has-text-centered">
            <img
              src={logo}
              alt="Shaping Sur"
              className="logo-header"
            />
            <h3
              className="has-text-weight-bold is-size-1"
              style={{
                backgroundColor: '#35589a',
                color: 'white',
                padding: '0.5rem',
              }}
            >
              {title}
            </h3>
          </div>


        </div>
      </div>
      <section className="section section--gradient triangulo">
        <div className="column is-10 is-offset-1">
          <div className="columns content">
            <div className="column is-10"
              style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
              <div className="tile" style={{ flexGrow: 'unset' }}>
                <h1 className="title">{mainpitch.title}</h1>
              </div>
              <p className="is-size-5">{mainpitch.description}</p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="full-width-image-container"
        style={{
          backgroundImage: `url(${summer})`,
          backgroundPosition: `center left`,
          backgroundAttachment: `fixed`,
        }}
      />

      <section className="section section--gradient">
        <div className="column is-10 is-offset-1">
          <div className="columns content">
            <div className="column is-10">
              <h1 className="title">
                {heading}
              </h1>
              <p className="is-size-5">{description}</p>
            </div>
          </div>
        </div>
      </section>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'center', paddingLeft: '2rem', paddingRight: '2rem' }}>
        <Link className="button is-large is-link" to="/products">
          Inscribite →
        </Link>
      </div>

      <section className="section section--gradient">
        <div className="column is-5 is-offset-1">
          <h1 className="title">
            Organizan
        </h1>
        </div>
        <div className="column is-5 has-text-centered">
          <img
            src={asuncion}
            alt="Asuncion"
            style={{ height: '9em' }}
          />
          <img
            src={buenosAires}
            alt="Buenos Aires"
            style={{ height: '9em' }}
          />
          <img
            src={rosario}
            alt="Rosario"
            style={{ height: '9em' }}
          />
          <img
            src={montevideo}
            alt="Montevideo"
            style={{ height: '9em' }}
          />
          <img
            src={cordoba}
            alt="Cordoba"
            style={{ height: '9em' }}
          />
        </div>
        <div className="column is-5 has-text-centered">
          <img
            src={corrientes}
            alt="Corrientes"
            style={{ height: '9em' }}
          />
          <img
            src={mdq}
            alt="Mar del Plata"
            style={{ height: '9em' }}
          />
          <img
            src={mendoza}
            alt="Mendoza"
            style={{ height: '9em' }}
          />
          <img
            src={santiago}
            alt="Santiago"
            style={{ height: '9em' }}
          />
          <img
            src={tucuman}
            alt="tucuman"
            style={{ height: '9em' }}
          />
        </div>
      </section>
    </div>
  )

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
        markdownRemark(frontmatter: {templateKey: {eq: "index-page" } }) {
        frontmatter {
      title
        image {
        childImageSharp {
      fluid(maxWidth: 2048, quality: 100) {
        ...GatsbyImageSharpFluid
      }
      }
    }
    heading
    subheading
        mainpitch {
        title
          description
      }
      description
        intro {
        blurbs {
      image {
        childImageSharp {
      fluid(maxWidth: 240, quality: 64) {
        ...GatsbyImageSharpFluid
      }
      }
    }
    text
  }
  heading
  description
}
}
}
}
`
