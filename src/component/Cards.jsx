import React from 'react'
import { MdDeleteForever } from "react-icons/md";

const Cards = ({title, desc, id, deleteNote}) => {
  return (
    <div className="card">
        <div className="del" onClick={()=>{deleteNote(id)}}>
        <MdDeleteForever />
        </div>
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
    </div>
  )
}

export default Cards
