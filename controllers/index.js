const db = require("../db").mongoConnection();
const Api404Error = require("../validator/Api404Error");
const CommonError = require("../validator/CommonError");

exports.filterData = async (req, res) => {
  try {
    const { startDate, endDate, minCount, maxCount } = req.body;

    if (!startDate || !endDate || !minCount || !maxCount) {
      return res.json({
        error: new CommonError("Input fields cannot be empty"),
      });
    }

    const records = (await db).collection("records");
    let query = [
      {
        $project: {
          _id: 0,
          key: 1,
          createdAt: 1,
          totalCount: {
            $sum: "$counts",
          },
        },
      },
      {
        $match: {
          totalCount: {
            $gte: minCount,
            $lt: maxCount,
          },
          createdAt: {
            $gte: new Date(startDate),
            $lt: new Date(endDate),
          },
        },
      },
    ];

    const result = await records.aggregate(query).toArray();
    const output = {
      code: 0,
      msg: "success",
      records: result,
    };

    res.json(output);
  } catch (error) {
    return res.json({
      error: new Api404Error(error.message),
    });
  }
};

exports.showDetails = async (req, res) => {
  return res.json({
    msg: "Please refer to below url with required parameters",
    url: "https://getir-assignment-rishabh.herokuapp.com/api/filter-data",
    parameters: "startDate=[Date] endDate=[Date] minCount=[Integer] maxCount=[Integer]"
  })
}
