import React, { Component } from "react";

class AddMember extends Component {
    render(){
      return (  
        <article>
          <form action="/add_member" method="post"
           onSubmit={function(e){
             e.preventDefault();
             this.props.onSubmit(
              e.target.id.value,
              e.target.password.value,
              e.target.name.value
             );
           }.bind(this)}>
            <table border = "1px">
              <thead align = "center">
                <tr>
                  <td colSpan="2"><b>ADD MEMBER</b></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>아이디</td>
                  <td><input type = "text" name="id" placeholder="ID"></input></td>
                </tr>
                <tr>
                  <td>비밀번호</td>
                  <td><input type = "text" name="password" placeholder="password"></input></td>
                </tr>
                <tr>
                  <td>이름</td>
                  <td><input type = "text" name="name" placeholder="name"></input></td>
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
  
export default AddMember;