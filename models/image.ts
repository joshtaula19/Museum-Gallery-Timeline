export interface Image {
  info: Info
  records: Record[]
}

export interface Info {
  totalrecordsperquery: number
  totalrecords: number
  pages: number
  page: number
  next: string
  responsetime: string
}

export interface Record {
  date: Date | null
  imageid: number
  idsid: number
  caption: null | string
  format: Format
  description: null
  renditionnumber: string
  baseimageurl: string
  alttext: null
  width: number
  id: number
  iiifbaseuri: string
  fileid: number
  height: number
  copyright: Copyright
}

export enum Format {
  ImageJPEG = 'image/jpeg',
}

export enum Copyright {
  PresidentAndFellowsOfHarvardCollege = 'President and Fellows of Harvard College',
}
