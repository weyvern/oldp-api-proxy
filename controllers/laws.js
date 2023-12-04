import { OldAPIClient } from '../utils/OldpAPI.js';

export const getLawById = (req, res) => {
  //https://github.com/openlegaldata/oldp-sdk-javascript/blob/master/docs/LawsApi.md#lawsread
  const lawId = req.params.id;
  const apiInstance = new OldAPIClient.LawsApi();

  const callback = (error, data) => {
    if (error) {
      res.status(error.status || 500).json({ error: error.response.text });
    } else {
      res.json(data);
    }
  };
  apiInstance.lawsRead(lawId, callback);
};

export const getBookById = (req, res) => {
  //https://github.com/openlegaldata/oldp-sdk-javascript/blob/master/docs/LawsApi.md#lawslist
  const bookId = req.params.id;
  const apiInstance = new OldAPIClient.LawsApi();
  const options = {
    bookId
  };

  const callback = (error, data) => {
    if (error) {
      res.status(error.status || 500).json({ error: error.response.text });
    } else {
      res.json(data);
    }
  };
  apiInstance.lawsList(options, callback);
};
