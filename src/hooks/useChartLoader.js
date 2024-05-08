import { useEffect, useState } from 'react';

import getCharts from '../apis/charts/getChartApi';

function useChartLoader(initialOptions) {
  const [chartList, setChartList] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [chartOption, setChartOption] = useState(initialOptions);

  useEffect(() => {
    const loadChartList = async () => {
      const result = await getCharts(chartOption);
      setChartList(result.idols);
      setHasMore(result.nextCursor !== null);
    };
    loadChartList();
  }, [chartOption]);

  const updateChartOption = (options) => {
    setChartOption((prevOptions) => ({
      ...prevOptions,
      ...options,
    }));
  };

  return { chartList, hasMore, updateChartOption, setChartList, chartOption };
}

export default useChartLoader;
