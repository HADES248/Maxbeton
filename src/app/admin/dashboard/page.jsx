'use client';
import { useEffect, useState } from 'react';
import { CldUploadWidget } from 'next-cloudinary';

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/public/api/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setProducts(data.products);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (err) {
      console.error("Failed to fetch data", err);
    } finally {
      setLoading(false);
    }
  };

  const [form, setForm] = useState({
    id: '',
    title: '',
    category: '',
    description: '',
    brochureUrl: '',
    metaKeywords: '',
    specifications: [],
    images: [],
    videoUrls: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value ?? '' });
  };

  const handleSpecChange = (index, field, value) => {
    const newSpecs = [...form.specifications];
    newSpecs[index] = { ...newSpecs[index], [field]: value ?? '' };
    setForm({ ...form, specifications: newSpecs });
  };

  const addSpecField = () => {
    setForm({ ...form, specifications: [...form.specifications, { name: '', value: '' }] });
  };

  const removeSpecField = (index) => {
    const newSpecs = form.specifications.filter((_, i) => i !== index);
    setForm({ ...form, specifications: newSpecs });
  };

  const handleVideoChange = (index, field, value) => {
    const updatedVideos = [...form.videoUrls];
    if (!updatedVideos[index]) updatedVideos[index] = { url: '', title: '' };
    updatedVideos[index][field] = value ?? '';
    setForm({ ...form, videoUrls: updatedVideos });
  };

  const addVideoField = () => {
    setForm({ ...form, videoUrls: [...form.videoUrls, { url: '', title: '' }] });
  };

  const removeVideoField = (index) => {
    const updatedVideos = form.videoUrls.filter((_, i) => i !== index);
    setForm({ ...form, videoUrls: updatedVideos });
  };

  const handleUploadSuccess = (result) => {
    const uploadedImage = {
      url: result.info.secure_url,
      alt: result.info.original_filename
    };
    console.log(uploadedImage.url);
    console.log(uploadedImage.alt);
    setForm((prev) => ({ ...prev, images: [...prev.images, uploadedImage] }));
  };

  const addProduct = async () => {
    if (!form.id || !form.title) return;

    try {
      const response = await fetch("/public/api/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      console.log("Product added successfully");
      fetchProducts();
      resetForm();
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch("/public/api/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id })
      });
      if (response.ok) {
        setProducts(products.filter(product => product.id !== id));
        console.log("Product Deleted!");
      } else {
        console.error("Failed to delete product");
      }
    } catch (err) {
      console.error("Failed to delete product", err);
    }
  };

  const updateProduct = (id) => {
    const product = products.find(p => p.id === id);
    if (product) {
      setForm({
        id: product.id || '',
        title: product.title || '',
        category: product.category || '',
        description: product.description || '',
        brochureUrl: product.brochureUrl || '',
        metaKeywords: product.metaKeywords || '',
        specifications: product.specifications || [],
        images: product.images || [],
        videoUrls: product.videoUrls || []
      });
    }
  };

  const saveUpdatedProduct = async () => {
    try {
      const response = await fetch("/public/api/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      await fetchProducts();
      resetForm();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const resetForm = () => {
    setForm({ id: '', title: '', category: '', description: '', brochureUrl: '', metaKeywords: '', specifications: [], images: [], videoUrls: [] });
  };

  const logout = () => {
    // clear local storage or session and redirect
  }

  return (
    <div className="p-8">
      <button onClick={logout} className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 shadow-md">
        Logout
      </button>
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <div className="border border-gray-300 p-4 rounded-lg mt-8">
        <h2 className="text-xl mb-4">Add / Update Product</h2>
        <input name="id" placeholder="Product ID" value={form.id} onChange={handleChange} className="w-full p-2 mb-3 border border-gray-300 rounded" />
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} className="w-full p-2 mb-3 border border-gray-300 rounded" />
        <input name="category" placeholder="Category" value={form.category} onChange={handleChange} className="w-full p-2 mb-3 border border-gray-300 rounded" />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="w-full h-20 p-2 mb-3 border border-gray-300 rounded" />
        <input name="brochureUrl" placeholder="Brochure URL" value={form.brochureUrl} onChange={handleChange} className="w-full p-2 mb-3 border border-gray-300 rounded" />
        <input name="metaKeywords" placeholder="Meta Keywords" value={form.metaKeywords} onChange={handleChange} className="w-full p-2 mb-3 border border-gray-300 rounded" />

        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Specifications</h3>
          {form.specifications.map((spec, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <input
                placeholder="Name"
                value={spec.name}
                onChange={(e) => handleSpecChange(index, 'name', e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded"
              />
              <input
                placeholder="Value"
                value={spec.value}
                onChange={(e) => handleSpecChange(index, 'value', e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded"
              />
              <button onClick={() => removeSpecField(index)} className="text-red-500 font-bold">×</button>
            </div>
          ))}
          <button onClick={addSpecField} className="mt-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">Add Specification</button>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Upload Images</h3>
          <CldUploadWidget uploadPreset="next_maxbeton" onSuccess={handleUploadSuccess}>
            {({ open }) => (
              <button onClick={() => open()} className='w-full p-2 border border-gray-300 rounded'>
                Upload an Image
              </button>
            )}
          </CldUploadWidget>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {form.images.map((img, i) => (
              <img key={i} src={img.url} alt={img.alt} className="h-24 object-cover rounded border" />
            ))}
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Video URLs</h3>
          {form.videoUrls.map((video, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <input
                placeholder="Video URL"
                value={video.url}
                onChange={(e) => handleVideoChange(index, 'url', e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded"
              />
              <input
                placeholder="Video Title"
                value={video.title}
                onChange={(e) => handleVideoChange(index, 'title', e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded"
              />
              <button onClick={() => removeVideoField(index)} className="text-red-500 font-bold">×</button>
            </div>
          ))}
          <button onClick={addVideoField} className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Add Video</button>
        </div>

        <div className="flex gap-4 mt-6">
          <button onClick={addProduct} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add</button>
          <button onClick={saveUpdatedProduct} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Save Update</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {loading ? (
          <div className="text-gray-500 text-lg py-10">Loading products...</div>
        ) : (
          products.map(product => (
            <div key={product.id} className="relative border border-gray-300 rounded-lg p-4 bg-white shadow">
              <h3 className="font-bold text-lg">{product.title}</h3>
              <p className="text-gray-600">{product.category}</p>
              <p className="mt-2">{product.description}</p>
              <ul className="mt-2 text-sm text-gray-700">
                {product.specifications.map((spec, i) => (
                  <li key={i}><strong>{spec.name}:</strong> {spec.value}</li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {product.images.map((img, i) => (
                  <img key={i} src={img.url} alt={img.alt} className="h-20 object-cover rounded border" />
                ))}
              </div>
              <div className="mt-2">
                {product.videoUrls.map((video, i) => (
                  <div key={i} className="mb-2">
                    <iframe
                      width="100%"
                      height="150"
                      src={video.url}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}
              </div>
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={() => updateProduct(product.id)}
                  className="px-3 py-1 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          )))}
      </div>
    </div>
  );
}
