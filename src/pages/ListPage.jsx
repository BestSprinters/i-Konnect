import Header from '../components/Header';
import SponsorPagination from '../components/SponsorPagination';
import SponsorSlider from '../components/SponsorSlider';
import useMediaQuery from '../hooks/useMediaQuery';

function ListPage() {
  const tabletSize = useMediaQuery('(max-width: 1280px)');
  return (
    <div>
      <Header />
      {tabletSize ? <SponsorSlider /> : <SponsorPagination />}
    </div>
  );
}

export default ListPage;
