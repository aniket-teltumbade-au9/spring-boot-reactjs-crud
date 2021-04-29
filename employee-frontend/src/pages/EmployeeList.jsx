import React, { Component } from 'react'
import { connect } from 'react-redux'
import { displayEmployees } from '../redux/actions/employeeActions'
import '../css/EmployeeList.css'
import { Link } from 'react-router-dom'
class EmployeeList extends Component {
  componentDidMount = () => {
    this.props.displayEmployees()
  }

  render() {
    return this.props.employeeList ? (
      <ul className="employee-table">
        <li className="table-header">
          <div className="col col-1">Sr.</div>
          <div className="col col-2">FULL NAME</div>
          <div className="col col-3">EMAIL</div>
          <div className="col col-4">ROLE</div>
          <div className="col col-4">DEPARTMENT</div>
          <div className="col col-4">SALARY</div>
          <div className="col col-4"></div>
        </li>
        {
          this.props.employeeList.map(el =>
            <li className="table-row" key={el.cid}>
              <div className="col col-1">{el.cid}</div>
              <div className="col col-2">{el.name}</div>
              <div className="col col-3">{el.email}</div>
              <div className="col col-4">{el.role}</div>
              <div className="col col-4">{el.department}</div>
              <div className="col col-4">{el.salary}</div>
              <div className="col col-4">
                <div><Link to={`/action/${el.cid}`}>Action</Link></div>
              </div>
            </li>)
        }

      </ul>

    ) : "Please Wait, list is getting ready..."
  }
}

const mapStateToProps = (storeState) => {
  return { employeeList: storeState.empState.display }
}


export default connect(mapStateToProps, { displayEmployees })(EmployeeList)
