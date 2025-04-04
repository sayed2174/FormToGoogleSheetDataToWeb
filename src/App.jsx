import { useState,useEffect } from 'react';
import './App.css';
import {Delete, Trash2} from 'lucide-react';
import * as xlsx from 'xlsx';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './component/table';

const app_script_deployment_url='https://script.google.com/macros/s/Your_App_Script_deployemnet_Url_id/exec';

function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch(app_script_deployment_url)
    .then((res)=>{
      if(!res.ok)
        throw new Error("Fetch Failed");
      return res.json();
    })
    .then((json)=>{
      setData(json);
    })
    .catch((e)=>{
      console.log("Error");
    })
  },[]);


  function handleDelete(idx){
    const url = `https://script.google.com/macros/s/Your_App_Script_deployemnet_Url_id/exec?action=delete&rowIdx=${idx}`
    fetch(url)
    .then((res)=>{
      if(res.ok){
        setData((prevData)=>prevData.filter((_, i)=> i!=idx-2));
        alert("Data has been deleted");
      }
      else
        alert("Data can't be deleted")
    })
  }
  const handleExcel = ()=>{
    // console.log(data)
    const ws = xlsx.utils.json_to_sheet(data);
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb,ws,"s1");
    const path='Google_Sheet_Data.xlsx';
    xlsx.writeFile(wb,path);
  }

  return (
    <div>
      <nav className='navbar navbar-expand-md bg-success d-flex justify-content-center'>
        <div className='d-flex justify-content-center'>
           <button className='btn btn-sm' onClick={handleExcel} aria-label='convert' aria-describedby='download the sheet data in excel or .xlsx format' >Excel</button>
        </div>

      </nav>
      <Table className='table table-striped table-sm table-bordered'>
      <TableHeader>
        <TableRow>
          <TableHead>SNO</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Queries</TableHead>
          <TableHead>Feedback</TableHead>
          <TableHead>Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
      {data.map((item,idx)=>(
        <TableRow>
          <TableCell>
              {idx+1}
          </TableCell>
          <TableCell>
            {item[0]}
          </TableCell>
          <TableCell>
            {item[1]}
          </TableCell>
          <TableCell>
            {item[2]}
          </TableCell>
          <TableCell>
            {item[3]}
          </TableCell>
          <TableCell>
          {item[4]}
          </TableCell>
          <TableCell>
          <button onClick={()=>handleDelete(idx+2)} className='btn'><Trash2 className="h-4 w-4" /></button>
          </TableCell>
        </TableRow>
      ))}
      </TableBody>
    </Table>
    </div>

















    // <table className='table table-striped table-bordered table-hover'>
    //   <thead className='table-success'>
    //     <th>SNO</th>
    //     <th>Email</th>
    //     <th>Name</th>
    //     <th>Phone</th>
    //     <th>Queries</th>
    //     <th>Feedback</th>
    //     <th>Delete</th>
    //   </thead>
    //   <tbody>
    //       {data.map((item,idx)=>(
    //         <tr>
    //         <td >{idx+1}</td>
    //         <td>{item[0]}</td>
    //         <td>{item[1]}</td>
    //         <td>{item[2]}</td>
    //         <td>{item[3]}</td>
    //         <td>{item[4]}</td>
    //         <td><button onClick={()=>handleDelete(idx+2)}><Trash2 className="h-4 w-4" /></button></td>
    //         </tr>
    //       ))}
    //   </tbody>
    // </table>
  )
}

export default App
