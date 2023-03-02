export type Reverse<T extends Array<unknown>> = T extends [
  infer Head,
  ...infer Rest
]
  ? [...Reverse<Rest>, Head]
  : [];
