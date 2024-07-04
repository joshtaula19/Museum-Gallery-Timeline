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
  copyright: Copyright
  imageid: number
  idsid: number
  accesslevel: number
  format: Format
  caption: null | string
  description: null
  technique: Technique
  renditionnumber: string
  colors: Color[]
  baseimageurl: string
  fingerprints: Fingerprint[]
  alttext: null
  width: number
  id: number
  lastupdate: Lastupdate
  iiifbaseuri: string
  fileid: number
  height: number
}

export interface Color {
  color: string
  spectrum: Spectrum
  hue: Hue
  percent: number
  css3: Css3
}

export enum Css3 {
  A9A9A9 = '#a9a9a9',
  C0C0C0 = '#c0c0c0',
  Dcdcdc = '#dcdcdc',
  Fffafa = '#fffafa',
  The000000 = '#000000',
  The2F4F4F = '#2f4f4f',
  The696969 = '#696969',
  The808080 = '#808080',
}

export enum Hue {
  Black = 'Black',
  Grey = 'Grey',
  White = 'White',
}

export enum Spectrum {
  The1Eb264 = '#1eb264',
  The2Eb45D = '#2eb45d',
  The3Db657 = '#3db657',
  The7866Ad = '#7866ad',
  The8362Aa = '#8362aa',
  The8761Aa = '#8761aa',
  The8C5Fa8 = '#8c5fa8',
  The955Ba5 = '#955ba5',
}

export enum Copyright {
  PresidentAndFellowsOfHarvardCollege = 'President and Fellows of Harvard College',
}

export interface Fingerprint {
  perceptualhash: string
  wavelethash: string
  differencehash: string
  colorhash: Colorhash
  averagehash: string
}

export enum Colorhash {
  The07000000000 = '07000000000',
  The1E000000000 = '1e000000000',
}

export enum Format {
  ImageJPEG = 'image/jpeg',
}

export enum Lastupdate {
  The20240703T0437310400 = '2024-07-03T04:37:31-0400',
}

export enum Technique {
  KodakEPY = 'Kodak EPY',
  KodakEktapan = 'Kodak Ektapan',
}
