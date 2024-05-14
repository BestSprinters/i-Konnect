import { useEffect, useState } from 'react';

import getCharts from '../apis/charts/getChartApi';
import useMediaQuery from './useMediaQuery';

function useChartLoader(initialOptions) {
  const matches = useMediaQuery('(min-width: 1280px)');
  const [chartList, setChartList] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [chartOption, setChartOption] = useState(initialOptions);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const loadChartList = async () => {
      const { idols, nextCursor } = await getCharts(chartOption);
      const filteredIdols = idols.filter(
        (idol) =>
          idol.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          idol.group.toLowerCase().includes(searchValue.toLowerCase()),
      );
      setChartList(filteredIdols);
      setHasMore(nextCursor !== null);
    };
    loadChartList();
  }, [searchValue, chartOption]);

  const updateChartOption = (options) => {
    setChartOption((prevOptions) => ({
      ...prevOptions,
      ...options,
    }));
  };

  const updateSearchIdol = (inputValue) => {
    setSearchValue(inputValue);
    if (inputValue === '') {
      setChartOption((prevOptions) => ({
        ...prevOptions,
        pageSize: matches ? 10 : 5,
      }));
    } else {
      setChartOption((prevOptions) => ({
        ...prevOptions,
        pageSize: 10000,
      }));
    }
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
