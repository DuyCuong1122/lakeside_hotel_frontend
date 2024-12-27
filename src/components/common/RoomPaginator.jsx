import React from 'react'

const RoomPaginator = ({currentPage, totalPages, onPageChange}) => {
    const pageNumbers = Array.from({ length: totalPages } , (_, i) => i + 1);
  return (
    <nav>
        <ul className="pagination, justify-content-center">
            {pageNumbers.map((number) => (
            <li
                key={number}
                className={`page-item ${number === currentPage ? "active" : ""}`}
            >
                <button
                onClick={() => onPageChange(pageNumber)}
                className="page-link"
                >
                {pageNumber}
                </button>
            </li>
            ))}
        </ul>
    </nav>
  )
}

export default RoomPaginator