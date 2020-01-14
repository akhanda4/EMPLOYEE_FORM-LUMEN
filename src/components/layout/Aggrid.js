import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";
import "ag-grid-community/dist/styles/agGridBalhamFont.css";
import $ from "jquery";
import { MdCreate, MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import "./Aggrid.css";
class Aggrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 1,
      defaultColDef: {
        sortable: true,
        resizable: true,
        filter: true,
        editable: true
      },
      columnDefs: [
        {
          headerName: "EDIT",
          field: "EDIT",
          icons: {},
          width: 70,
          filter: true,
          sortable: false,
          cellRendererFramework: params => {
            this.setState({ editcelldata: params.data });
            return (
              <center>
                <span
                  className="bttest"
                  id={this.state.rowData.indexOf(params.data)}
                  onClick={this.editRow}
                >
                  <MdCreate />
                </span>
              </center>
            );
          }
        },
        {
          headerName: "First Name",
          field: "first_name",
          sortable: true
        },
        {
          headerName: "Last Name",
          field: "last_name",
          sortable: true
        },
        {
          headerName: "Date of birth",
          field: "dob",
          sortable: true
        },
        {
          headerName: "Contact",
          field: "phone",
          sortable: true
        },
        {
          headerName: "Country",
          field: "country",
          sortable: true
        },
        {
          headerName: "Hobbies",
          field: "hobbies",
          sortable: true
        },
        {
          headerName: "Address",
          field: "address",
          sortable: true
        },
        {
          headerName: "Experience",
          field: "working_experience",
          sortable: true
        },
        {
          headerName: "Status",
          field: "status",
          sortable: true
        },
        {
          headerName: "Languages",
          field: "languages"
        },
        {
          headerName: "Reasons for Hire",
          field: "reasonsForHire"
        }
      ],

      rowData: []
    };
  }
  editRow = event => {
    this.props.editEmployeeData(this.state.rowData[event.currentTarget.id]);
  };
  componentDidMount() {
    this.fetch_data();
    let array = document.getElementsByTagName("button");
    this.pageNum = 1;
    array[3].addEventListener("click", this.firstBtn);
    array[4].addEventListener("click", this.previousBtn);
    array[5].addEventListener("click", this.nextBtn);
    array[6].addEventListener("click", this.lastBtn);
  }
  firstBtn = () => {
    console.log("first");
  };
  previousBtn = () => {
    console.log("prevbtn");
  };

  nextBtn = () => {
    console.log("nextBtn");
  };
  lastBtn = () => {
    console.log("last");
  };
  /**
   * recive data in object and set that object in state in rowData
   */
  data = props => {
    let newRow = [];

    for (let i = 0; i < props.length; i++) {
      newRow.push(props[i]);
    }
    this.setState({
      rowData: newRow
    });
  };
  fetch_data = () => {
    let obj = {};
    obj.pageNum = this.state.pageNum;
    $.ajax({
      url: "http://localhost:8000/getAllEmployees/?page=" + this.state.pageNum,
      type: "GET",
      success: function(response) {
        if (response) {
          this.data(response.data);
        } else {
          window.scrollTo({
            top: 1000,
            left: 0,
            behavior: "smooth"
          });
        }
      }.bind(this),
      error: function(response) {
        console.log(response);
      }
    });
  };

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };
  sortData = params => {
    let val = this.gridApi.getSortModel();
    $.ajax({
      url: "http://localhost:8000/getAllEmployees/?page=" + this.state.pageNum,
      type: "GET",
      data: val[0],
      success: function(response) {
        if (response) {
          console.log(response);
          this.setState({
            rowData: response.data
          });
        } else {
          window.scrollTo({
            top: 1000,
            left: 0,
            behavior: "smooth"
          });
        }
      }.bind(this),
      error: function(response) {
        console.log(response);
      }
    });
  };
  prevPage = () => {
    if (this.state.pageNum <= 1) {
      return;
    }
    this.setState({
      pageNum: this.state.pageNum - 1
    });
    setTimeout(() => {
      this.fetch_data();
    }, 300);
  };
  nextPage = () => {
    this.setState({
      pageNum: this.state.pageNum + 1
    });
    setTimeout(() => {
      this.fetch_data();
    }, 300);
  };
  cellEdit = params => {
    this.props.cellUpdate(params.data);
  };
  render() {
    return (
      <div>
        <div
          className="ag-theme-balham-dark content"
          style={{
            height: "190px",
            width: "76%"
          }}
        >
          <AgGridReact
            icons={this.state.icons}
            onGridReady={this.onGridReady}
            onSortChanged={this.sortData}
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            defaultColDef={this.state.defaultColDef}
            onCellValueChanged={this.cellEdit}
          ></AgGridReact>
          <div className="test-footer">
            <div>
              <span
                className="navigate"
                title="Previous"
                onClick={this.prevPage}
              >
                <MdNavigateBefore />
              </span>
              <span className="num noselect">{this.state.pageNum}</span>
              <span className="navigate" title="Next" onClick={this.nextPage}>
                <MdNavigateNext />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Aggrid;
