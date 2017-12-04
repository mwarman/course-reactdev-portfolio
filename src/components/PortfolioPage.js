import React from 'react';

const PortfolioPage = (props) => (
  <div>
    <h3>Portfolio</h3>
    <p>
      You are viewing information about portfolio {props.match.params.id}.
    </p>
  </div>
);

export default PortfolioPage;
