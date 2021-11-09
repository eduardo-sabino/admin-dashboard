import './userList.css'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from '@mui/icons-material';
import { userRows } from '../../dummyData'
import { Link } from "react-router-dom";
import { useState } from 'react'

export default function UserList() {
    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    } 

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'username',
          headerName: 'User',
          width: 150,
          renderCell: (params) => {
              return (
                <div className="user-list-user">
                    <img className="user-list-img" src={params.row.avatar} alt="" />
                    {params.row.username}
                </div>
              )
          }
          /* editable: true, */
        },
        {
           field: 'email',
          headerName: 'Email',
          width: 150,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 150,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className="user-list-edit">Edit</button>
                        </Link>
                        <DeleteOutline className="user-list-delete" onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        }
      ];

    return (
        <div className="user-list">
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                
            />
        </div>
    )
}
