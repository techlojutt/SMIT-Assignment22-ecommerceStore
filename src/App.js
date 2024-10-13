import react from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {fetchProduct} from './store/slices/productSlice';


function App() {
   const products = useSelector(store=>store.productSlice.products)
   const dispatch = useDispatch();
    console.log('products in comp', products)

   const onClickGetProducts = () => {
      dispatch(fetchProduct());
   }

  return (
    <div className="App">
      <button onClick={onClickGetProducts}>get Products</button>
      {products?.map((product) =>{
        return (<div style={{borderBottom:'2px solid black'}}>
          <h1>{product.title}</h1>
          <img style={{width:'300px'}} src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.category}</p>
        </div>)
      })}
    </div>
  );
}

export default App;
