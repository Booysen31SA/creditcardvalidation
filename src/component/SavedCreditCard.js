import React from 'react'
import { useState } from 'react'
import { Icon } from 'react-icons-kit'
import { trash } from 'react-icons-kit/feather/trash'
import './SavedCreditCard.css'
import useForm from '../useForm'

const SavedCreditCard = () => {

    
    const { deleteCard, removeAll, creditCardList } = useForm();

    return (
        <div className='container flex-direction'>
            <div className='creditcardList-container'>
                <div className='table-responsive'>
                    <h1 style={{ color: "#000" }}>Saved Credit cards</h1>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name on Card </th>
                                <th>Card Number </th>
                                <th>Expiration </th>
                                <th>CVC </th>
                                <th>Country </th>
                            </tr>
                        </thead>
                        <tbody>
                            {creditCardList.length < 1 && <div>No Cards Saved</div>}
                            {
                                creditCardList.length > 0 &&
                                creditCardList.map((creditCard, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{creditCard.cardName}</td>
                                            <td>{creditCard.cardNumber}</td>
                                            <td>{creditCard.cardExpiration}</td>
                                            <td>{creditCard.cardSecurityCode}</td>
                                            <td>{creditCard.country}</td>
                                            <td className='delete-btn' onClick = { () => deleteCard(creditCard.cardNumber)}>
                                                <Icon icon={trash} />
                                            </td>
                                        </tr>
                                    )
                                })

                            }

                        </tbody>
                    </table>
                </div>

                {
                    creditCardList.length > 0 && <>
                        <button className='btn btn-danger btn-md'
                            onClick={removeAll}>Remove All</button>
                    </>
                }

            </div>
        </div>
    )
}

export default SavedCreditCard
