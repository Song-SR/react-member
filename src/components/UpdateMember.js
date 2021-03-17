import React, { Component } from "react";

class UpdateMember extends Component {
  constructor(props){
    super(props);
    this.state = {
      num:this.props.data.num,
      id:this.props.data.id,
      password:this.props.data.password,
      name:this.props.data.name
    }
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }

  inputFormHandler(e){
    this.setState({[e.target.num]:e.target.value});
  }

    render(){
      console.log(this.props.data);
      return (  
        <article>
          <form action="/update_member" method="post"
           onSubmit={function(e){
             e.preventDefault();
             this.props.onSubmit(
              e.target.num.value,
              e.target.id.value,
              e.target.password.value,
              e.target.name.value
             );
           }.bind(this)}>
            <table border = "1px">
              <thead align = "center">
                <tr>
                  <td colSpan="2"><b>UPDATE MEMBER</b></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input
                    type = "hidden"
                    name="num"
                    value={this.props.data.num}
                    onChange={this.inputFormHandler}>
                      </input>아이디</td>
                  <td><input
                    type = "hidden"
                    name="id"
                    value={this.props.data.id}
                    onChange={this.inputFormHandler}>
                      </input>{this.props.data.id}</td>
                </tr>
                <tr>
                  <td>비밀번호</td>
                  <td><input
                    type = "text"
                    name="password"
                    placeholder={this.props.data.password}
                    onChange={this.inputFormHandler}>
                      </input></td>
                </tr>
                <tr>
                  <td>이름</td>
                  <td><input
                  type = "text"
                  name="name"
                  placeholder={this.props.data.name}
                  onChange={this.inputFormHandler}
                  ></input></td>
                </tr>
                <tr align = "center">
                  <td colSpan="2"><input type="submit"></input></td>
                </tr>
              </tbody>
            </table>
          </form>
        </article>
      );
    }
  }
  
export default UpdateMember;