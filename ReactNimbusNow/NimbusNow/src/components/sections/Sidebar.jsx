import { AlertCircle, CalendarDays, LayoutDashboard, LogOut, MapPin, Settings } from 'lucide-react'
import ThemeToggle from '../base/ThemeToggle'
import { useLocation, Link } from 'react-router-dom'

const Sidebar = () => {
    const location = useLocation()

    const menuItems = [
        { id: 'dashboard', path: '/', icon: LayoutDashboard, label: 'Dashboard' },
        { id: 'calendar', path: '/calendar', icon: CalendarDays, label: 'Calendar' },
        { id: 'alerts', path: '/alerts', icon: AlertCircle, label: 'Alerts' },
        { id: 'maps', path: '/maps', icon: MapPin, label: 'Maps' },
        { id: 'settings', path: '/settings', icon: Settings, label: 'Settings' },
    ]

    return (
        <div className='min-h-screen w-18 py-10 flex justify-center bg-surface rounded-r-3xl shadow-lg transition-colors duration-300'>
            <div className='flex items-center flex-col gap-10'>
                <div>
                    <ThemeToggle />
                </div>
                <div className='flex flex-col items-center mt-5 h-[60%] gap-3'>
                    {menuItems.map((item) => {
                        const Icon = item.icon
                        const isActive = location.pathname === item.path
                        return (
                            <Link
                                key={item.id}
                                to={item.path}
                                className={`p-3 rounded-lg bg-neutral-300 transition-all duration-300 ${isActive
                                    ? 'bg-primary text-white'
                                    : 'text-primary dark:text-primary-light hover:text-primary dark:hover:text-primary-light'
                                    }`}
                                title={item.label}
                            >
                                <Icon size={24} />
                            </Link>
                        )
                    })}
                </div>
                <div className='mt-auto'>
                    <button className='p-3 rounded-lg text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors'>
                        <LogOut size={24} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar