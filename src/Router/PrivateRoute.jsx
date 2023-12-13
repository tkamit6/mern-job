import React, { useContext, useEffect } from 'react'
import MyContext from '../ContextAPI/MyContextProvider'
import { useNavigate } from 'react-router-dom';

function PrivateRoute({ Component }) {

    const contextValue = useContext(MyContext);
    const { userData } = contextValue;
    const navigate = useNavigate();
    console.log(userData)

    useEffect(() => {
        if (!userData) {
            <p>R</p>
           
                navigate('/login')
          
        }
    })


    return (
        <div>
            <Component />
        </div>
    )
}

export default PrivateRoute