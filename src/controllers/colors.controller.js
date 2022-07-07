const fs = require('fs')
const {
  runInNewContext
} = require('vm')

const filePath = './src/json/colors.json';


const getColors = () => {
  const data = fs.existsSync(filePath) ?
    fs.readFileSync(filePath) : []

  try {
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};


exports.colorsJson = (req, res) => {

  try {
    const colors = getColors()
    res.status(200).send(colors)
  } catch (error) {
    res.status(400).send(error.message)
  }

}

exports.colorsList = (req, res) => {

  let obj = getColors();
  let html = `
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

  <style>
  .flex-container {
    display: flex;    
    justify-content: space-between;
    width: 100%;
  }

  #colors-block {
    color: blue;
    align-content: stretch;
  }
    .color .color-name,
    .color .color-sample {
      writing-mode: vertical-lr;
      text-orientation: sideways;
      text-align: center;
    }

    .color .color-sample {
      display: flex;
      font-size: 0.8em;
    }

    .color-sample div {
      padding: 0.5em;
    }

    #colors-block .color {
      margin-bottom: 1em;
      border-radius: 0.8em;
    }

    @media (min-width:901px) {

      .color .color-name,
      .color .color-sample {
          transform: rotate(-180deg);
      }
  
  
      .color-sample div {
          height: 50%;
      }
  
      .color-item {
          border-left: 0.05em solid;
          margin: 1em;
          padding-left: 1em;
          width: 30%;
      }
  
  }
  
   @media (max-width:900px) {
  
      .color .color-name,
      .color .color-sample {
          writing-mode: horizontal-tb;
          margin-top: 1em;
      }
  
      .flex-container{
          flex-direction: column;
      }
  
      #colors-block {
          flex-direction: column;
      }
  
      .color-sample div {
          width: 50%;
          padding: 0.5em;
      }
  
      .h3 {
          text-align: left;
      }
  
      .color-item {
          border-bottom: 0.05em solid;
          margin: 1em;
      }
  
      .pallete-items{
          
          flex-wrap: wrap;
      }
  }
  
  </style>
  `;

  obj.forEach(element => {
    let fontColor = 'Black'


    if (element.darkColor == true) {
      fontColor = 'White'
    }

    let usedFor = element.usedFor.map((item) => {
      return `<li>${item}</li>`
    })

    let emotions = element.emotions.map((item) => {
      return `<li>${item}</li>`
    })

    let industry = element.industry.map((item) => {
      return `<li>${item}</li>`
    })

    html += `
          <div class="color flex-container" style="background-color: ${element.tag}; color:${fontColor}">
          <div class="color-name" ><h2>${element.name}</h2></div>
          <div class="color-item"><h3>Emoção</h3><ul>${emotions.join("")}</ul></div>
          <div class="color-item"><h3>Na indústria</h3><ul>${industry.join("")}</ul></div>
          <div class="color-item"><h3>Usado para</h3><ul>${usedFor.join("")}</ul></div>
          <div class="color-sample" style="background-color: White">
          <div style="background-color: ${element.pairing[0]};">${element.pairing[0]}</div>
          <div style="background-color: ${element.pairing[1]};">${element.pairing[1]}</div>
          </div>
      </div>`
  });

  res.status(200).send(html);


}