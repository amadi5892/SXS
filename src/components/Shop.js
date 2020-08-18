import React from 'react';
import Card from './Card';
import Products from './Products';

const createProduct = (Product) => {
        return(
            <div className="organize">
                <Card 
                key={Product.id}
                item={Product.item}
                price={Product.price}
                description={Product.description}
                />
            </div>
            
        )
        
}

const Shop = () => {

    return(
        <div>
            <h1>Welcome to the Shop!</h1>

            <div className="showcase">
                {Products.map(createProduct)}
            </div>
        </div>
    )
}

export default Shop;