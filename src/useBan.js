
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

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

const useBan = () => {

    //man array of objects
    const [bannedCountries, setBanCountry] = useState(getDatafromLS)
    // input field states
    const [banCountry, setBan] = useState('');

    const handleCountryban = (country) => {
        const value = country.target.value;
        setBan(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // get uuid
        const uuid = uuidv4();

        // creating an object
        let banObj = {
            uuid,
            banCountry
        }
        if (banObj.banCountry.length > 0 && !isCountryBanned(banObj.banCountry)) {
            setBanCountry([...bannedCountries, { ...banObj, uuid }])
        }
    };

    const isCountryBanned = (country) => {
        return bannedCountries.some(ban => ban.banCountry === country)
    }

    const deleteCountry = (uuid) => {
        const newBannedCountries = bannedCountries.filter(country => country.uuid !== uuid);
        setBanCountry(newBannedCountries);
        localStorage.setItem('bannedCountries', JSON.stringify(newBannedCountries));
    }

    const removeAll = () => {
        setBanCountry([])
        localStorage.removeItem('bannedCountries');
    }

    // saving data to local storage
    useEffect(() => {
        localStorage.setItem('bannedCountries', JSON.stringify(bannedCountries));
    }, [bannedCountries])

    return { handleCountryban, handleSubmit, deleteCountry, removeAll, bannedCountries, isCountryBanned };

}

export default useBan; 