
import { createContext, useState } from "react";

export const ProductContext = createContext({
    products: [], toggleFav: (id) => {}

})



// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
   
    const[products,setProducts]=useState([{
        id: 'p1',
        title: 'Red Scarf',
        description: 'A pretty red scarf.',
        isFavorite: false
      },
      {
        id: 'p2',
        title: 'Blue T-Shirt',
        description: 'A pretty blue t-shirt.',
        isFavorite: false
      },
      {
        id: 'p3',
        title: 'Green Trousers',
        description: 'A pair of lightly green trousers.',
        isFavorite: false
      },
      {
        id: 'p4',
        title: 'Orange Hat',
        description: 'Street style! An orange hat.',
        isFavorite: false
      }])

      const toggleFavorite = productId => {
        setProducts(currentProdList => {
          const prodIndex = currentProdList.findIndex(p => p.id === productId);
          const newFavStatus = !currentProdList[prodIndex].isFavorite;
          const updatedProducts = [...currentProdList];
          updatedProducts[prodIndex] = {
            ...currentProdList[prodIndex],
            isFavorite: newFavStatus
          };
          return updatedProducts;
        });
      };
    return (
        <ProductContext.Provider value={{products:products,toggleFav: toggleFavorite} }>
          {props.children}
        </ProductContext.Provider>
    )
}