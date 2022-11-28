export default class SummaryModel {
  constructor(publicationDate, thumbnail, headline, bodyText, id) {
    this.publicationDate = publicationDate;
    this.thumbnail = thumbnail;
    this.headline = headline;
    this.summary = bodyText;
    this._id = id;
  }
}
