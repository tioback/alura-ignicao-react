import React, { useEffect, useState } from 'react'
import AppContainer from '../AppContainer/AppContainer'
import AppHeader from '../AppHeader/AppHeader'
import { Wrapper, Container } from './App.styles'
import ShoppingList from '../ShoppingList/ShoppingList'
import mockProducts from '../../mocks/products.json'
import extractPercentage from '../../utils/extractPercentage'
import Statistics from '../Statistics/Statistics'

const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

const initialStats = {
    healthy: { percentage: 0, color: colors[0], name: 'saudáveis' },
    junk: { percentage: 0, color: colors[1], name: 'não tão saudáveis' },
    cleaning: { percentage: 0, color: colors[2], name: 'limpeza' },
    hygiene: { percentage: 0, color: colors[3], name: 'higiene' },
    others: { percentage: 0, color: colors[4], name: 'outros' }
}

function App() {
    const [ stats, setStats ] = useState(initialStats)
    const [ products, setProducts ] = useState(mockProducts.products)
    const [ selectedProducts, setSelectedProducts ] = useState([])
    const [ estimatedPrice, setEstimatedPrice ] = useState(0)

    function handleProductToggle(productId, checked) {
        setProducts(
            products.map(p => 
                p.id === productId 
                    ? { ...p, checked: !checked } 
                    : p
            )
        )
    }

    useEffect(function () {
        setSelectedProducts(products.filter(p => p.checked))
    }, [products])

    useEffect(function () {
        setStats(currentStats => 
            Object.getOwnPropertyNames(currentStats)
                .map(name => ({
                    name, 
                    percentage: extractPercentage(
                        selectedProducts.length, 
                        selectedProducts.filter(p => p.tags.includes(name)).length
                    )
                }))
                .reduce((result, {name, percentage}) => {
                    console.log('Changing stats: ', name, percentage)
                    result[name] = {
                        ...currentStats[name],
                        percentage
                    }
                    return result;
                }, {})
        )
    }, [selectedProducts])

    useEffect(function () {
        setEstimatedPrice(selectedProducts.map(p => p.price).reduce((a, b) => a + b, 0))
    }, [selectedProducts])
    
    return (
        <Wrapper>
            <Container>
                <AppHeader />
                <AppContainer
                    left={<ShoppingList title="produtos disponíveis" products={products.filter(p => !p.checked)} onToggleProduct={handleProductToggle} />}
                    middle={<ShoppingList title="sua lista de compras" products={selectedProducts} onToggleProduct={handleProductToggle} />}
                    right={<Statistics stats={stats} estimatedPrice={estimatedPrice} />}
                />
            </Container>
        </Wrapper>
    )
}

export default App