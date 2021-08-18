prepareData = function(data){
    // remove the index key from the data objects
    dataset = Object.values(data)

    // sort data into largest to smallest CO2 emissions
    sortedData = []
    while(dataset.length > 0){
        let smallest = dataset[0].CO2;
        let element = 0;
        for(let i=0; i<dataset.length; i++){
            if(dataset[i].CO2 < smallest){
                smallest = dataset[i].CO2
                element = i
            }
        }
        sortedData.push(dataset[element])
        dataset.splice(element,1)
    }

    // rearrange data into 2 arrays - labels and data value
    preparedData = {
        'Country':[],
        'CO2':[]
    }
    sortedData.forEach(element => {
        preparedData.Country.push(element.Country);
        preparedData.CO2.push(element.CO2)
    });

    return preparedData
}



drawVisual = function(xdata, ydata){

    var svgWidth = 1000;  
    var svgHeight = 1000;
    var leftmargin = parseInt(svgWidth/5);
    var rightmargin = svgWidth/10;
    var chartTop = svgHeight/5;
    
    var svg = d3.select('svg')
        .attr("width", svgWidth)  
        .attr("height", svgHeight)  
        .attr("class", "bar-chart");

    var barPadding = 10;  
    var barHeight = ((svgHeight - chartTop*2) / xdata.length);
    var scale = d3.scaleLinear()
        .domain([d3.min(ydata), d3.max(ydata)])
        .range([0, svgWidth - (leftmargin + rightmargin)]);

    var colourPalette = ["#FB0303","#FF6B00","#FFC700","#61FF00","#00FFF0","#0085FF","#3604FF","#AF05FF","#FF04C8","#FF006B"]

    svg.append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("height",svgHeight)
    .attr("width",svgWidth)
    .attr("fill","'020202")

    var barChart = svg
        .append("g")
        .selectAll(null)
        .data(ydata)  
        .enter()  
        .append("rect")
        .attr("x", function(d) {
            return leftmargin;
        })  
        .attr("width", function(d) { 
            return scale(d);  
        })
        .attr("height", barHeight - barPadding)  
        .attr("transform", function (d, i) {
            var translate = [5, (svgHeight - chartTop - barHeight * (i+1)) ];
            return "translate("+ translate +")";  
        })
        .attr("fill", function (d, i) {
            return colourPalette[i]
        })
        .attr("border","2px solid #B3B3B3")
        .attr("rx", "20px");

    var barChart = svg
        .append("g")
        .selectAll(null)
        .data(ydata)  
        .enter() 
        .append("text")
        .attr("class", "bar-text")
        .attr("text-anchor", "end")
        .attr("x", function(d) { return leftmargin + scale(d);})
        .attr("y", function(d,i) {
            return svgHeight - chartTop - (barPadding*2) - (barHeight * i);
        })
        .attr("fill", "white")
        .style("font-size", "0.8em")
        .text(function(d, i) { 
            if(i>6){
                return d.toFixed(2);
            }
            else{
                return "";
            }
        });


    var barTitle = svg.append("text")
        .attr("class","bar-text")
        .style("text-anchor", "middle")
        .attr("x", parseInt(svgWidth/2))
        .attr("y", svgHeight/10)
        .style("font-size","2em")
        .attr("fill","white")
        .text("CO2 TOP EMITTERS (1000s metric tons) BY COUNTRY 2017")

    console.log(xdata);
    var barText = svg
        .append("g")
        .selectAll(null)
        .data(xdata)  
        .enter()
        .append("text")
        .attr("class", "bar-text")
        .attr("text-anchor", "end")
        .attr("x", leftmargin)
        .attr("y", function(d,i) {
            return svgHeight - chartTop - (barPadding*2) - (barHeight * i);
        })
        .attr("fill", "white")
        .style("font-size", "0.8em")
        .text(function(d) { 
            var label = d.toUpperCase();
            return label 
        });

}

datalist = prepareData(data)
drawVisual(datalist.Country,datalist.CO2)
