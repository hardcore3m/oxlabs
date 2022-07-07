const fs = require('fs')
const {
  runInNewContext
} = require('vm')

const filePath = './src/json/palletes.json';


const getPalletes = () => {
  const data = fs.existsSync(filePath) ?
    fs.readFileSync(filePath) : []

  try {
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};


exports.palletesJson = (req, res) => {

  try {
    const palletes = getPalletes()
    res.status(200).send(palletes)
  } catch (error) {
    res.status(400).send(error.message)
  }

}

exports.palletesList = (req, res) => {

  let obj = getPalletes();
  let html = `
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

  <style>
  .flex-container {
    display: flex;    
    justify-content: space-between;
    width: 100%;
  }

  #palletes-block {
    color: blue;
    align-content: stretch;
  }
   

    #palletes-block .color {
      margin-bottom: 1em;
      border-radius: 0.8em;
    }
    .pallete{
        border: 1.5px solid black;
        border-radius: 5px;
        margin-bottom: 20px;
    }
    
    .pallete-items{
        display: flex;
        align-items: stretch;
    }
    .pallete-name{
        text-align: center;
    }
    .pallete-items div{
        flex-grow: 1;
        text-align: center;
        height: 2em;
    }
    .pallete-gradient{
        height: 2em;
        }
   @media (max-width:900px) {
  
      .flex-container{
          flex-direction: column;
      }
  
      #palletes-block {
          flex-direction: column;
      }
  
      .pallete-items{
          
          flex-wrap: wrap;
      }
  }
  
  </style>
  `;

  var mappingPalletes = getPalletes().map(
    function (item, index) {
        let colorsDiv = item.colors.reduce(
            (acc, el) => acc += `<div style="background-color: ${el}"></div>`, ""
        )
        let colorsId = item.colors.reduce(
            (acc, el) => acc += `<div>${el}</div>`, ""
        )
        let colorsGradient = item.colors.join()
        


        return `
        <div class="pallete" >
            <div class="pallete-name" ><h2>${item.name}</h2></div>
            <div class="pallete-items">${colorsId}</div>
            <div class="pallete-items">${colorsDiv}</div>
            <div class="pallete-gradient" style="background: linear-gradient(to right,${colorsGradient});"></div>
        
       
        </div>`

    }

)

  res.status(200).send(`${html} ${mappingPalletes.join("")}`);


}