import React from 'react'
import Checkbox from '../../shared/Checkbox/Checkbox'
import { Wrapper, Title, Array } from './ShoppingList.styles'

function ShoppingList ({title, products, onToggleProduct}) {
    return (
        <Wrapper>
            <Title>{title}:</Title>
            <Array>
                {products.map(p => (
                    <Checkbox 
                        key={p.id}
                        title={p.name} 
                        value={p.checked} 
                        onClick={() => onToggleProduct(p.id, p.checked)} 
                    />
                ))}
            </Array>
        </Wrapper>
    )
}

export default ShoppingList