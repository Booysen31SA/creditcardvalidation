import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'
import CreditCardVerfication from './CreditCardVerfication'
import CountryBan from './CountryBan'
import './Header.css'

const Header = () => {
    return (

        <header class='header-fixed'>
            <Router>
                <div class='header-limiter'>

                    <h1>React Assessment</h1>

                    <nav>
                        <Link to='/'>Verfication</Link>
                        <Link to='/ban'>Ban</Link>
                    </nav>
                    <Routes>
                        <Route exact path='/' element={<CreditCardVerfication />}></Route>
                        <Route exact path='/ban' element={<CountryBan />}></Route>
                    </Routes>

                </div>
            </Router>
        </header>
    )
}

export default Header
