import React from 'react'
import { Link } from 'react-router-dom'

export const BookList = () => {
  return (
    <>
    <Link to="/Books/1">Book 1</Link>
    <br/> 
    <Link to="/Books/2">Book 2</Link>
    <br/> 
    <Link to="/Books/New"> New Book</Link>
    </>
  )
}

export default BookList
