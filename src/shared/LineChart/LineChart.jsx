import React from 'react'
import { Wrapper, ProgressBar } from './LineChart.styles'

function LineChart ({title, percentage, color}) {
    return (
        <Wrapper>
            <span>batata: </span>
            <ProgressBar title={title} percentage={percentage} color={color} />
        </Wrapper>
    )
}

export default LineChart