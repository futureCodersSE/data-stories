# Urban 'sprawl' trends in percentage urban population Data Visualisation Project

## Raw data set
Population Growth Rates in Urban areas and Capital cities.csv
[Link](https://drive.google.com/file/d/1F7ag0EfR1EyXmxacJxKtqUqeyIbAx4Kq/view?usp=sharing)   

**Source**:  [United Nations Open Data Sets](https://data.un.org/)   
  

## Data preparation

**Tools:**  Python, pandas
[Urban_sprawl.ipynb](./Data%20Preparation/Urban_sprawl.ipynb)

Filter the data set for Total, all countries, Urban population (percent)  
Select the columns Year and Value  
Rename the Value column Urban population (percent)  
Download dataframe into a json file.  
 
## Data visualisation

**Tools:** Python, bokeh
[UrbanSprawl_fromDesign.ipynb](./Data%20Visualisation/UrbanSprawl_fromDesign.ipynb)

Width and height must be the same (square)  
Background must not distract eye from foreground image  
Text must be readable on typical mobile display  
Image must be creatable using code (within the capabilities of the developer)  
Image must tell the story in the most thought provoking way possible within the constraints of the above.   

Design idea will be a line chart showing the percentage of the population living in urban areas from 2005 to 2018

**Chart type:**  line, **Title** URBAN SPRAWL by YEAR 2005 to 2018

## Caption

People are migrating from rural to urban areas.  Urban living is often less sustainable, both environmentally and socially.

## Further reference

[More information about urbanisation](https://ourworldindata.org/urbanization)

## Credits
**Python data wrangler**:  Safa Kaysir  
**Javascript data visualiser**: Safa Kaysir  
**Visual designer**: Design team  
**Support**:  Jonathan Groves, Karen Scott, Jerlyn Jareunpoon-Phillips
