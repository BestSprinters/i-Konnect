import Chart from '../components/Chart';
import Header from '../components/Header';
import InnerAnimation from '../components/InnerAnimation';
import MyCredit from '../components/MyCredit';
import SponsorPagination from '../components/SponsorPagination';
import SponsorSlider from '../components/SponsorSlider';
import useMediaQuery from '../hooks/useMediaQuery';

function ListPage() {
  const tabletSize = useMediaQuery('(max-width: 1280px)');

  return (
    <div className="desktop:base-container">
      <Header />
      <InnerAnimation>
        <MyCredit />
        {tabletSize ? <SponsorSlider /> : <SponsorPagination />}
        <Chart />
      </InnerAnimation>
    </div>
  );
}

export default ListPage;
