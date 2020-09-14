import React from 'react'
import { Cost, Title, Wrapper } from './EstimatedCost.styles';

function EstimatedCost ({value}) {
    return (
        <Wrapper>
            <Title>previsão de gastos: </Title>
            <Cost>{value.toLocaleString('pt-br', {
                minimumFractionDigits: 2,
                style: 'currency',
                currency: 'BRL'
            })}</Cost>
        </Wrapper>
    )
}

export default EstimatedCost;