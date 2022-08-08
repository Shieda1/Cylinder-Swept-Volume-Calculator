// https://calculator.swiftutors.com/cylinder-swept-volume-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const cylinderSweptVolumeRadio = document.getElementById('cylinderSweptVolumeRadio');
const cylinderDiameterRadio = document.getElementById('cylinderDiameterRadio');
const strokeLengthRadio = document.getElementById('strokeLengthRadio');

let cylinderSweptVolume;
const PI = Math.PI;
let cylinderDiameter = v1;
let strokeLength = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

cylinderSweptVolumeRadio.addEventListener('click', function() {
  variable1.textContent = 'Cylinder Diameter (cm)';
  variable2.textContent = 'Stroke Length (cm)';
  cylinderDiameter = v1;
  strokeLength = v2;
  result.textContent = '';
});

cylinderDiameterRadio.addEventListener('click', function() {
  variable1.textContent = 'Cylinder Swept Volume (cm³)';
  variable2.textContent = 'Stroke Length (cm)';
  cylinderSweptVolume = v1;
  strokeLength = v2;
  result.textContent = '';
});

strokeLengthRadio.addEventListener('click', function() {
  variable1.textContent = 'Cylinder Swept Volume (cm³)';
  variable2.textContent = 'Cylinder Diameter (cm)';
  cylinderSweptVolume = v1;
  cylinderDiameter = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(cylinderSweptVolumeRadio.checked)
    result.textContent = `Cylinder Swept Volume = ${computeCylinderSweptVolume().toFixed(2)} cm³`;

  else if(cylinderDiameterRadio.checked)
    result.textContent = `Cylinder Diameter = ${computeCylinderDiameter().toFixed(2)} cm`;

  else if(strokeLengthRadio.checked)
    result.textContent = `Stroke Length = ${computeStrokeLength().toFixed(2)} cm`;
})

// calculation

function computeCylinderSweptVolume() {
  return (PI / 4) * Math.pow(Number(cylinderDiameter.value), 2) * Number(strokeLength.value);
}

function computeCylinderDiameter() {
  return Math.sqrt(((Number(cylinderSweptVolume.value) * 4) / PI) / Number(strokeLength.value));
}

function computeStrokeLength() {
  return Number(cylinderSweptVolume.value) / ((PI / 4) * Math.pow(Number(cylinderDiameter.value), 2));
}