import React, { useState } from 'react'
import AppContainer from '../AppContainer/AppContainer'
import AppHeader from '../AppHeader/AppHeader'
import Checkbox from '../../shared/Checkbox/Checkbox'
import { Wrapper, Container } from './App.styles'

function App() {
    const [lettuce, setLettuce] = useState(false);

    return (
        <Wrapper>
            <Container>
                <AppHeader />
                <AppContainer
                    left={<div style={{ backgroundColor: 'red' }}>produtos disponíveis<Checkbox value={lettuce} title="alface" onClick={() => setLettuce(!lettuce)}/></div>}
                    middle={<div style={{ backgroundColor: 'green' }}>sua lista de compras</div>}
                    right={<div style={{ backgroundColor: 'blue' }}>estatísticas</div>}
                />
            </Container>
        </Wrapper>
    )
}

export default App