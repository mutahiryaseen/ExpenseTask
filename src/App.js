
import React, {Component} from 'react';
import Task from "./Task"
import ReactTable from 'react-table-6';

import 'react-table-6/react-table.css';
import { Card } from 'reactstrap';
const columns = [{
    Header: 'Item ID',
    accessor: 'ID' 
  }, {
    Header: 'Expense List',
    accessor: 'Name',
  }, {
    id: 'Dateid', 
    Header: 'Date',
    accessor: 'Date',
    sortType: 'basic'
    
  }, {
    id: 'Expense',
    Header: 'Expense Amount', 
    accessor: 'Expense',
    sortType: 'basic'
  },
  {
    Header: 'Sort BY', 
    accessor: 'Status',
    filterMethod: (filter, row) => {
      if (filter.value === "all") {
        return true;
      }
      if (filter.value == "Dateid") {
        return row[filter.id] == "Dateid";
      }
      if (filter.value == "true") {
        return row[filter.id] == "Expense";
      }
      
    },
    Filter: ({ filter, onChange }) =>
      <select
        onChange={event => onChange(event.target.value)}
        style={{ width: "100%" }}
        value={filter ? filter.value : "all"}
      >
        <option value="all">Show All</option>
        <option value="true">By Amount</option>
        <option value="Date">By Date</option>
       </select>
    
  },
  {
    width: 50,
   filterable:false,
    Header: 'View', 
  accessor: 'View',
  search:false,
      id: 'View',
      accessor: '',
      Cell: ({value}) => (<button  type="button" rel="tooltip" className="bbtn btn-primary btn-sm">view
      <i class="fa fa-eye"></i>
      
  </button>)
 

    },
  {
    width: 50,
   filterable:false,
    Header: 'Delete', 
    accessor: 'Unpaid',
    search:false,
      id: 'Unpaid',
      accessor: '',
      Cell: ({value}) => (<button  type="button" rel="tooltip" className="bbtn btn-primary btn-sm">delete
      <i class="fa fa-eye"></i>
      </button>)

    },
  ]

  const data = [{
    ID:'1',
    Name: 'Utilities',
    Date: '26 August',
    
   Expense: '2000',
    fage: 23,
    
  },
  {
    ID:'1',
    Name: 'Grocery',
    Date: '27 August',
    
   Expense: '3000',
    fage: 23,
    
  },
  {
    ID:'1',
    Name: 'Remotes',
    Date: '28 August',
    
   Expense: '5000',
    fage: 23,
    
  },
  {
    ID:'1',
    Name: 'Bikes',
    Date: '29 August',
    
   Expense: '9000',
    fage: 23,
    
  },
  {
    ID:'1',
    Name: 'Laptops',
    Date: '26 August',
    
   Expense: '1600',
    fage: 23,
    
  },]



class RTable extends Component {
    constructor(props)
    {
        super(props);
    }

    
    
    
    render(){
        return (
           <div class="justify-content-center">
              <br/>
              <h1><center><i>Expense Manager.</i></center></h1>
              <br/>
            <ReactTable
          
             data={data}
            //  getTdProps={onRowClick}
            filterable
            defaultPageSize={8}
            columns={columns}
            className=" -striped -highlight"
            />
            <h3>Instructions</h3>
            <b>* Sort the column by clicking on the header of amount and date</b>
            </div>
            );
          
    }
    
}
  export default RTable;