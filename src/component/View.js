import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

const View = ({bannedCountries, deleteCountry}) => {
    
    return bannedCountries.map(bannedCountry=>(
        
        <tr key={bannedCountry.uuid}>
            <td>{bannedCountry.banCountry}</td>
            <td className='delete-btn' onClick={ () => deleteCountry(bannedCountry.uuid) }>
                <Icon icon={trash}/>
            </td>
        </tr>            
    
))
}

export default View