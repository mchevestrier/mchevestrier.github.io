export type Metadata = {
  title: string,
  other: {
    order: number,
    bgColor: string,
    icon: string,
  }
};

export type PageMetadata = Metadata & {
  slug: string,
};
