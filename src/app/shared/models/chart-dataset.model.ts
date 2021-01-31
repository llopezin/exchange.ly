export default class Dataset {
  label: string;
  data: number[];
  borderColor: string[];
  borderWidth: number = 2;
  backgroundColor: string;

  constructor(data, currency) {
    this.data = data;
    this.label = currency;
    this.borderColor = [random_rgba()];
    this.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
}

function random_rgba() {
  let o = Math.round,
    r = Math.random,
    s = 250;
  return (
    'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + '1' + ')'
  );
}
