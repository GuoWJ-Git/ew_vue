export function pageCountCalculate(count, pageSize) {
  if (typeof count === 'number') {
    if (count > 0) {
      try {
        let pagerCount = count % pageSize === 0 ? count / pageSize : count / pageSize + 1;
        const roundCount = pagerCount.toFixed(0);
        pagerCount = roundCount > pagerCount ? roundCount - 1 : roundCount;
        return pagerCount;
      } catch (error) {
        return 0;
      }
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}
