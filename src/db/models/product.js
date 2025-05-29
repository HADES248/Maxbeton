const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
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
  brochureUrl: { type: String, required: true },
  metaKeywords: { type: String, required: true },
  specifications: [
    {
      name: { type: String, required: true },
      value: { type: String, required: true }
    }
  ]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;