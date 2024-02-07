export enum OwnerType {
  User = "user",
}

export interface IPlayListExternalUrls {
  spotify: string;
}

export interface IPlayListImage {
  height: number | null;
  url: string;
  width: number | null;
}

export interface IPlayListOwner {
  display_name: string;
  external_urls: IPlayListExternalUrls;
  href: string;
  id: string;
  type: OwnerType;
  uri: string;
}

export interface IPlayListTracks {
  href: string;
  total: number;
  items: any;
}

export interface IPlayList {
  collaborative: boolean;
  description: string;
  external_urls: IPlayListExternalUrls;
  href: string;
  id: string;
  images: IPlayListImage[];
  name: string;
  owner: IPlayListOwner;
  primary_color: null;
  public: null;
  snapshot_id: string;
  tracks: IPlayListTracks;
  type: string;
  uri: string;
}
