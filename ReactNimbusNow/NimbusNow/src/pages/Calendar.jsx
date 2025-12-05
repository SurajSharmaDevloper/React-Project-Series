import React from 'react'

const Calendar = () => {
    return (
        <div className='ml-20 mt-20 p-8'>
            <h1 className='text-4xl font-bold text-text-light dark:text-text-light mb-6'>Calendar</h1>
            <div className='bg-surface dark:bg-surface p-8 rounded-2xl shadow-lg'>
                <div className='grid grid-cols-7 gap-4 mb-8'>
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                        <div key={day} className='text-center font-bold text-primary'>
                            {day}
                        </div>
                    ))}
                </div>
                <div className='grid grid-cols-7 gap-4'>
                    {Array.from({ length: 35 }, (_, i) => (
                        <div
                            key={i}
                            className='p-4 bg-background-light dark:bg-background rounded-lg text-center cursor-pointer hover:bg-primary hover:text-white transition-colors'
                        >
                            {i + 1 > 31 ? '' : i + 1}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Calendar
