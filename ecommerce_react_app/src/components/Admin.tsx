// // 
// import React, { useContext, useState, useEffect } from 'react';
// import { GlobalContext, Product } from '../components/GloablState';
// import { fetchProducts } from '../api/api';
// import '../styles/Admin.css'; // Import your CSS for styling

// const AdminPanel: React.FC = () => {
//   const context = useContext(GlobalContext);

//   if (!context) {
//     return <div>Loading...or some error message</div>;
//   }

//   const { state, dispatch } = context;
//   const [newProduct, setNewProduct] = useState({
//     title: '',
//     price: 0, 
//     category: '',
//     image: '',
//     description: '',
//     quantity: 1, 
//   });
  
//   const [editingProduct, setEditingProduct] = useState<Product | null>(null);

//   useEffect(() => {
//     const getProducts = async () => {
//       const products = await fetchProducts();
//       dispatch({ type: 'SET_PRODUCTS', payload: products });
//     };

//     getProducts();
//   }, [dispatch]);

//   const handleAddProduct = () => {
//     const parsedPrice = parseFloat(newProduct.price as unknown as string);
//     if (isNaN(parsedPrice) || !newProduct.title || !newProduct.category || !newProduct.image || !newProduct.description) {
//       alert('Please fill all the fields and enter a valid price.');
//       return;
//     }

//     const highestId = state.products.reduce((maxId, product) => Math.max(maxId, product.id), 0);
//     const productToAdd = { 
//       ...newProduct, 
//       id: highestId + 1, 
//       price: parsedPrice 
//     };

//     dispatch({ type: 'ADD_PRODUCT', payload: productToAdd });
//     setNewProduct({ title: '', price: 0, category: '', image: '', description: '', quantity: 1 });
//   };

//   const handleDeleteProduct = (id: number) => {
//     dispatch({ type: 'DELETE_PRODUCT', payload: id });
//   };

//   return (
//     <div className="admin-panel"> 
//       <h2>Admin Panel</h2>

//       <h3>Add New Product</h3>
//       <div className="input-group">
//         <label htmlFor="title">Title:</label>
//         <input
//           type="text"
//           id="title"
//           value={newProduct.title}
//           onChange={(e) =>
//             setNewProduct({ ...newProduct, title: e.target.value })
//           }
//         />
//       </div>
//       {/* Price */}
//       <div className="input-group">
//         <label htmlFor="price">Price:</label>
//         <input
//           type="number" 
//           id="price"
//           value={newProduct.price}
//           onChange={(e) =>
//             setNewProduct({ ...newProduct, price: parseFloat(e.target.value) || 0 }) 
//           }
//         />
//       </div>
//       {/* Category */}
//       <div className="input-group">
//         <label htmlFor="category">Category:</label>
//         <input
//           type="text"
//           id="category"
//           value={newProduct.category}
//           onChange={(e) =>
//             setNewProduct({ ...newProduct, category: e.target.value })
//           }
//         />
//       </div>
//       {/* Image URL */}
//       <div className="input-group">
//         <label htmlFor="image">Image URL:</label>
//         <input
//           type="text"
//           id="image"
//           value={newProduct.image}
//           onChange={(e) =>
//             setNewProduct({ ...newProduct, image: e.target.value })
//           }
//         />
//       </div>
//       {/* Description */}
//       <div className="input-group">
//         <label htmlFor="description">Description:</label>
//         <textarea 
//           id="description"
//           value={newProduct.description}
//           onChange={(e) =>
//             setNewProduct({ ...newProduct, description: e.target.value })
//           }
//         />
//       </div>
//       {/* Quantity */}
//       <div className="input-group">
//         <label htmlFor="quantity">Quantity:</label>
//         <input
//           type="number" 
//           id="quantity"
//           value={newProduct.quantity}
//           onChange={(e) =>
//             setNewProduct({ ...newProduct, quantity: parseInt(e.target.value, 10) || 1 }) 
//           }
//         />
//       </div>

//       <button onClick={handleAddProduct} className="add-product-button">
//         Add Product
//       </button>

//       <h3>Existing Products</h3>
//       <ul className="product-list">
//         {state.products.map((product) => (
//           <li key={product.id} className="product-item">
//             <img 
//               src={product.image} 
//               alt={product.title}
//               className="product-image" 
//             />
//             <div className="product-details">
//               <strong>{product.title}</strong> - ${product.price}
//               <p>{product.description}</p> 
//               {/* Add other details like category, quantity as needed */}
//             </div>
//             <button 
//               onClick={() => handleDeleteProduct(product.id)} 
//               className="delete-button"
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext, Product } from '../components/GloablState';
import { fetchProducts } from '../api/api';
import '../styles/Admin.css'; // Import your CSS for styling

const AdminPanel: React.FC = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    return <div>Loading...or some error message</div>;
  }

  const { state, dispatch } = context;
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: 0, 
    category: '',
    image: '',
    description: '',
    quantity: 1, 
  });

  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      dispatch({ type: 'SET_PRODUCTS', payload: products });
    };

    getProducts();
  }, [dispatch]);

  const handleAddProduct = () => {
    const parsedPrice = parseFloat(newProduct.price as unknown as string);
    if (isNaN(parsedPrice) || !newProduct.title || !newProduct.category || !newProduct.image || !newProduct.description) {
      alert('Please fill all the fields and enter a valid price.');
      return;
    }

    const highestId = state.products.reduce((maxId, product) => Math.max(maxId, product.id), 0);
    const productToAdd = { 
      ...newProduct, 
      id: highestId + 1, 
      price: parsedPrice 
    };

    dispatch({ type: 'ADD_PRODUCT', payload: productToAdd });
    setNewProduct({ title: '', price: 0, category: '', image: '', description: '', quantity: 1 });
  };

  const handleDeleteProduct = (id: number) => {
    dispatch({ type: 'DELETE_PRODUCT', payload: id });
  };
  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
  };

  // Function to cancel editing
  const handleCancelEdit = () => {
    setEditingProduct(null);
  };

  // Function to save the edited product
  const handleSaveEdit = () => {
    if (editingProduct) {
      dispatch({ type: 'UPDATE_PRODUCT', payload: editingProduct });
      setEditingProduct(null); // Exit edit mode
    }
  };

  return (
    <div className="admin-panel"> 
      <h2>Admin Panel</h2>

      <h3>Add New Product</h3>
      <div className="input-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={newProduct.title}
          onChange={(e) =>
            setNewProduct({ ...newProduct, title: e.target.value })
          }
        />
      </div>
      {/* Price */}
      <div className="input-group">
        <label htmlFor="price">Price:</label>
        <input
          type="number" 
          id="price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: parseFloat(e.target.value) || 0 }) 
          }
        />
      </div>
      {/* Category */}
      <div className="input-group">
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          value={newProduct.category}
          onChange={(e) =>
            setNewProduct({ ...newProduct, category: e.target.value })
          }
        />
      </div>
      {/* Image URL */}
      <div className="input-group">
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          value={newProduct.image}
          onChange={(e) =>
            setNewProduct({ ...newProduct, image: e.target.value })
          }
        />
      </div>
      {/* Description */}
      <div className="input-group">
        <label htmlFor="description">Description:</label>
        <textarea 
          id="description"
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
        />
      </div>
      {/* Quantity */}
      <div className="input-group">
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number" 
          id="quantity"
          value={newProduct.quantity}
          onChange={(e) =>
            setNewProduct({ ...newProduct, quantity: parseInt(e.target.value, 10) || 1 }) 
          }
        />
      </div>

      <button onClick={handleAddProduct} className="add-product-button">
        Add Product
      </button>

      <h3>Existing Products</h3>
      <ul className="product-list">
        {state.products.map((product) => (
          <li key={product.id} className="product-item">
            {editingProduct && editingProduct.id === product.id ? (
              // Edit form
              <div className="edit-product-form"> 
                {/* Input fields for title, price, category, etc. */}
                <input 
                  type="text"
                  placeholder="Title"
                  value={editingProduct.title}
                  onChange={(e) => 
                    setEditingProduct({ ...editingProduct, title: e.target.value })
                  }
                />
                {/* ... other input fields for editing ... */}
                <button onClick={handleSaveEdit}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </div>
            ) : (
              // Display product details
              <>
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
                <div className="product-details">
                  <strong>{product.title}</strong> - ${product.price}
                  <p>{product.description}</p>
                  {/* ... other details ... */}
                </div>
                <button onClick={() => handleEditProduct(product)}>Edit</button>
                <button onClick={() => handleDeleteProduct(product.id)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AdminPanel