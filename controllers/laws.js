import { OldAPIClient } from '../utils/OldpAPI.js';

export const getLawById = (req, res) => {
  const lawId = req.params.id;
  const apiInstance = new OldAPIClient.LawsApi();
  const callback = function (error, data, response) {
    if (error) {
      res.status(error.status || 500).json({ error: error.response.text });
    } else {
      res.json(data);
    }
  };
  apiInstance.lawsRead(lawId, callback);
};

export const getBookById = (req, res) => {
  const bookId = req.params.id;
  const apiInstance = new OldAPIClient.LawBooksApi();
  const callback = function (error, data, response) {
    if (error) {
      res.status(error.status || 500).json({ error: error.response.text });
    } else {
      res.json(data);
    }
  };
  apiInstance.lawBooksRead(bookId, callback);
};
