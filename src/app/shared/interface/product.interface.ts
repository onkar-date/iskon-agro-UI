export interface IProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  specification: ISpecification;
  advantages: string[];
  forBestResults: string[];
  doses: IDose[];
  availablePackaging: string[];
}

export interface ISpecification {
  byWeight: {
    name: string;
    value: string;
  }[];
  byPercent: {
    name: string;
    value: string;
  }[];
}

export interface IDose {
  name: string;
  suggestion: string;
}
