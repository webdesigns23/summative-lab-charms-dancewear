import React from 'react';
import { useState } from "react"
import usePatchRequest from '../hooks/usePatchRequest';

export default function UpdatePrice() {
  // Usage of the hook with an initial URL or pass it directly to the patchData function
  const { data, error, patchData } = usePatchRequest();

  const handleUpdate = () => {
    patchData(`http://localhost:3000/products/${id}`, { key: 'newValue' });
  };

  return (
    <div>
	<h1>Update Product Price</h1>
      <button onClick={handleUpdate}>Update Resource</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <p>Updated Data: {JSON.stringify(data)}</p>}
    </div>
  );
};





