import React from 'react';
import { createContext, } from 'react';

const ProductContext = createContext(
	{products: [], setProducts: () => {}});

export default ProductContext;