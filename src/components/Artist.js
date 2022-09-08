import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { NavLink } from "react-router-dom";


function Artist(props) {

 const [curItems, setCurItems] = useState([]);
 const [pCount, setpCount] = useState(0);
 const [off, setOff] = useState(0);



useEffect(() => {
  const endOff = off + props.pageCount;
 setpCount(Math.ceil(props.artistInfo.length / props.pageCount));
   setCurItems(props.artistInfo.slice(off, endOff));
}, [off, props.pageCount, props.artistInfo]);

  const handleClick = (event, value) => {
  const newOff = (event.selected * props.pageCount) % props.artistInfo.length;
  setOff(newOff);
};
    
   
 
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="table-responsive">
        <table className="table tabel-bordered table-striped">
<thead>
  <tr className="text-center">
    <th>Name</th>
    <th>Types</th>
    <th>Genres</th>
    <th>Popularity</th>
    <th>Followers</th>
    <th>Actions</th>
  </tr>
</thead>
<tbody>
  {
    curItems && curItems.map((item, index) => {
      let { id, name, type, genres, popularity, followers } = item;
      return (
        <tr className="text-center" key={index}>
          <td>{name}</td>
          <td>{type}</td>
          <td >
            {
            genres.map((item, index) => {
              return (
                <span key={index} className="badge bg-success">
                  {item}
                </span>
              );
            })
            }
          </td>
          <td>{popularity}</td>
          <td>{followers.total}</td>
          <td>
            <NavLink
              to={`/tracks/${id}`}
              className="btn btn-warning"
            >
              Tracks
            </NavLink>
          </td>
        </tr>
      );
    })}
</tbody>
<tfoot>
  <tr>
    <td  colSpan="6">
      <ReactPaginate
         pageCount={pCount}
        className="pagination justify-content-center"
         onPageChange={handleClick}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        activeLinkClassName="active"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
      />
    </td>
  </tr>
</tfoot>
</table> 
         
        </div>
      </div>
    </div>
  );
}

export default Artist;



 












