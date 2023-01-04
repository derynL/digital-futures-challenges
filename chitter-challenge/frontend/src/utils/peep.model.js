class PeepModel {
  constructor(peepMsg, date, userName = ``) {
    this.peepMsg = peepMsg;
    this.date = date;
    this.userName = userName;
  }
}
export default PeepModel;
