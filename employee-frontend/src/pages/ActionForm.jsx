import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { deleteEmployee, singleEmployee, updateEmployee } from '../redux/actions/employeeActions'

class ActionForm extends Component {
  state = {
    name: '',
    email: '',
    salary: '',
    role: '',
    department: ''
  }
  componentDidMount = () => {
    this.props.singleEmployee(this.props.match.params.id)
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (JSON.stringify(prevProps.employeeDetails) !== JSON.stringify(this.props.employeeDetails)) {
      this.setState(
        this.props.employeeDetails
      )
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleEdit = (e) => {
    e.preventDefault();
    if (
      this.state.name !== '' &&
      this.state.email !== '' &&
      this.state.salary !== '' &&
      this.state.role !== '' &&
      this.state.department !== '') {
      this.props.updateEmployee(this.state, this.props.match.params.id)
    }
  }
  handleDelete = (e) => {
    e.preventDefault();
    console.log("param", this.props.match.params.id)
    this.props.deleteEmployee(this.props.match.params.id)
    const { history } = this.props;
    history.push("/all")
  }

  render() {
    return this.props.employeeDetails ? (
      <div className="container">

        <div className="contact">
          <form >
            <label>NAME</label>
            <input type="text" name="name" placeholder="FIRST NAME" required onChange={this.handleChange} defaultValue={this.state.name} />
            <label>EMAIL</label>
            <input type="email" name="email" placeholder="EMAIL" required onChange={this.handleChange} defaultValue={this.state.email} />
            <label>ROLE</label>
            <input type="text" name="role" placeholder="ROLE" required onChange={this.handleChange} defaultValue={this.state.role} />
            <label>DEPARTMENT</label>
            <input type="text" name="department" placeholder="DEPARTMENT" required onChange={this.handleChange} defaultValue={this.state.department} />
            <label>SALARY</label>
            <input type="number" name="salary" placeholder="SALARY" required onChange={this.handleChange} defaultValue={this.state.salary} />
            <div className="send-button">
              <button onClick={this.handleDelete}>Delete</button>
              <button onClick={this.handleEdit} >Edit</button>
            </div>
          </form>
        </div>

      </div>
    ) : "Please wait, Data is loading...."
  }
}

const mapStateToProps = (storeState) => {
  return { employeeDetails: storeState.empState.single }
}

export default withRouter(connect(mapStateToProps, { singleEmployee, updateEmployee, deleteEmployee })(ActionForm))
