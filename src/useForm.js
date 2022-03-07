import { useState, useEffect } from 'react'
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

// getting the values of local storage
const getDatafromSS = () => {
    const data = sessionStorage.getItem('saveCreditCard');
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

    //input fields
    const [countrySelect, setSelectedCountry] = useState() 

    //main array
    const [creditCardList, setCreditCardList ] = useState(getDatafromSS)


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

        if(banned){
            e.preventDefault()
            setErrors(isBannedFunction(banned))
        }

        if(!banned) {
        e.preventDefault()

        let er = validateInfo(values);
            
        if(er.variant && !isCardStored(values.cardNumber)) {
            setCreditCardList([...creditCardList, values])
        }

        if(isCardStored(values.cardNumber)){
            console.log('card is stored');
            setErrors({
                message: 'Card is already stored',
                show: true
            })
        }else{
            setErrors(validateInfo(values))
        }
        
        }
    };

    const isCardStored = (card) => {
        return creditCardList.some(cards => cards.cardNumber === card)
    }

     // saving data to local storage
     useEffect(() => {
         sessionStorage.setItem('saveCreditCard', JSON.stringify(creditCardList));
     }, [creditCardList])

    return { handleChange, handleFocus, handleSubmit, values, errors };
};

export default useForm; 