/*
 *  API component
 *  access to endPoint Lookup service
 *
 */


import axios from 'axios';

const _baseURL = 'http://lookup.dbpedia.org/api/search/KeywordSearch?';
// http://lookup.dbpedia.org/api/search/KeywordSearch?QueryClass=place&QueryString=berlin

function getTermSearched (term) {

  const url = _baseURL + "QueryString=" + term
  axios.defaults.headers.common['Accept'] = 'application/json';
console.log(url)
  return axios.get(url)
    .then(function (currentDBPediaData) {
      console.log(currentDBPediaData)
      return currentDBPediaData
    })
}

module.exports = {
  getTermSearched: getTermSearched
};
