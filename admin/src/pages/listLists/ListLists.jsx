import "./listLists.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { getLists } from "../../context/listContext/ListApiCalls";

import { ListContext } from "../../context/listContext/ListContext";

export default function ListLists() {
  const { lists, dispatch } = useContext(ListContext)

  useEffect(() => {
    getLists(dispatch)
  }, [dispatch]);

  const handleDelete = (id) => {

  };

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    { field: "title", headerName: "Title", width: 120 },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "type", headerName: "Type", width: 120 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* <Link
              to={{ pathname: `/product/${params.row._id}`, state: { movie: params.row } }}
            > */}
            <Link to={{ pathname: `/product/${params.row._id}`, state: { movie: params.row } }}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={lists}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}
