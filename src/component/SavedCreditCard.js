import React from 'react'

const SavedCreditCard = () => {
    return (
        <div className='container flex-direction'>
            <div className='view-container'>
                <div className='table-responsive'>
                    <h1 style={{color: "#000"}}>Saved Credit cards</h1>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>credit </th>
                            </tr>
                        </thead>
                        <tbody>
                            <div>No Saved Credit cards in session yet</div>
                            
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    )
}

export default SavedCreditCard
