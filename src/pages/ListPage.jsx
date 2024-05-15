import { useEffect, useState } from 'react';

import getDonations from '../apis/donations/getDonationsApi';
import icPlus from '../assets/imgs/ic_plus.svg';
import Chart from '../components/Chart';
import Header from '../components/Header';
import InnerAnimation from '../components/InnerAnimation';
import LinkButton from '../components/LinkButton';
import MyCredit from '../components/MyCredit';
import SponsorPagination from '../components/SponsorPagination';
import SponsorSlider from '../components/SponsorSlider';
import useMediaQuery from '../hooks/useMediaQuery';
import useToggle from '../hooks/useToggle';

function ListPage() {
  const tabletSize = useMediaQuery('(max-width: 1280px)');

  const [donations, setDonations] = useState([]);
  const [nextCursor, setNextCursor] = useState('');

  const fetchOption = {
    cursor: '',
    pageSize: 10,
  };

  const [isOnlyFavorite, toggleOnlyFavorite] = useToggle(false);

  // 데이터 로딩
  useEffect(() => {
    const fetchData = async () => {
      const FetchOption = {
        cursor: '',
        pageSize: isOnlyFavorite ? 10000 : 10,
      };

      const { list: donationList, nextCursor: donationNextCursor } =
        await getDonations(FetchOption);

      if (isOnlyFavorite) {
        const favoriteIdols =
          JSON.parse(localStorage.getItem('MyPage_FavoriteIdol')) ?? [];
        const favoriteIdolIds = favoriteIdols.map(
          (favoriteIdol) => favoriteIdol.id,
        );
        const filteredDonations = donationList.filter((donation) =>
          favoriteIdolIds.includes(donation.idol.id),
        );

        setDonations(filteredDonations);
      } else {
        setDonations(donationList);
        setNextCursor(donationNextCursor);
      }
    };

    fetchData();
  }, [isOnlyFavorite]);

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
      <InnerAnimation>
        <MyCredit />
        <div className="mt-10 tablet:mt-16">
          <div className="mx-6 flex flex-col gap-1 tablet:gap-2 desktop:m-0 desktop:gap-3">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-bold text-whitePrimary tablet:text-xl desktop:m-0 desktop:text-2xl">
                후원을 기다리는 조공
              </h1>
              <LinkButton type="fitSquarePrimary" to="/addSponsor">
                <img src={icPlus} alt="" className="mr-1" />
                조공 등록하기
              </LinkButton>
            </div>
            <div className="flex items-center">
              <label
                className="inline-flex cursor-pointer items-center"
                htmlFor="toggle"
              >
                <input
                  type="checkbox"
                  value={isOnlyFavorite}
                  onClick={toggleOnlyFavorite}
                  className="peer sr-only"
                  id="toggle"
                />
                <div className="peer relative h-5 w-9 rounded-full border-gray-600 bg-gray-700 after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-whitePrimary after:bg-whitePrimary after:transition-all after:content-[''] peer-checked:bg-pointOrangePink peer-checked:after:translate-x-full peer-checked:after:border-whitePrimary peer-focus:outline-none peer-focus:ring-[3px] peer-focus:ring-pointOrangePink/40 mobile:h-4 mobile:w-7 after:mobile:h-3 after:mobile:w-3 rtl:peer-checked:after:-translate-x-full" />
                <span className="ml-2 text-sm font-medium text-grayLight mobile:text-xs">
                  내가 관심있는 아이돌
                </span>
              </label>
            </div>
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
      </InnerAnimation>
    </div>
  );
}

export default ListPage;
