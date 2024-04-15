import { ReactNode } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <section
        className='bg-primary'
        >
            <div className='xl:max-w-[1340px] sm:w-full w-full mx-auto justify-center  flex flex-auto bg-primary'>
                <Sidebar />
                <div className='grow mt-4'>
                    <Navbar />
                    <div className='m-5'>{children}</div>
                </div>
            </div>
        </section>
    )
}

export default Layout