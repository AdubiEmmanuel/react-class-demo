import React from 'react'
import './style.css';

const Home = () =>{
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>S/n</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Total cost</th>
                    </tr>
                </thead>
                <tbody className='bg-dark text-light'>
                    <tr>
                        <th>1</th>
                        <th>Ofada Rice</th>
                        <th>$333</th>
                        <th>$10,000</th>
                    </tr>
                </tbody>
            </table>

            
        </>
    )
}

export default Home
