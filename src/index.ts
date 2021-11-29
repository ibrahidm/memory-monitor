import numeral from 'numeral';

const memoryMonitor = ({
  interval = 10000,
  rss = true,
  heapTotal = true,
  heapUsed = false,
  external = false,
  arrayBuffers = false,
} = {}) => {
  setInterval(() => {
    const {
      rss: r,
      heapTotal: ht,
      heapUsed: hu,
      external: e,
      arrayBuffers: ab,
    } = process.memoryUsage();
    console.log(
      rss ? `rss: ${numeral(r).format('0.0 ib')}` : '',
      heapTotal ? `| heapTotal: ${numeral(ht).format('0.0 ib')}` : '',
      heapUsed ? `| heapUsed: ${numeral(hu).format('0.0 ib')}` : '',
      external ? `| external: ${numeral(e).format('0.0 ib')}` : '',
      arrayBuffers ? `| arrayBuffers: ${numeral(ab).format('0.0 ib')}` : ''
    );
  }, interval);
};

export default memoryMonitor;
