import React from 'react'

const ConsoleLogger = ({variable}) => {
    const handleLogClick = ()=>{
        console.log(variable);
    }

    const stringedVariable = JSON.stringify(variable);
    const handleAlertClick = ()=>{
        alert(stringedVariable);
    }
    return (
        <div className='fixed bottom-[0%] z-[9999] flex flex-col gap-2 items-center'>
            <button className='bg-[#ff3e3e] font-medium' onClick={handleLogClick} >console log variable</button>
            or
            <button className='bg-[#ff3e3e] font-medium' onClick={handleAlertClick}>alert variable</button>
        </div>

    )
}

export default ConsoleLogger