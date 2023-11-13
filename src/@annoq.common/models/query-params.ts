export enum UrlQueryType {
  chr = 'chr',
  gp = 'gp',
}

export class UrlQueryParams {
  query_type: UrlQueryType;
  chr?: string;
  start?: number;
  end?: number;
  gp?: string;

}