import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import { USER_SELECT_BOX_DATA } from "../../Data/USER_SELECT_BOX_DATA"
function UserSelectBox({clickUserButton, logOut}) {
  return (
    <SelectBox clickUserButton={clickUserButton}>
      <SelectList>
        {USER_SELECT_BOX_DATA.map( (el, idx) => (
          <SelectContent key={el.id} onClick={(e) => {
            el.id === 8 && logOut(e)
          }}>
            <Link to={ el.id !== 8 && el.link}>
             {el.content}
            </Link>
          </SelectContent>
        ))}
      </SelectList>
    </SelectBox>
  );
}

export default UserSelectBox;

const SelectBox = styled.div`
  display:  ${ ({clickUserButton}) => clickUserButton ? "block" : "none"}; 
  position: absolute;
  top: 35px;
  right: -70px;
  min-width: 170px;
  border-radius: 0 0 3px 3px;
  -webkit-box-shadow: 0 2px 0 0 rgba(0,0,0,.05);
  box-shadow: 0 2px 0 0 rgba(0,0,0,.05);
  border: 1px solid #e1e2e3;
  background-color: #fff;
  font-size: 15px;
`
const SelectList = styled.ul`

  li:nth-child(2){
    border-bottom: 1px solid #e1e2e3; 
  }

  li:nth-child(6){
    padding: 20px 10px;
    border-top: 1px solid #e1e2e3; 
    border-bottom: 1px solid #e1e2e3; 
  }

  li:last-child{
    height: 46px;
    background-color: #f2f4f7;
    color: #767676;
    margin: 0;
    padding: 0px 10px;
  }
`

const SelectContent = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
`


