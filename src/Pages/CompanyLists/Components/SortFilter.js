import React from "react";
import styled from "styled-components";

function SortFilter({ handleChange }) {
  return (
    <Container>
      <i className="fas fa-angle-down" />
      <Select onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </Container>
  );
}

export default SortFilter;

const options = [
  {
    label: "최신순",
    value: "date",
  },
  {
    label: "응답률순",
    value: "response",
  },
];

const Container = styled.button`
  position: relative;
  i {
    position: absolute;
    right: 22px;
    z-index: 1;
    top: 16px;
  }
`;

const Select = styled.select`
  position: relative;
  width: 104px;
  height: 40px;
  border: 1px solid #ececec;
  border-radius: 5px;
  padding-left: 16px;
  appearance: none;
  outline: none;
  cursor: pointer;
`;
