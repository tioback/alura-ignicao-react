import React from 'react'
import EstimatedCost from '../../shared/EstimatedCost/EstimatedCost'
import LineChart from '../../shared/LineChart/LineChart'
import { Wrapper } from './Statistics.styles'

function Statistics ({ stats, estimatedPrice }) {
    return (
        <Wrapper>
            estatísticas
            {Object.getOwnPropertyNames(stats)
                .map(name => ({name, stat: stats[name]}))
                .map(({name, stat}) => (<LineChart key={name} color={stat.color} title={stat.name} percentage={stat.percentage} />))}
            <EstimatedCost value={estimatedPrice} />
        </Wrapper>
    )
}

export default Statistics