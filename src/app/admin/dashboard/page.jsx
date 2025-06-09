'use client';
import { useContext, useEffect, useState } from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import { UserContext } from '@/hooks/user';
import showCustomAlert from '@/components/Alert';

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productId, setProductId] = useState('');
  const [userLoading, setUserLoading] = useState(true);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (typeof user === 'undefined') return;
    setUserLoading(false);
    if (user) fetchProducts();
    else setLoading(false);
  }, [user]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products");
      if (response.ok) {
        const data = await response.json();
        setProducts(data.products);
      } else {
        showCustomAlert("Failed to Fetch Data", "danger");
      }
    } catch (err) {
      console.error("Failed to fetch data", err);
    } finally {
      setLoading(false);
    }
  };

  const [form, setForm] = useState({
    id: '', title: '', category: '', description: '', brochureUrl: '',
    metaKeywords: '', specifications: [], images: [], videoUrls: []
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
    setForm({ ...form, specifications: form.specifications.filter((_, i) => i !== index) });
  };

  const convertToEmbedUrl = (url) => {
    try {
      const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/;
      const match = url.match(regex);

      if (match && match[1]) {
        return `https://www.youtube.com/embed/${match[1]}`;
      }

      return url; // Not a recognized YouTube URL
    } catch (error) {
      console.error("Error parsing URL:", error);
      return url;
    }
  };

  const handleVideoChange = (index, field, value) => {
    const updatedVideos = [...form.videoUrls];
    if (!updatedVideos[index]) updatedVideos[index] = { url: '', title: '' };
    updatedVideos[index][field] = field === 'url' ? convertToEmbedUrl(value ?? '') : value ?? '';
    setForm({ ...form, videoUrls: updatedVideos });
  };

  const addVideoField = () => {
    setForm({ ...form, videoUrls: [...form.videoUrls, { url: '', title: '' }] });
  };

  const removeVideoField = (index) => {
    setForm({ ...form, videoUrls: form.videoUrls.filter((_, i) => i !== index) });
  };

  const handleImageUploadSuccess = (result) => {
    const uploadedImage = {
      url: result.info.secure_url,
      alt: result.info.original_filename
    };
    setForm((prev) => ({ ...prev, images: [...prev.images, uploadedImage] }));
  };

  const handleBrochureUploadSuccess = (result) => {
    setForm((prev) => ({ ...prev, brochureUrl: result.info.secure_url }));
  };

  const removeImage = (index) => {
    setForm({ ...form, images: form.images.filter((_, i) => i !== index) });
  };

  const addProduct = async () => {
    if (!form.title || !form.category || !form.description) {
      showCustomAlert('Missing Key Attributes', 'warning');
      return;
    }
    try {
      const response = await fetch("/api/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productData: form }),
      });
      if (response.ok) {
        fetchProducts();
        resetForm();
        showCustomAlert("Product Added Successfully!", "success");
      } else if (response.status === 409) {
        showCustomAlert("The Product Already Exists!", "danger");
      } else {
        showCustomAlert("Failed to Add Product", "danger");
      }
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch("/api/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
      });
      if (response.ok) {
        setProducts(products.filter(product => product._id !== id));
        showCustomAlert("Product Deleted Successfully!", "success");
      } else {
        showCustomAlert("Failed to Delete Product", "danger");
      }
    } catch (err) {
      console.error("Failed to delete product", err);
    }
  };

  const updateProduct = (id) => {
    setProductId(id);
    const product = products.find(p => p._id === id);
    if (product) {
      setForm({
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
      const response = await fetch("/api/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productData: form, id: productId })
      });
      if (response.ok) {
        await fetchProducts();
        resetForm();
        showCustomAlert("Product Updated Successfully", "success");
      } else if (response.status === 409) {
        showCustomAlert("This Product Does not Exist, please Add it first", "danger");
      } else {
        showCustomAlert("Failed to update Product", "danger");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const resetForm = () => {
    setForm({ id: '', title: '', category: '', description: '', brochureUrl: '', metaKeywords: '', specifications: [], images: [], videoUrls: [] });
  };

  const logout = () => {
    window.location.href = '/';
    localStorage.removeItem('user');
    showCustomAlert("Logged Out Successfully", "success");
  };
  return (
    userLoading ? (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <p className="text-gray-500 text-lg animate-pulse">
          Loading, please wait...
        </p>
      </div>
    ) : !user ? (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
        <div className="w-full max-w-md p-8 rounded-xl shadow-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white">
          <h2 className="text-2xl font-bold mb-4 text-center">Access Restricted</h2>
          <p className="text-center">Please login to access this page</p>
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => window.location.href = "/"}
              className="px-5 py-2 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-300"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    ) : loading ? (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <p className="text-gray-500 text-lg animate-pulse">
          Loading, please wait...
        </p>
      </div>
    ) : (
      <div className="fixed inset-0 z-30 overflow-y-auto bg-gray-50 p-6 sm:p-10">
        <button
          onClick={logout}
          className="absolute top-4 right-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition shadow-md cursor-pointer"
        >
          Logout
        </button>

        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Admin Dashboard</h1>

        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add / Update Product</h2>
          <div className="space-y-4">
            <input name="title" placeholder="Title" value={form.title} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
            <input name="category" placeholder="Category" value={form.category} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
            <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="w-full h-24 p-3 border rounded-lg" required />
            <CldUploadWidget uploadPreset="maxbeton_pdf" onSuccess={handleBrochureUploadSuccess}>
              {({ open }) => (
                <button onClick={() => open()} className='w-full p-3 border rounded-lg'>Upload brochure</button>
              )}
            </CldUploadWidget>
            {form.brochureUrl && (
              <div className="relative mt-2 p-3 border rounded-lg bg-gray-100">
                <a
                  href={form.brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  View Brochure
                </a>
                <button
                  onClick={() => setForm({ ...form, brochureUrl: '' })}
                  className="absolute top-2 right-2 text-red-500 text-xl font-bold"
                >
                  ×
                </button>
              </div>
            )}
            <input name="metaKeywords" placeholder="Meta Keywords" value={form.metaKeywords} onChange={handleChange} className="w-full p-3 border rounded-lg" />

            <div>
              <h3 className="text-lg font-semibold mb-2">Specifications</h3>
              {form.specifications.map((spec, index) => (
                <div key={index} className="flex gap-3 items-center mb-2">
                  <input placeholder="Name" value={spec.name} onChange={(e) => handleSpecChange(index, 'name', e.target.value)} className="flex-1 p-2 border rounded-lg" />
                  <input placeholder="Value" value={spec.value} onChange={(e) => handleSpecChange(index, 'value', e.target.value)} className="flex-1 p-2 border rounded-lg" />
                  <button onClick={() => removeSpecField(index)} className="text-red-500 text-xl font-bold">×</button>
                </div>
              ))}
              <button onClick={addSpecField} className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Add Specification</button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Upload Images</h3>
              <CldUploadWidget uploadPreset="maxbeton_images" onSuccess={handleImageUploadSuccess}>
                {({ open }) => (
                  <button onClick={() => open()} className='w-full p-3 border rounded-lg'>Upload an Image</button>
                )}
              </CldUploadWidget>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                {form.images.map((img, i) => (
                  <div key={i} className="relative">
                    <img src={img.url} alt={img.alt} className="h-28 object-cover rounded-lg border w-full" />
                    <button
                      onClick={() => removeImage(i)}
                      className="absolute top-1 right-1 text-red-600 bg-white rounded-full px-2 py-1 text-sm shadow"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Video URLs</h3>
              {form.videoUrls.map((video, index) => (
                <div key={index} className="flex items-center gap-3 mb-2">
                  <input placeholder="Video URL" value={video.url} onChange={(e) => handleVideoChange(index, 'url', e.target.value)} className="flex-1 p-2 border rounded-lg" />
                  <input placeholder="Video Title" value={video.title} onChange={(e) => handleVideoChange(index, 'title', e.target.value)} className="flex-1 p-2 border rounded-lg" />
                  <button onClick={() => removeVideoField(index)} className="text-red-500 text-xl font-bold">×</button>
                </div>
              ))}
              <button onClick={addVideoField} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add Video</button>
            </div>

            <div className="flex gap-4 mt-6">
              <button onClick={addProduct} className="px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700">Add</button>
              <button onClick={saveUpdatedProduct} className="px-6 py-2 bg-yellow-500 text-white font-medium rounded hover:bg-yellow-600">Save Update</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {products.map(product => (
            <div key={product._id} className="relative bg-white p-6 rounded-xl border shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{product.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{product.category}</p>
              <p className="text-gray-700 text-sm mb-3 line-clamp-3">{product.description}</p>
              <ul className="text-sm text-gray-700 space-y-1">
                {product.specifications.map((spec, i) => (
                  <li key={i}><strong>{spec.name}:</strong> {spec.value}</li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {product.images.map((img, i) => (
                  <img key={i} src={img.url} alt={img.alt} className="h-20 object-cover rounded-lg border" />
                ))}
              </div>
              <div className="mt-2">
                {product.videoUrls.map((video, i) => (
                  <iframe
                    key={i}
                    className="w-full h-40 rounded-lg"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ))}
              </div>
              <div className="absolute top-3 right-3 flex gap-2">
                <button
                  onClick={() => updateProduct(product._id)}
                  className="px-3 py-1 bg-yellow-500 text-white text-sm rounded-lg hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProduct(product._id)}
                  className="px-3 py-1 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
}
