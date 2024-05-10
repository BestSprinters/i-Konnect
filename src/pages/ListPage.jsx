import Header from '../components/Header';
import MyCredit from '../components/MyCredit';
import SponsorPagination from '../components/SponsorPagination';
import SponsorSlider from '../components/SponsorSlider';
import useMediaQuery from '../hooks/useMediaQuery';

function ListPage() {
  const tabletSize = useMediaQuery('(max-width: 1280px)');
  return (
    <div className="xl:base-container">
      <Header />
      <MyCredit />
      {tabletSize ? <SponsorSlider /> : <SponsorPagination />}
    </div>
  );
}

export default ListPage;
