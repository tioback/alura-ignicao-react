import React, { useEffect, useState } from 'react'
import AppContainer from '../AppContainer/AppContainer'
import AppHeader from '../AppHeader/AppHeader'
import Checkbox from '../../shared/Checkbox/Checkbox'
import { Wrapper, Container } from './App.styles'
import LineChart from '../../shared/LineChart/LineChart'

function App() {
    const [ lettuce, setLettuce ] = useState(false)
    const [ healthy, setHealthy ] = useState(20)

    useEffect(function () {
        setTimeout(() => { setHealthy(80) }, 5000)
    }, [])

    return (
        <Wrapper>
            <Container>
                <AppHeader />
                <AppContainer
                    left={<div style={{  }}>produtos disponíveis<Checkbox value={lettuce} title="alface" onClick={() => setLettuce(!lettuce)}/></div>}
                    middle={<div style={{  }}>sua lista de compras</div>}
                    right={<div style={{  }}>estatísticas<LineChart color="#09f" title="saudável" percentage={healthy} /></div>}
                />
            </Container>
        </Wrapper>
    )
}

export default App