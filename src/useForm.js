import { useState } from 'react'
import validateInfo from './validateInfo'

// getting the values of local storage
const getDatafromLS = () => {
    const data = localStorage.getItem('bannedCountries');
    if (data) {
        return JSON.parse(data);
    }
    else {
        return []
    }
}

const useForm = () => {
    //man array of objects
    const [bannedCountries, setBanCountry] = useState(getDatafromLS)

    const [countrySelect, setSelectedCountry] = useState() 


    const isCountryBanned = (country) => {
        return bannedCountries.some(ban => ban.banCountry === country)
    }

    const isBannedFunction =(isbanned) => {
        let isBanned = {}

        isBanned.message = 'Country is banned'
        isBanned.show = true
        
        return isBanned

    }

    const [values, setValues] = useState({
        cardName: '',
        cardNumber: '',
        cardExpiration: '',
        cardSecurityCode: '',
        focus: '',
        country: ''
    })

    const [errors, setErrors] = useState({})

    const handleFocus = (e) => {
        setValues({ 
            ...values,
            focus: (e.target.name === 'cardSecurityCode') ? 'cvc' : e.target.name
        });
    }

    const handleChange = e => {
        
        const { name, value } = e.target
        let banned = false;
        setSelectedCountry(value)

        // check if country is banned
        banned = isCountryBanned(value)

        if(banned){
            setErrors(isBannedFunction(banned))
        }

        if(!banned) {
            setErrors({})
            setValues({
                ...values,
                [name]: value
            })
        }

    }

    const handleSubmit = e => {
        let banned = false;

        // check if country is banned
        banned = isCountryBanned(countrySelect)
        console.log(countrySelect);

        if(banned){
            e.preventDefault()
            setErrors(isBannedFunction(banned))
        }

        if(!banned) {
        e.preventDefault()
        setErrors(validateInfo(values))
        }
    };
    
    return { handleChange, handleFocus, handleSubmit, values, errors };
};

export default useForm; 