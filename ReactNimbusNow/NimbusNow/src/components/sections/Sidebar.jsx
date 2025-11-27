import { CalendarDays, Compass, House, LogOut, MapPin, Settings } from 'lucide-react'
import ThemeToggle from '../base/ThemeToggle'

const Sidebar = () => {
    return (
        <div className='min-h-screen w-18 py-10 absolute top-0 left-0 flex justify-center bg-[#FFFFFF80] rounded-r-3xl '>
            <div className='flex  items-center flex-col gap-15' >
                <div>
                    <ThemeToggle />
                </div>
                <div className='flex flex-col items-center h-[70%] gap-10'>
                    <div>
                        <House className='text-light hover:text-primary active:text-primary' />
                    </div>
                    <div>
                        <CalendarDays className='text-light hover:text-primary active:text-primary' />
                    </div>
                    <div>
                        <Compass className='text-light hover:text-primary active:text-primary' />
                    </div>
                    <div>
                        <MapPin className='text-light hover:text-primary active:text-primary' />
                    </div>
                    <div>
                        <Settings className='text-light hover:text-primary active:text-primary' />
                    </div>

                </div>
                <div>
                    <LogOut className='text-light hover:text-primary active:text-primary' />
                </div>
            </div>
        </div>
    )
}

export default Sidebar