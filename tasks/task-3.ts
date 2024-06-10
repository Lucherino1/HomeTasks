/*
  Переписать тип TUnified следующим образом.
  Он должен взять все поля с IFirst, с ISecond только поле 'd', с IThird все, кроме поля 'h'
*/

interface IFirst {
  a?: number;
  b?: string;
  c?: string;
}

interface ISecond {
  d: string;
  e: number;
  f: number;
}

interface IThird {
  g: boolean;
  h: string;
  i: number;
}

type TUnified = IFirst & Pick<ISecond, "d"> & Omit<IThird, "h">;

export { type TUnified };
