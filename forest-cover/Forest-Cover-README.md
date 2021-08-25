# Emissions by Country 2017 Data Visualisation Project

## Raw data set
Land.csv
[Link]("https://drive.google.com/file/d/1KczTw04OwIbKYKz-Jx1MeJN87THq0_R_/view?usp=sharing")

**Source**:  [data]("https://drive.google.com/uc?id=1oAVeevooBzbLwMdczMM1eIxlDeH4_8wo") 
  

## Data preparation

**Tools:**  ..
[Forest_Cover_2017.ipynb]("Data Preparation/Forest_Cover_2017.ipynb")

Truncate the dataframe to remove all rows after index 682 (remove individual countries)  
Filter records where the year is 2017 and the Series is 'Forest Cover (1000 hectares)'  
Extract the region/country ('Unnamed: 1') and 'Value' columns  
Rename the Unnamed: 1 column to 'Region' and the 'Value' column to 'Hectares'  
Drop all the rows with 'Total' in the 'Region' column
Use a query to remove the continents (['Africa','Americas','Europe','Asia','Oceania'])

Transpose the dataframe to make 2 rows with columns headed with index number.

## Data visualisation

**Tools:** Javascript, d3  
[main.js]("Data Visualisation/main.js")

Width and height must be the same (square)  
Background must not distract eye from foreground image  
Text must be readable on typical mobile display  
Image must be creatable using code (within the capabilities of the developer)  
Image must tell the story in the most thought provoking way possible within the constraints of the above.   

[Design idea]("Visualisation Design Idea/Forest-Cover-2017.png")  

**Chart type:**  Donut, **Title** REGIONS WITH THE HIGHEST FOREST COVER BY HECTARES

## Caption

The whole world needs to work together to help those regions with the highest level of forest cover to maintain it.


## Further reference

[More information about the state of the world's forest](http://www.fao.org/state-of-forests/en/)

## Credits
**Python data wrangler**:  Safa Kaysir  
**Javascript data visualiser**: Alyssa Portsmouth  
**Visual designer**: Abbie Plummer
**Support**:  Jerlyn Jareunpoon-Phillips, Jonathan Groves, Karen Scott, Carole Ancia
