// const svgXmlNs = 'http://www.w3.org/2000/svg';
const width = window.innerWidth;
const height = window.innerHeight - 100;

d3.select('body').append('h1')
    .text('Sol LeWitt');

// Main SVG
// const svg = document.createElementNS(svgXmlNs, 'svg');
// svg.setAttribute('width', width);
// svg.setAttribute('height', height);
// document.body.appendChild(svg);

const svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);


// Peripheral mask
// const peripheralMask = document.createElementNS(svgXmlNs, 'mask');
// peripheralMask.setAttribute('id', 'peripheral-mask');
// svg.appendChild(peripheralMask);

const peripheralMask = svg.append('mask')
    .attr('id', 'peripheral-mask');

// Visible part of the peripheral mask
// const rectPeripheralMask = document.createElementNS(svgXmlNs, 'rect');
// rectPeripheralMask.setAttribute('x', 0);
// rectPeripheralMask.setAttribute('y', 0);
// rectPeripheralMask.setAttribute('width', width);
// rectPeripheralMask.setAttribute('height', height);
// rectPeripheralMask.setAttribute('fill', 'white');
// peripheralMask.appendChild(rectPeripheralMask);

peripheralMask.append('rect')
    .attr('width', width)
    .attr('height', height)
    .attr('fill', 'white');

// Invisible part of the peripheral mask
// const circlePeripheralMask = document.createElementNS(svgXmlNs, 'circle');
// circlePeripheralMask.setAttribute('cx', width / 2);
// circlePeripheralMask.setAttribute('cy', height / 2);
// circlePeripheralMask.setAttribute('r', 200);
// circlePeripheralMask.setAttribute('fill', 'black');
// peripheralMask.appendChild(circlePeripheralMask);

peripheralMask.append('circle')
    .attr('cx', width / 2)
    .attr('cy', height / 2)
    .attr('r', 200)
    .attr('fill', 'black');

// Vertical lines
// for (let i = 0; i < 100; i++) {
//     const rect = document.createElementNS(svgXmlNs, 'rect');
//     rect.setAttribute('x', i * 20);
//     rect.setAttribute('width', 10);
//     rect.setAttribute('height', height);
//     rect.setAttribute('fill', 'black');
//     rect.setAttribute('mask', 'url(#peripheral-mask)');
//     svg.appendChild(rect);
// }

svg.append('g')
    .selectAll('rect')
    .data(d3.range(100))
    .join('rect')
    .attr('x', d => d * 20)
    .attr('width', 10)
    .attr('height', height)
    .attr('mask', 'url(#peripheral-mask)');

// Center mask
// const centerMask = document.createElementNS(svgXmlNs, 'mask');
// centerMask.setAttribute('id', 'center-mask');
// svg.appendChild(centerMask);

const circleMask = svg.append('mask')
    .attr('id', 'center-mask');

// Invisible part of the center mask
// const rectCenterMask = document.createElementNS(svgXmlNs, 'rect');
// rectCenterMask.setAttribute('x', 0);
// rectCenterMask.setAttribute('y', 0);
// rectCenterMask.setAttribute('width', width);
// rectCenterMask.setAttribute('height', height);
// rectCenterMask.setAttribute('fill', 'black');
// centerMask.appendChild(rectCenterMask);

circleMask.append('rect')
    .attr('width', width)
    .attr('height', height)
    .attr('fill', 'black');

// Visible part of the center mask
// const circleCenterMask = document.createElementNS(svgXmlNs, 'circle');
// circleCenterMask.setAttribute('cx', width / 2);
// circleCenterMask.setAttribute('cy', height / 2);
// circleCenterMask.setAttribute('r', 200);
// circleCenterMask.setAttribute('fill', 'white');
// centerMask.appendChild(circleCenterMask);

circleMask.append('circle')
    .attr('cx', width / 2)
    .attr('cy', height / 2)
    .attr('r', 200)
    .attr('fill', 'white');

// Horizontal lines
// for (let i = 0; i < 100; i++) {
//     const rect = document.createElementNS(svgXmlNs, 'rect');
//     rect.setAttribute('y', i * 20);
//     rect.setAttribute('width', width);
//     rect.setAttribute('height', 10);
//     rect.setAttribute('fill', 'black');
//     rect.setAttribute('mask', 'url(#center-mask)');
//     svg.appendChild(rect);
// }

svg.append('g')
    .selectAll('rect')
    .data(d3.range(100))
    .join('rect')
    .attr('y', d => d * 20)
    .attr('height', 10)
    .attr('width', width)
    .attr('mask', 'url(#center-mask)');
