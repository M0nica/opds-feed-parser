import OPDSEntry from "./opds_entry";
import OPDSLink from "./opds_link";

export default class OPDSFeed {
  id: string;
  title: string;
  updated: string;
  entries: Array<OPDSEntry>;
  links: Array<OPDSLink>;
  complete: boolean;
  search: {
    totalResults: number,
    startIndex: number,
    itemsPerPage: number,
  };
  unparsed: any;

  constructor(args: OPDSFeedArgs) {
    Object.assign(this, args);
  }
}

export interface OPDSFeedArgs extends OPDSFeed {
}