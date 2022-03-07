import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'
import CreditCardVerfication from './CreditCardVerfication'
import CountryBan from './CountryBan'
import SavedCreditCard from './SavedCreditCard'
import './Header.css'

const Header = () => {
    return (

        <header className='header-fixed'>
            <Router>
                <div className='header-limiter'>

                    <h1>React Assessment</h1>

                    <nav>
                        <Link to='/'>Verfication</Link>
                        <Link to='/ban'>Ban</Link>
                        <Link to='/savedcards'>Saved Credit Cards</Link>

                    </nav>
                    <Routes>
                        <Route exact path='/' element={<CreditCardVerfication />}></Route>
                        <Route exact path='/ban' element={<CountryBan />}></Route>
                        <Route exact path='/savedcards' element={<SavedCreditCard />}></Route>
                    </Routes>

                </div>
            </Router>
        </header>
    )
}

export default Header
