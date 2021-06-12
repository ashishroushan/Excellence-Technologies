import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import './Home.css'

function Home() {
  const [arrData, setArrData] = useState([]);
  const [arrData2, setArrData2] = useState([]);
  const [id, setId] = useState(true);
  const [selectedRow, setSelectedRow] = useState(null);
  useEffect(() => {
    fetch('https://reqres.in/api/users?page=1')
      .then((response) => response.json())
      .then((data) => {
        setArrData(data.data);
      });

      fetch('https://reqres.in/api/users?page=2')
      .then((response) => response.json())
      .then((data) => {
        setArrData2(data.data);
      });
  }, []);
  

  
  console.log(arrData);
  console.log(arrData2);

  const columns = [
    { title: 'Id', field: 'id' },
    { title: 'Email', field: 'email' },
    { title: 'First Name', field: 'first_name' },
    { title: 'Last Name', field: 'last_name' },
    { title: 'Avatar', field: 'avatar' },
  ];
  const toggleHandlerPage1 = () =>{
    setId(true)
  }
  const toggleHandlerPage2 = () =>{
    setId(false)
    
  }
  return (
    <div>
      {id && <MaterialTable
        columns={columns}
        data={arrData}
        title="Page 1"
        onRowClick={(evt, selectedRow) =>
          setSelectedRow(selectedRow.tableData.id)
        }
        options={{
          search: false,
          rowStyle: (rowData) => ({
            backgroundColor:
              selectedRow === rowData.tableData.id ? 'rgb(220, 252, 252)' : '#FFF',
          })
        }}
      />}
      {!id && <MaterialTable
        columns={columns}
        data={arrData2}
        title="Page 2"
        onRowClick={(evt, selectedRow) =>
          setSelectedRow(selectedRow.tableData.id)
        }
        options={{
          search: false,
          rowStyle: (rowData) => ({
            backgroundColor:
              selectedRow === rowData.tableData.id ? '#67aeae' : '#FFF',
          })
        }}
      />}
      {!id && <button className='next-button' onClick={toggleHandlerPage1}>prev</button>}
     {id &&<button className='next-button' onClick={toggleHandlerPage2}>Next</button>}
    </div>
  );
}

export default Home;
