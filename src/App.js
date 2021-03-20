import React, { Component } from 'react';
import './index.css';
import Table from "./components/Table";
import AddMember from './components/AddMember';
import UpdateMember from './components/UpdateMember';

class App extends Component {
  constructor(props){
    super(props);
    this.add_member_num = 0;
    this.selected_list_num = 0;
    this.state = {
      mode:'list',
      contents:[
        // {num:1, id:"Admin", password:'1234', name:'Song'}
      ]}}

  getReadContent(){
    var i = 0;
    while(i < this.state.contents.length){
      var data = this.state.contents[i];
      if(i === this.selected_list_num){
        return data;
      }
      i += 1;
    }
  }

  getContent(){
    var _article = null;
    if(this.state.mode === "add"){
      _article = <AddMember onSubmit={function(_id,_password,_name){
        this.add_member_num += 1;
        var _contents = this.state.contents.concat(
          {num:this.add_member_num, id:_id, password:_password, name:_name}
        )
        this.setState({
          contents:_contents,
          mode:'list'
        })
      }.bind(this)
      }></AddMember>
    }else if(this.state.mode === "update"){
      _article = <UpdateMember
       data = {this.getReadContent()}
       onSubmit={function(_num, _id, _password, _name){
        var _contents = Array.from(this.state.contents);
        var i = 0;
        while(i < _contents.length){
          if(_contents[i].num === Number(_num)){
            _contents[i] = {num:Number(_num), id:_id, password:_password, name:_name}
            break;
          }
          i += 1;
        }
        this.setState({
          contents:_contents,
          mode:'list'
        })

       }.bind(this)}
       ></UpdateMember>
    }
    return _article;
  }
  render(){
    return (
      <div className="App">
        <Table
          data={this.state.contents}
          buttonClick={function(_mode, _correntLine){
            var i = 0;
            var _contents = Array.from(this.state.contents);
            if(_mode === 'delete'){
              if(window.confirm('No.' + Number(_correntLine+1) + ' member delete?')){
                while(i < _contents.length){
                  if(i === _correntLine){
                    _contents.splice(i,1);
                    break;
                  }
                  i += 1;
                }
                this.setState({
                  mode:'list',
                  contents:_contents
                })
              }
            }else if(_mode === 'update'){
              while(i < _contents.length){
                if(i === _correntLine){
                  this.selected_list_num = i;
                  break;
                }
                i += 1;
              }
              this.setState({
                mode:_mode,
                contents:_contents
              })
            }
          }.bind(this)}>
        </Table>
        <p><a href = "/add" onClick={function(e){
            e.preventDefault();
            this.setState({
              mode:'add'
            })
          }.bind(this)}>회원추가
          </a>
        </p>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
