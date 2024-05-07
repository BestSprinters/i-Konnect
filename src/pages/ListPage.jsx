import { useEffect, useState } from 'react';

import getDonations from '../apis/donations/getDonationsApi';
import SponsorCard from '../components/SponsorCard';

function ListPage() {
  const [donationsData, setDonationsData] = useState([]);

  const getDonationsData = async () => {
    const result = await getDonations();
    return setDonationsData(result);
  };

  useEffect(() => {
    getDonationsData();
  }, []);

  return (
    <div className="min-x-[1200px] container w-[100%]">
      {donationsData.map((donation) => (
        <SponsorCard donation={donation} />
      ))}
    </div>
  );
}

export default ListPage;
