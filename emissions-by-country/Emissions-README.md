# Emissions by Country 2017 Data Visualisation Project

## Raw data set
Carbon Dioxide Emission Estimates.csv  
[Link]("https://drive.google.com/file/d/1J35gy16FzejbSntUDulFjXSM_ydNIv27/view?usp=sharing")

**Source**:  [United Nations Open Data Sets]("https://data.un.org/") 
  

## Data preparation

**Tools:**  Python, pandas
[emissions-data-preparation.ipynb]("Data preparation/emissions-data-preparation.ipynb")

Filter records for Year = 2017 and Series = Emissions (thousand metric tons of carbon dioxide)
Sort the records in order of emissions, descending
Separate the top 10 records
Change the headings so that Unnamed: 1 becomes Country and Value becomes CO2 Emissions (1000s metric tons)
Separate out the Country and CO2 Emissions (1000s metric tons) columns only
Transpose the rows into columns  (2 rows only)

## Data visualisation

**Tools:** Javascript, D3
[script.js]("Data Visualisation/script.js")

Width and height must be the same (square)  
Background must not distract eye from foreground image  
Text must be readable on typical mobile display  
Image must be creatable using code (within the capabilities of the developer)  
Image must tell the story in the most thought provoking way possible within the constraints of the above.   

Design idea will be to show the 10 countries with the highest emissions (in thousands of metric tons of CO2) in the year 2017 only.

**Chart type:**  Horizontal bar, **Title** CO2 TOP EMITTERS (1000s metric tons) BY COUNTRY 2017

## Caption

Top emitters are, predictably, those with the largest populations and there will be huge differences between regions within those countries.  A reduction in emissions per capita would have a huge impact.

## Further reference

[More information about the top carbon emitters](https://www.wri.org/insights/interactive-chart-shows-changes-worlds-top-10-emitters)

## Credits
**Python data wrangler**:  Ano Lawa  
**Javascript data visualiser**: Nathan Brown  
**Visual designer**: Abbie Plummer
**Support**:  Karen Scott, Jonathan Groves, Carole Ancia
