import mongoose from 'mongoose';
const { Schema } = mongoose;

const AssetClassSchema = new Schema({
    minorAssetClass: { type: String },
    value: { type: Number }
}, { _id: false });

const MajorAssetClassSchema = new Schema({
    majorClass: { type: String },
    assetClasses: [AssetClassSchema]
}, { _id: false });

const HoldingsSchema = new Schema({
    majorAssetClasses: [MajorAssetClassSchema]
}, { _id: false });

const AssetSchema = new Schema({
    assetDescription: { type: String, default: null },
    assetId: { type: String, required: true },
    assetInfo: { type: String },
    assetInfoType: { type: String },
    assetMask: { type: String, default: null },
    assetName: { type: String, default: null },
    assetOwnerName: { type: String, default: null },
    balanceAsOf: { type: Date },
    balanceCostBasis: { type: Number },
    balanceCostFrom: { type: String },
    balanceCurrent: { type: Number },
    balanceFrom: { type: String },
    balancePrice: { type: Number, default: null },
    balancePriceFrom: { type: String },
    balanceQuantityCurrent: { type: Number, default: null },
    beneficiaryComposition: { type: String, default: null },
    cognitoId: { type: String },
    creationDate: { type: Date },
    currencyCode: { type: String, default: null },
    deactivateBy: { type: String, default: null },
    descriptionEstatePlan: { type: String, default: "" },
    hasInvestment: { type: Boolean, default: null },
    holdings: { type: HoldingsSchema, default: null },
    includeInNetWorth: { type: Boolean },
    institutionId: { type: Number },
    institutionName: { type: String, default: null },
    integration: { type: String, default: null },
    integrationAccountId: { type: String, default: null },
    isActive: { type: Boolean },
    isAsset: { type: Boolean },
    isFavorite: { type: Boolean },
    isLinkedVendor: { type: Boolean, default: null },
    lastUpdate: { type: Date },
    lastUpdateAttempt: { type: Date },
    logoName: { type: String, default: null },
    modificationDate: { type: Date },
    nextUpdate: { type: Date, default: null },
    nickname: { type: String },
    note: { type: String, default: null },
    noteDate: { type: Date, default: null },
    ownership: { type: String, default: null },
    primaryAssetCategory: { type: String },
    status: { type: String, default: null },
    statusCode: { type: String, default: null },
    userInstitutionId: { type: String },
    vendorAccountType: { type: String, default: null },
    vendorContainer: { type: String, default: null },
    vendorResponse: { type: String, default: null },
    vendorResponseType: { type: String, default: null },
    wealthAssetType: { type: String },
    wid: { type: String }
});

const Asset = mongoose.model('Asset', AssetSchema);

export default { Asset };