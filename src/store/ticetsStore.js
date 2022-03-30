import { makeAutoObservable } from "mobx";

export default class TicetsStore {
  constructor() {
    this._activFilter = false;

    this._ticet = [];
    this.arrTicetsFilter = [];
    this.ticetPerPage = [];

    this.activePage = 1;
    this.currentPaintings = 5;
    makeAutoObservable(this);
  }

  setTicet(ticets) {
    this._ticet = ticets;
  }

  setTicetPerPage(ticets) {
    this.ticetPerPage = ticets;
  }

  setArrTicetsFilter(ticets) {
    this.arrTicetsFilter = ticets;
  }

  setActivFilter(bool) {
    this._activFilter = bool;
  }

  get activFilter() {
    return this._activFilter;
  }

  get ticet() {
    return this._ticet;
  }

  setTicetsPage(arr = this._ticet) {
    if (this._activFilter) {
      arr = this.arrTicetsFilter;
    }

    const lastPaintig = this.activePage * this.currentPaintings;
    const firstPaintig = lastPaintig - this.currentPaintings;
    const currentPaintigsPage = arr.slice(firstPaintig, lastPaintig);
    currentPaintigsPage.map((ticet) => {
      return this.ticetPerPage.push(ticet);
    });
  }
}
