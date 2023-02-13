const mongoose = require("mongoose");

const auditReportSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  companyName: {
    type: String,
    required: true,
  },
  auditResult: {
    type: Boolean,
    default: false,
  },
  kyc: {
    type: Boolean,
    default: false,
  },
  risk: {
    type: String,
  },
  description: {
    type: String,
  },
  weblink: {
    type: String,
  },
  twitterLink: {
    type: String,
  },
  telegramLink: {
    type: String,
  },
  tokenName: {
    type: String,
  },
  tokenType: {
    type: String,
  },
  tokenSymbol: {
    type: String,
  },
  network: {
    type: String,
  },
  language: {
    type: String,
  },
  address: {
    type: String,
  },
  totalSupply: {
    type: String,
  },
  compiler: {
    type: String,
  },
  optimizationEnabled: {
    type: String,
  },
  sha256Checksum: {
    type: String,
  },
  ownerWallet: {
    type: String,
  },
  deployerWallet: {
    type: String,
  },
  canTakeBackOwnership: {
    type: String,
    enum: ["Not Detected", "Detected"],
  },
  ownerChangeBalance: {
    type: String,
    enum: ["Not Detected", "Detected"],
  },
  blacklist: {
    type: String,
    enum: ["Not Detected", "Detected"],
  },
  ModifyFees: {
    type: String,
    enum: ["Not Detected", "Detected"],
  },
  Proxy: {
    type: String,
    enum: ["Not Detected", "Detected"],
  },
  Whitelisted: {
    type: String,
    enum: ["Not Detected", "Detected"],
  },
  AntiWhale: {
    type: String,
    enum: ["Not Detected", "Detected"],
  },
  TradingCooldown: {
    type: String,
    enum: ["Not Detected", "Detected"],
  },
  TransferPausable: {
    type: String,
    enum: ["Not Detected", "Detected"],
  },
  CannotSellAll: {
    type: String,
    enum: ["Not Detected", "Detected"],
  },
  HiddenOwner: {
    type: String,
    enum: ["Not Detected", "Detected"],
  },
  Mint: {
    type: String,
    enum: ["Not Detected", "Detected"],
  },

  designLogic: {
    type: String,
    enum: ["Not Passed", "Passed"],
  },
  CompilerWarnings: {
    type: String,
    enum: ["Not Passed", "Passed"],
  },
  PrivateUserDataLeak: {
    type: String,
    enum: ["Not Passed", "Passed"],
  },
  TimestampDependence: {
    type: String,
    enum: ["Not Passed", "Passed"],
  },
  IntegerOverFlowAndUnderFlow: {
    type: String,
    enum: ["Not Passed", "Passed"],
  },
  RaceConditions: {
    type: String,
    enum: ["Not Passed", "Passed"],
  },
  DelayInDataDelivery: {
    type: String,
    enum: ["Not Passed", "Passed"],
  },
  OracleCalls: {
    type: String,
    enum: ["Not Passed", "Passed"],
  },
  FrontRunning: {
    type: String,
    enum: ["Not Passed", "Passed"],
  },
  revert: {
    type: String,
    enum: ["Not Passed", "Passed"],
  },
  ecoModel: {
    type: String,
    enum: ["Not Passed", "Passed"],
  },
  blockGasLimit: {
    type: String,
    enum: ["Not Passed", "Passed"],
  },
  methodExePermission: {
    type: String,
    enum: ["Not Passed", "Passed"],
  },
  exchangeRateImpact: {
    type: String,
    enum: ["Not Passed", "Passed"],
  },
  maliciousLog: {
    type: String,
    enum: ["Not Passed", "Passed"],
  },
  scoping: {
    type: String,
    enum: ["Not Passed", "Passed"],
  },
  storagePointer: {
    type: String,
    enum: ["Not Passed", "Passed"],
  },
  arithmatic: {
    type: String,
    enum: ["Not Passed", "Passed"],
  },
  racecond: {
    type: String,
    enum: ["Not Passed", "Passed"],
  },
  zeppelinModule: {
    type: String,
    enum: ["Not Passed", "Passed"],
  },
  fallbackFn: {
    type: String,
    enum: ["Not Passed", "Passed"],
  },

  highriskfinding: {
    type: Number,
  },
  lowriskfinding: {
    type: Number,
  },
  mediumriskfinding: {
    type: Number,
  },
  suggestion: {
    type: Number,
  },
  gas: {
    type: Number,
  },

  featureHead1: {
    type: String,
  },
  featureHead2: {
    type: String,
  },
  featureHead3: {
    type: String,
  },
  featureHead4: {
    type: String,
  },
  featureDesc1: {
    type: String,
  },
  featureDesc2: {
    type: String,
  },
  featureDesc3: {
    type: String,
  },
  featureDesc4: {
    type: String,
  },

  manualReview: {
    type: String,
  },
  tool1: {
    type: String,
  },
  tool2: {
    type: String,
  },
  tool3: {
    type: String,
  },
  tool4: {
    type: String,
  },
  tool5: {
    type: String,
  },
  tool6: {
    type: String,
  },
  highriskDetails: {
    type: String,
  },
  lowriskDetails: {
    type: String,
  },
  mediumriskDetails: {
    type: String,
  },
  suggestionDetails: {
    type: String,
  },
  gasDetails: {
    type: String,
  },
});

const auditReport = mongoose.model("AuditReportSchema", auditReportSchema);
module.exports = auditReport;
