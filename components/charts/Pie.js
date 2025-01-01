"use client"
import React, { useEffect, useRef} from 'react';
import * as d3 from 'd3';

const Pie = () => {
   const data = [
      80,20
      ];
      ; 
     let width = 110;
     let height = 120 
     let colors = ["lightGreen","lightGray"]
  const chartRef = useRef();
    useEffect(() => {
 
    let theme = localStorage.getItem("theme")
    // Remove previous SVG content
    d3.select(chartRef.current).select('svg').remove();

    const radius = Math.min(width, height) / 2;

       

    const svg = d3
      .select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    //   blur

      const defs = svg.append('defs');
      defs
      .append('filter')
      .attr('id', 'blur')
      .append('feGaussianBlur')
      .attr('stdDeviation', 2);

      const color = d3.scaleOrdinal(colors.length ? colors : d3.schemeCategory10);
     

 

    const pie = d3.pie(data).padAngle(0.098);

    const arc = d3
      .arc()
      .innerRadius(45) // Set to 0 for a full pie chart; increase for a donut chart
      .outerRadius(radius)

    const arcs = svg
      .selectAll('arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');

    arcs
      .append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => color(i));

 
      svg
      .append('text')
      .attr('text-anchor', 'middle') // Center the text
      .attr('dominant-baseline', 'central') 
      .attr('font-size', '15px') // Font size
      .attr('font-weight', "light") // Font weight
      .attr('fill', theme=="light"?"black":"lightGray") // Text color
      .text('80.2%') // Text content; 
  }, [data, width, height]);

  return <div ref={chartRef}></div>;
};

export default Pie;
