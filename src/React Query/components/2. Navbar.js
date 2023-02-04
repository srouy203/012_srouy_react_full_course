import React from 'react'
import { Link } from 'react-router-dom'
// import '../Query App.css'
const Navbar = () => {
  return (
    <nav className='nav bg-dark'>
        <div className="py-4">
            <Link to='/student' className='mx-4 text-light text-decoration-none'>Student Page</Link>
            <Link to='/fetchdatastudent' className='text-light text-decoration-none'>RQ Student</Link>
            <Link to='/tranformation' className='mx-4 text-light text-decoration-none'>Transformation Data</Link>
            <Link to='/parallel' className='text-light text-decoration-none'>Parallel Queries</Link>
            <Link to='/dynamicparallel' className='text-light text-decoration-none mx-4'>Dynamic Parallel</Link>
            <Link to='/dependentqueries' className='text-light text-decoration-none'>DependentQueries</Link>
            <Link to='/paginated-queries' className='text-light text-decoration-none mx-4'>Paginated Queries</Link>
            <Link to='/infinite-queries' className='text-light text-decoration-none'>InfiniteQueries</Link>
            <Link to='/crud-query' className='text-light mx-4'>CRUD</Link>
        </div>
    </nav>
  )
}

export default Navbar
