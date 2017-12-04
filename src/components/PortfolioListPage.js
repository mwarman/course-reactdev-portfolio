import React from 'react';
import { Link } from 'react-router-dom';

export default class PortfolioListPage extends React.Component  {

  state = {
    portfolios: [{
      id: 1,
      name: 'My First Portfolio'
    },{
      id: 2,
      name: 'Some Awesome Portfolio'
    }]
  };

  render() {
    return (
      <div>
        <h3>Portfolios</h3>
        <ol>
          {
            this.state.portfolios.map((portfolio) => (
              <li key={portfolio.id}>
                <Link
                  to={`/portfolio/${portfolio.id}`}
                >
                  {portfolio.name}
                </Link>
              </li>
            ))
          }
        </ol>
      </div>
    );
  }

}
