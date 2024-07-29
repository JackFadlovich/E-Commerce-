document.addEventListener('DOMContentLoaded', function() {
    const boxGrid = d3.select('#box-grid');
    
    const boxes = [
        { id: 1, imgSrc: '/images/box1.png' },
        { id: 2, imgSrc: '/images/box2.png' },
        { id: 3, imgSrc: '/images/box3.png' },
        { id: 4, imgSrc: '/images/box1.png' },
        { id: 5, imgSrc: '/images/box2.png' },
        { id: 6, imgSrc: '/images/box3.png' },
        { id: 7, imgSrc: '/images/box1.png' },
        { id: 8, imgSrc: '/images/box2.png' },
        { id: 9, imgSrc: '/images/box3.png' }
    ];

    const boxElements = boxGrid.selectAll('.box')
        .data(boxes)
        .enter()
        .append('div')
        .attr('class', 'box')
        .each(function(d) {
            const box = d3.select(this);
            for (let i = 0; i < 6; i++) {
                box.append('div')
                    .append('img')
                    .attr('src', d.imgSrc)
                    .attr('alt', 'Box Image');
            }
        });
});
