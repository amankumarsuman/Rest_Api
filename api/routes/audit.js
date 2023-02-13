const { Router } = require("express");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const AuditReport = require("../models/audit");

//get all the product from data base
router.get("/", (req, res, next) => {
  AuditReport.find()
    .select(
      "companyName auditResult highriskDetails kyc risk description tokenName address language network tokenSymbol tokenType totalSupply compiler optimizationEnabled sha256Checksum ownerWallet deployerWallet canTakeBackOwnership ownerChangeBalance blacklist ModifyFees Whitelisted AntiWhale TradingCooldown TransferPausable CannotSellAll HiddenOwner Mint designLogic CompilerWarnings PrivateUserDataLeak TimestampDependence RaceConditions DelayInDataDelivery OracleCalls  Proxy telegramLink twitterLink FrontRunning revert ecoModel blockGasLimit methodExePermission exchangeRateImpact maliciousLog scoping storagePointer arithmatic racecond zeppelinModule fallbackFn highriskfinding lowriskfinding mediumriskfinding suggestion gas featureHead1 featureHead2 featureHead3 featureHead4 featureDesc1 featureDesc2 featureDesc3 featureDesc4 manualReview tool1 tool2 tool3 tool4 tool5 tool6 lowriskDetails mediumriskDetails suggestionDetails gasDetails  weblink _id"
    )
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        auditReportData: docs,
      };
      // console.log(docs);
      // if (docs.length >= 0) {
      res.status(200).json(response);
      // } else {
      //   res.status(404).json({ message: "No Data Found" });
      // }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});
router.post("/add", (req, res, next) => {
  const auditReport = new AuditReport({
    _id: new mongoose.Types.ObjectId(),
    companyName: req.body.companyName,
    auditResult: req?.body?.auditResult,
    kyc: req?.body?.kyc,
    risk: req?.body?.risk,
    description: req?.body?.description,
    tokenName: req?.body?.tokenName,
    address: req?.body?.address,

    language: req?.body?.language,
    network: req?.body?.network,
    tokenSymbol: req?.body?.tokenSymbol,
    tokenType: req?.body?.tokenType,
    totalSupply: req?.body?.totalSupply,
    compiler: req?.body?.compiler,
    optimizationEnabled: req?.body?.optimizationEnabled,
    sha256Checksum: req?.body?.sha256Checksum,
    ownerWallet: req?.body?.ownerWallet,
    deployerWallet: req?.body?.deployerWallet,
    canTakeBackOwnership: req?.body?.canTakeBackOwnership,
    ownerChangeBalance: req?.body?.ownerChangeBalance,
    blacklist: req?.body?.blacklist,
    ModifyFees: req?.body?.ModifyFees,
    Whitelisted: req?.body?.Whitelisted,
    AntiWhale: req?.body?.AntiWhale,
    TradingCooldown: req?.body?.TradingCooldown,
    TransferPausable: req?.body?.TransferPausable,
    CannotSellAll: req?.body?.CannotSellAll,
    HiddenOwner: req?.body?.HiddenOwner,
    Mint: req?.body?.Mint,
    designLogic: req?.body?.designLogic,
    CompilerWarnings: req?.body?.CompilerWarnings,
    PrivateUserDataLeak: req?.body?.PrivateUserDataLeak,
    TimestampDependence: req?.body?.TimestampDependence,
    RaceConditions: req?.body?.RaceConditions,
    DelayInDataDelivery: req?.body?.DelayInDataDelivery,
    OracleCalls: req?.body?.OracleCalls,
    Proxy: req?.body?.Proxy,
    telegramLink: req?.body?.telegramLink,
    twitterLink: req?.body?.twitterLink,
    FrontRunning: req?.body?.FrontRunning,
    revert: req?.body?.revert,
    ecoModel: req?.body?.ecoModel,
    blockGasLimit: req?.body?.blockGasLimit,
    methodExePermission: req?.body?.methodExePermission,
    exchangeRateImpact: req?.body?.exchangeRateImpact,
    maliciousLog: req?.body?.maliciousLog,
    scoping: req?.body?.scoping,
    storagePointer: req?.body?.storagePointer,
    arithmatic: req?.body?.arithmatic,
    racecond: req?.body?.racecond,
    zeppelinModule: req?.body?.zeppelinModule,
    fallbackFn: req?.body?.fallbackFn,
    highriskfinding: req?.body?.highriskfinding,
    lowriskfinding: req?.body?.lowriskfinding,
    mediumriskfinding: req?.body?.mediumriskfinding,
    suggestion: req?.body?.suggestion,
    gas: req?.body?.gas,
    featureHead1: req?.body?.featureHead1,
    featureHead2: req?.body?.featureHead2,
    featureHead3: req?.body?.featureHead3,
    featureHead4: req?.body?.featureHead4,
    featureDesc1: req?.body?.featureDesc1,
    featureDesc2: req?.body?.featureDesc2,
    featureDesc3: req?.body?.featureDesc3,
    featureDesc4: req?.body?.featureDesc4,
    manualReview: req?.body?.manualReview,
    tool1: req?.body?.tool1,
    tool2: req?.body?.tool2,
    tool3: req?.body?.tool3,
    tool4: req?.body?.tool4,
    tool5: req?.body?.tool5,
    tool6: req?.body?.tool6,
    lowriskDetails: req?.body?.lowriskDetails,
    highriskDetails: req?.body?.highriskDetails,
    mediumriskDetails: req?.body?.mediumriskDetails,
    suggestionDetails: req?.body?.suggestionDetails,
    gasDetails: req?.body?.gasDetails,
    weblink: req?.body?.weblink,
  });
  //store in database using save()
  auditReport
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Audit Report Data created successfully",
        createdReport: {
          companyName: result.companyName,
          auditResult: result?.auditResult,
          kyc: result?.kyc,
          risk: result?.risk,
          description: result?.description,
          tokenName: result?.tokenName,
          address: result?.address,

          language: result?.language,
          network: result?.network,
          tokenSymbol: result?.tokenSymbol,
          tokenType: result?.tokenType,
          totalSupply: result?.totalSupply,
          compiler: result?.compiler,
          optimizationEnabled: result?.optimizationEnabled,
          sha256Checksum: result?.sha256Checksum,
          ownerWallet: result?.ownerWallet,
          deployerWallet: result?.deployerWallet,
          canTakeBackOwnership: result?.canTakeBackOwnership,
          ownerChangeBalance: result?.ownerChangeBalance,
          blacklist: result?.blacklist,
          ModifyFees: result?.ModifyFees,
          Whitelisted: result?.Whitelisted,
          AntiWhale: result?.AntiWhale,
          TradingCooldown: result?.TradingCooldown,
          TransferPausable: result?.TransferPausable,
          CannotSellAll: result?.CannotSellAll,
          HiddenOwner: result?.HiddenOwner,
          Mint: result?.Mint,
          designLogic: result?.designLogic,
          CompilerWarnings: result?.CompilerWarnings,
          PrivateUserDataLeak: result?.PrivateUserDataLeak,
          TimestampDependence: result?.TimestampDependence,
          RaceConditions: result?.RaceConditions,
          DelayInDataDelivery: result?.DelayInDataDelivery,
          OracleCalls: result?.OracleCalls,
          Proxy: result?.Proxy,
          telegramLink: result?.telegramLink,
          twitterLink: result?.twitterLink,
          FrontRunning: result?.FrontRunning,
          revert: result?.revert,
          ecoModel: result?.ecoModel,
          blockGasLimit: result?.blockGasLimit,
          methodExePermission: result?.methodExePermission,
          exchangeRateImpact: result?.exchangeRateImpact,
          maliciousLog: result?.maliciousLog,
          scoping: result?.scoping,
          storagePointer: result?.storagePointer,
          arithmatic: result?.arithmatic,
          racecond: result?.racecond,
          zeppelinModule: result?.zeppelinModule,
          fallbackFn: result?.fallbackFn,
          highriskfinding: result?.highriskfinding,
          lowriskfinding: result?.lowriskfinding,
          mediumriskfinding: result?.mediumriskfinding,
          suggestion: result?.suggestion,
          gas: result?.gas,
          featureHead1: result?.featureHead1,
          featureHead2: result?.featureHead2,
          featureHead3: result?.featureHead3,
          featureHead4: result?.featureHead4,
          featureDesc1: result?.featureDesc1,
          featureDesc2: result?.featureDesc2,
          featureDesc3: result?.featureDesc3,
          featureDesc4: result?.featureDesc4,
          manualReview: result?.manualReview,
          tool1: result?.tool1,
          tool2: result?.tool2,
          tool3: result?.tool3,
          tool4: result?.tool4,
          tool5: result?.tool5,
          tool6: result?.tool6,
          lowriskDetails: result?.lowriskDetails,
          highriskDetails: result?.highriskDetails,
          mediumriskDetails: result?.mediumriskDetails,
          suggestionDetails: result?.suggestionDetails,
          gasDetails: result?.gasDetails,
          weblink: result?.weblink,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  AuditReport.findById(id)
    .exec()
    .then((doc) => {
      console.log(doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status.apply(404).json({ message: " no valid id matched" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
  //   if (id === "special") {
  //     res.status(200).json({
  //       message: "you discovered special ID",
  //       id: id,
  //     });
  //   } else {
  //     res.status(200).json({
  //       message: "you passes an ID",
  //     });
  //   }
});
router.patch("/:productId", (req, res, next) => {
  const id = req.params.productId;
  console.log(req.body);
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  AuditReport.updateOne(
    { _id: id },
    // { $set: { name: req.body.newName, price: req.body.newPrice } }
    { $set: updateOps }
  )
    .exec()
    .then((result) => {
      console.log(result);
      result.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
  res.status(200).json({
    message: "Audit Report updated Successfully!",
  });
});
// router.delete("/:productId", (req, res, next) => {
//   const id = req.params.productId;
//   AuditReport.remove({ _id: id })
//     .exec()
//     .then((result) => {
//       result
//         .status(200)
//         .json({ message: "deleted Successfully!", data: result });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({ error: err });
//     });

// });
router.delete("/delete/:id", async (req, res, next) => {
  const deleted = await AuditReport.findByIdAndDelete(req.params.id);
  res.status(200).send({
    success: true,
    deletedData: deleted,
    message: "Successfully Deleted",
  });
});

//Update by ID Method
router.patch("/update/:id", async (req, res) => {
  console.log(req.body);
  const updatedReport = await AuditReport.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      // new: true,
    }
  );

  res.status(200).send({
    success: true,
    message: "Audit Report is Successfully updated",
    updatedReport,
  });
});
module.exports = router;
