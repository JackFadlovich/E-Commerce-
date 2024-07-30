document.querySelector('#add-product-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const product_name = document.querySelector('#product_name').value.trim();
    const category = document.querySelector('#category').value.trim();
    const product_description = document.querySelector('#product_description').value.trim();
    const price = document.querySelector('#price').value.trim();
    const manufacturer = document.querySelector('#manufacturer').value.trim();
    
  
    if (product_name && category && product_description && price && manufacturer) {
      const response = await fetch('/products', {
        method: 'POST',
        body: JSON.stringify({
          product_name,
          category,
          product_description,
          price,
          manufacturer,
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to add product');
      }
    }
  });
  