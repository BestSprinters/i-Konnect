import { useEffect, useState } from 'react';

import getCharts from '../apis/charts/getChartApi';

function useChartLoader(initialOptions) {
  const [chartList, setChartList] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [chartOption, setChartOption] = useState(initialOptions);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const loadChartList = async () => {
      const { idols, nextCursor } = await getCharts(chartOption);
      const filteredIdols =
        searchValue === false
          ? idols
          : idols.filter(
              (idol) =>
                idol.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                idol.group.toLowerCase().includes(searchValue.toLowerCase()),
            );
      setChartList(filteredIdols);
      setHasMore(nextCursor !== null);
    };
    loadChartList();
  }, [chartOption, searchValue]);

  const updateChartOption = (options) => {
    setChartOption((prevOptions) => ({
      ...prevOptions,
      ...options,
    }));
  };

  const updateSearchIdol = (e) => {
    setSearchValue(e.target.value);
    setChartOption((prevOptions) => ({
      ...prevOptions,
      pageSize: 10000,
    }));
  };

  return {
    chartList,
    hasMore,
    updateChartOption,
    setChartList,
    chartOption,
    searchValue,
    updateSearchIdol,
  };
}

export default useChartLoader;
