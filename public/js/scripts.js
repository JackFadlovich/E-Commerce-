document.addEventListener('DOMContentLoaded', function() {
    const boxGrid = d3.select('#box-grid');

    // Fetch the data from the API
    fetch('/api/boxes')
        .then(response => response.json())
        .then(data => {
            console.log('API Response Data:', data);
            // Access products from the fetched data
            const products = data.products; 

            // Bind the data to box elements
            const boxElements = boxGrid.selectAll('.box')
                .data(products)
                .enter()
                .append('div')
                .attr('class', 'box')
                .each(function(d) {
                    const box = d3.select(this);
                    box.append('p').text(`ID: ${d.product_id}`); 
                    box.append('p').text(`Name: ${d.product_name}`); 
                    box.append('p').text(`Category: ${d.category}`); 
                    box.append('p').text(`Description: ${d.product_description}`); 
                    box.append('p').text(`Price: ${d.price}`); 
                    box.append('p').text(`Manufacturer: ${d.manufacturer}`); 
                });
        })
        .catch(error => console.error('Error fetching box data:', error));
});
