import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/AddForm.css'
import { addEmployee } from '../redux/actions/employeeActions'

class AddForm extends Component {
  state = {
    name: '',
    email: '',
    salary: '',
    role: '',
    department: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.name !== '' &&
      this.state.email !== '' &&
      this.state.salary !== '' &&
      this.state.role !== '' &&
      this.state.department !== '') {

      this.props.addEmployee(this.state)
    }
  }
  render() {
    return (
      <div className="container">

        <div className="contact">
          <form onSubmit={this.handleSubmit}>
            <label>NAME</label>
            <input type="text" name="name" placeholder="FIRST NAME" required="true" onChange={this.handleChange} />
            <label>EMAIL</label>
            <input type="email" name="email" placeholder="EMAIL" required="true" onChange={this.handleChange} />
            <label>ROLE</label>
            <input type="text" name="role" placeholder="ROLE" required="true" onChange={this.handleChange} />
            <label>DEPARTMENT</label>
            <input type="text" name="department" placeholder="DEPARTMENT" required="true" onChange={this.handleChange} />
            <label>SALARY</label>
            <input type="number" name="salary" placeholder="SALARY" required="true" onChange={this.handleChange} />
            <div className="send-button">
              <input type="submit" value="Add" />
            </div>
          </form>
        </div>

      </div>

    )
  }
}

const mapStateToProps = (state) => ({

})


export default connect(mapStateToProps, { addEmployee })(AddForm)
