import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'
import CreditCardVerfication from './CreditCardVerfication'
import CountryBan from './CountryBan'

const Header = () => {
    return (
        <Router>
            <div>
                <ul className="App-header">
                    <li>
                        <Link to="/verfication">Verfication</Link>
                    </li>
                    <li>
                        <Link to="/ban">Ban</Link>
                    </li>
                </ul>
                <Routes>
                 <Route exact path='/verfication' element={<CreditCardVerfication />}></Route>
                 <Route exact path='/ban' element={<CountryBan />}></Route>
          </Routes>
            </div>
        </Router>

    )
}

export default Header