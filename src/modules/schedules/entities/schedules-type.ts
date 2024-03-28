export enum Pet {
  CAT = 'CAT',
  DOG = 'DOG',
}
export enum Status {
  PENDING = 'PENDING',
  FINISHED = 'FINISHED',
  CANCELED = 'CANCELED',
}

export type Breed = {
  id: string;
  name: string;
  image: {
    url: string;
  };
};
