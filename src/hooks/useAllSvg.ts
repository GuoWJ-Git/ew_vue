/**
 * @description get all icons
 * @export
 * @return {*}
 */
export function useAllSvg() {
  const path = '../assets/svg/*.svg';
  const sliceLength = path.split('*')[0].length;
  const nameList: string[] = [];
  const files: Record<string, string> = import.meta.globEager('../assets/svg/*.svg');
  Object.keys(files).forEach((item: string) => {
    const sub = item.substring(0, item.length - 4).slice(sliceLength);
    nameList.push(sub);
  });

  return nameList;
}
