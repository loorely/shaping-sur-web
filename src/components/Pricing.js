import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Pricing = ({ data }) => (
  <div className="columns">
    {data.map(price => (
      <div key={price.plan} className="column">
        <section className="section">
          <h4 className="has-text-centered has-text-weight-semibold">
            {price.plan}
          </h4>
          <h2 className="is-size-1 has-text-weight-bold has-text-primary has-text-centered">
            ${price.price}
          </h2>
          <p className="has-text-weight-semibold has-text-centered">{price.description}</p>
          <ul>
            {price.items.map(item => (
              <li key={item} className="is-size-5">
                {item}
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', flex: 1, justifyContent: 'center', paddingTop: '2rem', paddingLeft: '2rem', paddingRight: '2rem' }}>
            {price.disable ?
              (<a className="button is-large is-link" disabled href={price.link}
                style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
                Comprar
          </a>) :
              (<a className="button is-large is-link" href={price.link}
                style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
                Comprar
              </a>)}
          </div>
        </section>
      </div>
    ))}
  </div>
)

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default Pricing
