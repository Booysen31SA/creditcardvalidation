import React, { useMemo } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './CountryBan.css'
import { Button, Form } from 'react-bootstrap'
import countryList from 'react-select-country-list'
import useban from '../useBan'
import View from './View'

const CountryBan = () => {
    const { handleCountryban, handleSubmit, deleteCountry, removeAll, bannedCountries } = useban();
    const options = useMemo(() => countryList().getData(), [])


    return (
 
        <div className='container flex-direction'>
            <div className='countrybanScreen'>
                <div className='box justify-content-center '>
                    <div className='formDiv'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className='inputs'>
                                <h1 className='bodyTextClolour'>Select a country to ban</h1>
                                <Form.Select
                                    name='country'
                                    onChange={handleCountryban}
                                    className='.inputs'
                                >
                                    {
                                        options.map((option, index) => {
                                            return (<option key={index} value={option.label}>{option.label}</option>)
                                        })
                                    }
                                </Form.Select>
                            </Form.Group>
                            <Button
                                size={'block'}
                                id='banButton'
                                type='submit'
                            >
                                BAN COUNTRY
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>

            <div className='view-container'>
                <div className='table-responsive'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Banned Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bannedCountries.length < 1 && <div>No books are added yet</div>}
                            {
                                bannedCountries.length > 0 && <>
                                    <View bannedCountries={bannedCountries} deleteCountry={deleteCountry} />
                                </>
                            }
                        </tbody>
                    </table>
                </div>
                {
                    bannedCountries.length > 0 && <>
                        <button className='btn btn-danger btn-md'
                            onClick={removeAll}>Remove All</button>
                    </>
                }

            </div>
        </div>

    )
}

export default CountryBan