import { useEffect, useState } from 'react';

import getDonations from '../apis/donations/getDonationsApi';
import icPlus from '../assets/imgs/ic_plus.svg';
import Chart from '../components/Chart';
import Header from '../components/Header';
import LinkButton from '../components/LinkButton';
import MyCredit from '../components/MyCredit';
import SponsorPagination from '../components/SponsorPagination';
import SponsorSlider from '../components/SponsorSlider';
import useMediaQuery from '../hooks/useMediaQuery';

function ListPage() {
  const tabletSize = useMediaQuery('(max-width: 1280px)');

  const [donations, setDonations] = useState([]);
  const [nextCursor, setNextCursor] = useState('');

  const fetchOption = {
    cursor: '',
    pageSize: 10,
  };

  // 초기 데이터 로딩
  useEffect(() => {
    const fetchInitialData = async () => {
      const initialFetchOption = {
        cursor: '',
        pageSize: 10,
      };
      try {
        const result = await getDonations(initialFetchOption);
        setDonations(result.list);
        setNextCursor(result.nextCursor);
      } catch (error) {
        console.error('데이터를 불러오지 못했습니다.', error);
      }
    };

    fetchInitialData();
  }, []);

  // 추가 데이터 로딩
  const handleReachEnd = async () => {
    if (nextCursor) {
      try {
        const newFetchOption = { ...fetchOption, cursor: nextCursor };
        const result = await getDonations(newFetchOption);
        setDonations((prevData) => [...prevData, ...result.list]);
        setNextCursor(result.nextCursor);
      } catch (error) {
        console.error('추가 데이터를 불러오지 못했습니다.', error);
      }
    }
  };

  return (
    <div className="desktop:base-container">
      <Header />
      <MyCredit />
      <div className="mt-10 tablet:mt-16">
        <div className="mx-6 flex flex-row justify-between">
          <h1 className="text-bold text-2xl">후원을 기다리는 조공</h1>
          <LinkButton type="fitSquarePrimary" to="/addSponsor">
            <img src={icPlus} alt="" className="mr-1" />
            조공 등록하기
          </LinkButton>
        </div>
        {tabletSize ? (
          <SponsorSlider donations={donations} onReachEnd={handleReachEnd} />
        ) : (
          <SponsorPagination
            donations={donations}
            onReachEnd={handleReachEnd}
          />
        )}
      </div>
      <Chart />
    </div>
  );
}

export default ListPage;
