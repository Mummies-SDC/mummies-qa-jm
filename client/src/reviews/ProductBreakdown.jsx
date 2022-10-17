import React from 'react';
import { useProductsContext } from '../Context.jsx';

function ProductBreakdown() {
  const { characteristics, loading } = useProductsContext();
  if (loading) {
    return <div />;
  }
  const characteristicComponents = Object.entries(characteristics).map((indvChar) => (
    <li key={indvChar[1].id}>
      <div>{indvChar[0]}</div>
      <div>{indvChar[1].value}</div>
    </li>
  ));
  return (
    <div>
      {characteristicComponents}
    </div>
  );
}

export default ProductBreakdown;
