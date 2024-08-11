import { MdAccountCircle } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Header = () => {
    const links=[{
        name:"Book",
       
    },{
        
    }]
  return (
    <>
    <div className="w-full bg-primary shadow-xl py-6">

        <header className='w-[80%] xl:w-[70%] mx-auto  '>
          
            <nav className='flex justify-between items-center'>
            <div className="text-3xl text-secondary ">
             Admin
            </div>
              
              
                    <Link className=' border-2 rounded-full p-3 ' to={"/"}>
                    
                    <MdAccountCircle className='text-3xl' />

                    </Link>
                
               
            </nav>

        </header>
    </div>
    </>
  )
}

export default Header