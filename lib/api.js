// import axios from 'axios';

const callNewsData = (q, page, from, to) => {
  console.log(q, page, from, to);
  const apiKey = '16e0ef998d404c258e85377281d4d735';
  const pageSize = 10;
  const language = 'ko';
  const sortBy = 'publishedAt';
  let query = `?pageSize=${pageSize}&language=${language}&apiKey=${apiKey}&sortBy=${sortBy}`;
  let qData;
  let pageData;
  let fromData;
  let toData;

  if (q === undefined) {
    qData = 'all';
  } else {
    qData = q;
  }
  query = `${query}&q=${qData}`;
  if (page === undefined) {
    pageData = 1;
  } else {
    pageData = page + 1;
  }
  query = `${query}&page=${pageData}`;

  if (from === undefined) {
    const today = new Date();
    const dd = String(today.getDate());
    const mm = String(today.getMonth() + 1);
    const yyyy = today.getFullYear();

    fromData = `${yyyy}-${mm}-${dd}`;
  } else {
    const fromDate = new Date(from);
    const dd = String(fromDate.getDate());
    const mm = String(fromDate.getMonth() + 1);
    const yyyy = fromDate.getFullYear();

    fromData = `${yyyy}-${mm}-${dd}`;
  }
  query = `${query}&from=${fromData}`;

  if (to === undefined) {
    const today = new Date();
    const dd = String(today.getDate());
    const mm = String(today.getMonth() + 1);
    const yyyy = today.getFullYear();

    toData = `${yyyy}-${mm}-${dd}`;
  } else {
    const toDate = new Date(to);
    const dd = String(toDate.getDate());
    const mm = String(toDate.getMonth() + 1);
    const yyyy = toDate.getFullYear();

    toData = `${yyyy}-${mm}-${dd}`;
  }
  query = `${query}&to=${toData}`;
  console.log(query);
  // http://newsapi.org/v2/everything?q=all&language=ko&from=2020-04-01&to=2020-04-15&sortBy=publishedAt&pageSize=10&page=1&apiKey=16e0ef998d404c258e85377281d4d735

  const url = `http://newsapi.org/v2/everything${query}`;
  return url;
};

export default callNewsData;
