import React from 'react';

import { Navbar } from './components'
import { Header, Popular } from './container'

const App = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Popular />
        </div>
    )
}

export default App