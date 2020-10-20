import React, { useState } from 'react';
import MainSlide from './Components/MainSlide';
import LocationModal from './Components/LocationModal';
import FilterContainer from './Components/FilterContainer';
import BookMark from './Components/BookMark';
import ActiveRecruitment from './Components/ActiveRecruitment';
import RecruitCompanyLists from './Components/RecruitCompanyLists';
import styled from 'styled-components';
import Nav from '../../Components/Nav/Nav';
import ComapnySlide from '../CompanyLists/Components/CompanySlide';
import { API } from '../../config';

function CompanyLists() {
  const [filterValue, setFilterValue] = useState('date');
  const [openModal, setOpenModal] = useState(false);
  const [locationId, setLocationId] = useState(1);
  const [detailLocationId, setDetailLoactionId] = useState(0);
  const [locationFilterAddress, setLocationFilterAddress] = useState('');

  const [tagInput, setTagInput] = useState(false);
  const [locationName, setLocationName] = useState('전체');
  const [detailLocationName, setDetailLocationName] = useState('');
  const [tag, setTag] = useState('전체');
  const [locationTitle, setLocationTitle] = useState('전체');

  const handleChange = (e) => {
    setFilterValue(e.target.value);
  };

  const changeLocationfilter = () => {
    if (locationId == 1) {
      setLocationFilterAddress(`${API}/recruit/`);
    } else {
      setLocationFilterAddress(
        `${API}/recruit/?location=${
          locationId - 1
        }&detail_location=${detailLocationId}`
      );
    }
    setOpenModal(false);
  };

  return (
    <>
      <Nav />
      <ComapnySlide />
      <MainSlide />
      <Container>
        <LocationModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          locationId={locationId}
          detailLocationId={detailLocationId}
          locationFilterAddress={locationFilterAddress}
          setLocationId={setLocationId}
          setDetailLoactionId={setDetailLoactionId}
          setLocationFilterAddress={setLocationFilterAddress}
          changeLocationfilter={changeLocationfilter}
          setTagInput={setTagInput}
          setLocationName={setLocationName}
          setDetailLocationName={setDetailLocationName}
          setLocationTitle={setLocationTitle}
        />
        <FilterContainer
          openModal={openModal}
          setOpenModal={setOpenModal}
          handleChange={handleChange}
          locationName={locationName}
          locationTitle={locationTitle}
        />
        <BookMark />
        <ActiveRecruitment />
        <RecruitCompanyLists
          filterValue={filterValue}
          locationFilterAddress={locationFilterAddress}
        />
      </Container>
    </>
  );
}

export default CompanyLists;

const Container = styled.div`
  width: 1050px;
  height: 800px;
  margin: 0px auto;
  padding: 20px 0px 80px;
`;
