const jobeeTrans = require('../models/jobeeDoorStatus');
const fs = require('fs')
var moment = require("moment");
var _ = require("lodash");


exports.addDoorStatus = (req, res) => {
  const {doorNumber, doorStatus} = req.body;
  let DateCreated = moment().format('l');
  let completeId = new jobeeTrans({ doorNumber, doorStatus, DateCreated});
  
  completeId.save((err, data) => {
      if (err) {
          console.log(err)
          return res.status(400).json({
              error: err.errmsg
           
          });
      }

      res.json('Success : Added jobee Door status'); // dont do this res.json({ tag: data });
  });
};

exports.getPaginatedSearchJobeeTrans= (req, res) => {
  const pagination = req.query.pagination ? parseInt(req.query.pagination) : 10;
  const page = req.query.page ? parseInt(req.query.page) : 1;

//   const Name = req.query.Name;
//   const Code = req.query.Code;
//   if (Name) {
//     hexbolt.count({}).exec((err, total) => {
//         hexbolt.find({ $or: [{ FirstName: { $regex: Name, $options: 'i' } }] }).skip((page - 1) * pagination).limit(pagination).sort({ "Name": 1 }).exec((err, tag) => {
//                 if (err) {
//                   return res.status(400).json({
//                       error: 'hexbolt not found'
//                   });
//               }

//               res.json({
//                   "identifier": "get all hexbolt list", tag,
//                   pagination, page, total
//               });

//           });
//       });
//   } else if (Code) {
//     hexbolt.count({}).exec((err, total) => {
//         hexbolt.find({
//               $or: [
//                   { IdNumber: { $regex: Code, $options: 'i' } }
//               ]
//           }).skip((page - 1) * pagination).limit(pagination).exec((err, tag) => {
//               if (err) {
//                   return res.status(400).json({
//                       error: 'hexbolt not found'
//                   });
//               }
//               res.json({
//                   "identifier": "get all hexbolt list", tag,
//                   pagination, page, total
//               });
//           });
//       });

//   } else {

    jobeeTrans.count({}).exec((err, total) => {

        jobeeTrans.find({}).skip((page - 1) * pagination).limit(pagination).exec((err, tag) => {
              if (err) {
                  return res.status(400).json({
                      error: 'jobeeTrans not found'
                  });
              }
              for (let val of tag) {
                  let TypeID = (val.TypeID);
                  jobeeTrans.find({ _id: TypeID }).exec((err, tag) => {
        
                  });
              }
              res.json({ "identifier": "get all jobee trans list", tag, pagination, page, total });

          });
      });
};

exports.getJobeeDoorStatus= (req, res) => {
  

    jobeeTrans.find({}).exec((err, allUser) => {
      if (err) {
          return res.status(400).json({
              error: 'jobee trans not found'
          });
      }
      res.json({
          "identifier": "get ALL jobee trans", allUser
      });
});
};

exports.getOneJobeeDoorStatus = (req, res) => {
  const slug = req.params.slug.toLowerCase();

  jobeeTrans.findOne({ _id: slug }).exec((err, allUser) => {
      if (err) {
          return res.status(400).json({
              error: 'jobeeTrans not found'
          });
      }
      res.json({
          "identifier": "get One jobeeTrans", allUser
      });
});
};


exports.updateJobeeDoorStatus = (req, res) => {
  const slug = req.params.slug.toLowerCase();
  var myquery = { _id: slug }
  var newV = req.body;
  jobeeTrans.updateOne(myquery, newV).exec((err, tag) => {
      if (err) {
          return res.status(400).json({
              error: 'cant update jobeeTrans'
          });
      }
      res.json( {"identifier" : "updated jobeeTrans"});
  });
};
