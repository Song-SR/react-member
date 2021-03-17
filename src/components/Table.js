import React, { Component } from "react";

class Table extends Component {
    render(){
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length){
          var _key = i;
          const _correntLine = _key;
            lists.push(
                [<tr key = {_key}>
                <td>{i+1}</td>
                <td>{data[i].id}</td>
                <td>{data[i].password}</td>
                <td>{data[i].name}</td>
                <td>
                  <input onClick={function(e){
                    e.preventDefault();
                    this.props.buttonClick('update', _correntLine);
                    }.bind(this)} type="button" value="수정">
                  </input>
                  <input onClick={function(e){
                    e.preventDefault();
                    this.props.buttonClick('delete', _correntLine);
                    }.bind(this)} type="button" value="삭제">
                  </input>
                </td>
                </tr>]
                );
            i += 1;
          }
      return (  
        <article>
            <h1>Member List</h1>
	        <table border = "1px" width = "450px" >
	        	<thead align = "center">
                    <tr>
	        		    <td>번호</td>
        			    <td>아이디</td>
                        <td>비밀번호</td>
                        <td>이름</td>
                        <td>수정/삭제</td>
	    	        </tr>
                </thead>
                <tbody align = "center">
	    	          {lists}
                </tbody>
        	</table>
        </article>
      );
    }
  }
  
export default Table;