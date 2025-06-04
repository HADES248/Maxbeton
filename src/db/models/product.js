const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  images: [
    {
      url: { type: String, required: true },
      alt: { type: String, required: true }
    }
  ],
  videoUrls: [
    {
      url: { type: String, required: true },
      title: { type: String, required: true }
    }
  ],
  brochureUrl: { type: String },
  metaKeywords: { type: String },
  specifications: [
    {
      name: { type: String, required: true },
      value: { type: String, required: true }
    }
  ]
});

export const productModel = mongoose.models.product || mongoose.model("product", productSchema);