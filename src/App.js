import MaterialTable from 'material-table'
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [player,setPlayers]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3055/api/olympic/allPlayers")
    .then((res)=>{
      setPlayers(res.data)
      console.log(res.data)
    })
    .catch((err)=>{
      alert(err.message)
    })
  },[player])
  const column=[
    {title:'Name',field:'Name'},
    {title:'Language',field:'Language'},
    {title:'Country',field:'Country'},
    {title:'Game Played',field:'GameName'},
    {title:'Bought',field:'Bought',lookup:{TRUE:'true',FALSE:'false'}},
    {title:'Bank Balance',field:'BankBalance',type:'currency'},
    {title:'Ratings',field:'Rating',lookup:{0:0,1:1,2:2,3:3,4:4,5:5}},
    {title:'Total Winnings',field:'TotalWinnings',type:'currency'},
    {title:'Jan',field:'Jan',type:'currency'},
    {title:'Feb',field:'Feb',type:'currency'},
    {title:'Mar',field:'Mar',type:'currency'},
    {title:'Apr',field:'Apr',type:'currency'},
    {title:'May',field:'May',type:'currency'},
    {title:'Jun',field:'Jun',type:'currency'},
    {title:'Jul',field:'Jul',type:'currency'},
    {title:'Aug',field:'Aug',type:'currency'},
    {title:'Sep',field:'Sep',type:'currency'},
    {title:'Oct',field:'Oct',type:'currency'},
    {title:'Nov',field:'Nov',type:'currency'},
    {title:'Dec',field:'Dec',type:'currency'},
  ]
  return (
    <div className="App">
      <MaterialTable data={player} columns={column} options={{filtering:true,paginationType:'stepped',exportButton:true,exportAllData:true,selection:true
      ,grouping:true,columnsButton:true}}
      title="Ag-Grid"/>
    </div>
  );
}

export default App;
