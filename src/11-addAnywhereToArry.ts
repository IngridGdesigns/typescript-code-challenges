/* adding an item anywhere in an array.
 */

export function addAnywhere(arr: any[], item: any, index: number): Array<any> {
  arr.splice(index, 0, item);
  return arr;
}
