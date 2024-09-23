import React, { useState } from 'react'

const Pagination = ({setLimit,total,currentPage,setCurrentPage}) => {

    const [page,setPage] = useState(0)
    console.log(page)
  return (
    <div className='pagination__container'>
        <select onChange={(e)=>setLimit(e.target.value)}>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
        </select>
       {currentPage > 1 && <span onClick={()=>setCurrentPage(prev=>prev-1)}>Prev</span>}
        {[...Array(total)].map((_,i)=>(<span className={currentPage === i+1 ? 'page':''} key={i} onClick={()=>setCurrentPage(i+1)}>{i+1}</span>))}
       {currentPage < total && <span onClick={()=>setCurrentPage(prev=>prev+1)}>Next</span>}
       <span><input type='number' onChange={(e)=>setPage(e.target.value)}/></span>
       <button onClick={()=>setCurrentPage(page)}>Jump</button>
    </div>
  )
}

export default Pagination