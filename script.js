const tableData = [
  ["H", "Hydrogen", 1, 1, 1],
  ["He", "Helium", 2, 18, 1],
  ["Li", "Lithium", 3, 1, 2],
  ["Be", "Beryllium", 4, 2, 2],
  ["B", "Boron", 5, 13, 2],
  ["C", "Carbon", 6, 14, 2],
  ["N", "Nitrogen", 7, 15, 2],
  ["O", "Oxygen", 8, 16, 2],
  ["F", "Fluorine", 9, 17, 2],
  ["Ne", "Neon", 10, 18, 2],
  ["Na", "Sodium", 11, 1, 3],
  ["Mg", "Magnesium", 12, 2, 3],
  ["Al", "Aluminium", 13, 13, 3],
  ["Si", "Silicon", 14, 14, 3],
  ["P", "Phosphorus", 15, 15, 3],
  ["S", "Sulfur", 16, 16, 3],
  ["Cl", "Chlorine", 17, 17, 3],
  ["Ar", "Argon", 18, 18, 3],
  ["K", "Potassium", 19, 1, 4],
  ["Ca", "Calcium", 20, 2, 4],
  ["Sc", "Scandium", 21, 3, 4],
  ["Ti", "Titanium", 22, 4, 4],
  ["V", "Vanadium", 23, 5, 4],
  ["Cr", "Chromium", 24, 6, 4],
  ["Mn", "Manganese", 25, 7, 4],
  ["Fe", "Iron", 26, 8, 4],
  ["Co", "Cobalt", 27, 9, 4],
  ["Ni", "Nickel", 28, 10, 4],
  ["Cu", "Copper", 29, 11, 4],
  ["Zn", "Zinc", 30, 12, 4],
  ["Ga", "Gallium", 31, 13, 4],
  ["Ge", "Germanium", 32, 14, 4],
  ["As", "Arsenic", 33, 15, 4],
  ["Se", "Selenium", 34, 16, 4],
  ["Br", "Bromine", 35, 17, 4],
  ["Kr", "Krypton", 36, 18, 4],
  ["Rb", "Rubidium", 37, 1, 5],
  ["Sr", "Strontium", 38, 2, 5],
  ["Y", "Yttrium", 39, 3, 5],
  ["Zr", "Zirconium", 40, 4, 5],
  ["Nb", "Niobium", 41, 5, 5],
  ["Mo", "Molybdenum", 42, 6, 5],
  ["Tc", "Technetium", 43, 7, 5],
  ["Ru", "Ruthenium", 44, 8, 5],
  ["Rh", "Rhodium", 45, 9, 5],
  ["Pd", "Palladium", 46, 10, 5],
  ["Ag", "Silver", 47, 11, 5],
  ["Cd", "Cadmium", 48, 12, 5],
  ["In", "Indium", 49, 13, 5],
  ["Sn", "Tin", 50, 14, 5],
  ["Sb", "Antimony", 51, 15, 5],
  ["Te", "Tellurium", 52, 16, 5],
  ["I", "Iodine", 53, 17, 5],
  ["Xe", "Xenon", 54, 18, 5],
  ["Cs", "Cesium", 55, 1, 6],
  ["Ba", "Barium", 56, 2, 6],
  ["La", "Lanthanum", 57, 3, 9],
  ["Ce", "Cerium", 58, 4, 9],
  ["Pr", "Praseodymium", 59, 5, 9],
  ["Nd", "Neodymium", 60, 6, 9],
  ["Pm", "Promethium", 61, 7, 9],
  ["Sm", "Samarium", 62, 8, 9],
  ["Eu", "Europium", 63, 9, 9],
  ["Gd", "Gadolinium", 64, 10, 9],
  ["Tb", "Terbium", 65, 11, 9],
  ["Dy", "Dysprosium", 66, 12, 9],
  ["Ho", "Holmium", 67, 13, 9],
  ["Er", "Erbium", 68, 14, 9],
  ["Tm", "Thulium", 69, 15, 9],
  ["Yb", "Ytterbium", 70, 16, 9],
  ["Lu", "Lutetium", 71, 17, 9],
  ["Hf", "Hafnium", 72, 4, 6],
  ["Ta", "Tantalum", 73, 5, 6],
  ["W", "Tungsten", 74, 6, 6],
  ["Re", "Rhenium", 75, 7, 6],
  ["Os", "Osmium", 76, 8, 6],
  ["Ir", "Iridium", 77, 9, 6],
  ["Pt", "Platinum", 78, 10, 6],
  ["Au", "Gold", 79, 11, 6],
  ["Hg", "Mercury", 80, 12, 6],
  ["Tl", "Thallium", 81, 13, 6],
  ["Pb", "Lead", 82, 14, 6],
  ["Bi", "Bismuth", 83, 15, 6],
  ["Po", "Polonium", 84, 16, 6],
  ["At", "Astatine", 85, 17, 6],
  ["Rn", "Radon", 86, 18, 6],
  ["Fr", "Francium", 87, 1, 7],
  ["Ra", "Radium", 88, 2, 7],
  ["Ac", "Actinium", 89, 3, 10],
  ["Th", "Thorium", 90, 4, 10],
  ["Pa", "Protactinium", 91, 5, 10],
  ["U", "Uranium", 92, 6, 10],
  ["Np", "Neptunium", 93, 7, 10],
  ["Pu", "Plutonium", 94, 8, 10],
  ["Am", "Americium", 95, 9, 10],
  ["Cm", "Curium", 96, 10, 10],
  ["Bk", "Berkelium", 97, 11, 10],
  ["Cf", "Californium", 98, 12, 10],
  ["Es", "Einsteinium", 99, 13, 10],
  ["Fm", "Fermium", 100, 14, 10],
  ["Md", "Mendelevium", 101, 15, 10],
  ["No", "Nobelium", 102, 16, 10],
  ["Lr", "Lawrencium", 103, 17, 10],
  ["Rf", "Rutherfordium", 104, 4, 7],
  ["Db", "Dubnium", 105, 5, 7],
  ["Sg", "Seaborgium", 106, 6, 7],
  ["Bh", "Bohrium", 107, 7, 7],
  ["Hs", "Hassium", 108, 8, 7],
  ["Mt", "Meitnerium", 109, 9, 7],
  ["Ds", "Darmstadtium", 110, 10, 7],
  ["Rg", "Roentgenium", 111, 11, 7],
  ["Cn", "Copernicium", 112, 12, 7],
  ["Nh", "Nihonium", 113, 13, 7],
  ["Fl", "Flerovium", 114, 14, 7],
  ["Mc", "Moscovium", 115, 15, 7],
  ["Lv", "Livermorium", 116, 16, 7],
  ["Ts", "Tennessine", 117, 17, 7],
  ["Og", "Oganesson", 118, 18, 7],
];

let camera;
let scene;
let renderer;
let controls;

const objects = [];
const targets = {
  table: [],
  sphere: [],
  helix: [],
  grid: [],
};

const container = document.getElementById("container");

init();
animate();
transform(targets.table, 2000);
setActiveButton("table");

function init() {
  camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  camera.position.z = 3200;

  scene = new THREE.Scene();

  for (let i = 0; i < tableData.length; i++) {
    const [symbol, name, atomicNumber, group, period] = tableData[i];

    const element = document.createElement("div");
    element.className = "element";

    const hueColor = getElementColor(group, period);

    element.style.color = hueColor.text;
    element.style.borderColor = hueColor.border;
    element.style.background = hueColor.bg;
    element.style.boxShadow = hueColor.shadow;

    const number = document.createElement("div");
    number.className = "number";
    number.textContent = atomicNumber;

    const symbolDiv = document.createElement("div");
    symbolDiv.className = "symbol";
    symbolDiv.textContent = symbol;

    const nameDiv = document.createElement("div");
    nameDiv.className = "name";
    nameDiv.textContent = name;

    const details = document.createElement("div");
    details.className = "details";
    details.textContent = `${group} • ${period}`;

    element.appendChild(number);
    element.appendChild(symbolDiv);
    element.appendChild(nameDiv);
    element.appendChild(details);

    const objectCSS = new THREE.CSS3DObject(element);
    objectCSS.position.x = Math.random() * 4000 - 2000;
    objectCSS.position.y = Math.random() * 4000 - 2000;
    objectCSS.position.z = Math.random() * 4000 - 2000;

    scene.add(objectCSS);
    objects.push(objectCSS);

    const objectTable = new THREE.Object3D();
    objectTable.position.x = group * 140 - 1330;
    objectTable.position.y = -(period * 180) + 920;
    objectTable.position.z = 0;
    targets.table.push(objectTable);
  }

  createSphereTargets();
  createHelixTargets();
  createGridTargets();

  renderer = new THREE.CSS3DRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  controls = new THREE.TrackballControls(camera, renderer.domElement);
  controls.rotateSpeed = 0.5;
  controls.minDistance = 900;
  controls.maxDistance = 7000;
  controls.staticMoving = true;
  controls.addEventListener("change", render);

  bindButtons();

  window.addEventListener("resize", onWindowResize);
}

function createSphereTargets() {
  const vector = new THREE.Vector3();

  for (let i = 0, l = objects.length; i < l; i++) {
    const phi = Math.acos(-1 + (2 * i) / l);
    const theta = Math.sqrt(l * Math.PI) * phi;

    const object = new THREE.Object3D();
    object.position.setFromSphericalCoords(900, phi, theta);

    vector.copy(object.position).multiplyScalar(2);
    object.lookAt(vector);

    targets.sphere.push(object);
  }
}

function createHelixTargets() {
  const vector = new THREE.Vector3();

  for (let i = 0, l = objects.length; i < l; i++) {
    const theta = i * 0.35 + Math.PI;
    const y = -(i * 14) + 850;

    const object = new THREE.Object3D();
    object.position.setFromCylindricalCoords(950, theta, y);

    vector.x = object.position.x * 2;
    vector.y = object.position.y;
    vector.z = object.position.z * 2;

    object.lookAt(vector);

    targets.helix.push(object);
  }
}

function createGridTargets() {
  for (let i = 0; i < objects.length; i++) {
    const object = new THREE.Object3D();

    object.position.x = ((i % 5) * 420) - 840;
    object.position.y = (-(Math.floor(i / 5) % 5) * 220) + 440;
    object.position.z = (Math.floor(i / 25)) * 900 - 1800;

    targets.grid.push(object);
  }
}

function transform(targetArray, duration = 2000) {
  TWEEN.removeAll();

  for (let i = 0; i < objects.length; i++) {
    const object = objects[i];
    const target = targetArray[i];

    new TWEEN.Tween(object.position)
      .to(
        {
          x: target.position.x,
          y: target.position.y,
          z: target.position.z,
        },
        Math.random() * duration + duration
      )
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();

    new TWEEN.Tween(object.rotation)
      .to(
        {
          x: target.rotation.x,
          y: target.rotation.y,
          z: target.rotation.z,
        },
        Math.random() * duration + duration
      )
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();
  }

  new TWEEN.Tween({})
    .to({}, duration * 2)
    .onUpdate(render)
    .start();
}

function animate() {
  requestAnimationFrame(animate);
  TWEEN.update();
  controls.update();
}

function render() {
  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
}

function bindButtons() {
  document.getElementById("table").addEventListener("click", () => {
    transform(targets.table, 2000);
    setActiveButton("table");
  });

  document.getElementById("sphere").addEventListener("click", () => {
    transform(targets.sphere, 2000);
    setActiveButton("sphere");
  });

  document.getElementById("helix").addEventListener("click", () => {
    transform(targets.helix, 2000);
    setActiveButton("helix");
  });

  document.getElementById("grid").addEventListener("click", () => {
    transform(targets.grid, 2000);
    setActiveButton("grid");
  });
}

function setActiveButton(id) {
  document.querySelectorAll("#menu button").forEach((btn) => {
    btn.classList.remove("active");
  });

  const active = document.getElementById(id);
  if (active) active.classList.add("active");
}

function getElementColor(group, period) {
  if (group === 17 || group === 18) {
    return {
      text: "#ff6b57",
      border: "rgba(255, 100, 100, 0.45)",
      bg: "rgba(65, 10, 10, 0.45)",
      shadow: "0 0 12px rgba(255, 90, 90, 0.25), inset 0 0 10px rgba(255, 90, 90, 0.08)",
    };
  }

  if (group >= 13 && group <= 16) {
    return {
      text: "#d7ff3f",
      border: "rgba(220, 255, 90, 0.4)",
      bg: "rgba(55, 60, 5, 0.42)",
      shadow: "0 0 12px rgba(220, 255, 90, 0.22), inset 0 0 10px rgba(220, 255, 90, 0.07)",
    };
  }

  if (period >= 9) {
    return {
      text: "#3fffc5",
      border: "rgba(90, 255, 215, 0.4)",
      bg: "rgba(5, 55, 45, 0.42)",
      shadow: "0 0 12px rgba(90, 255, 215, 0.22), inset 0 0 10px rgba(90, 255, 215, 0.07)",
    };
  }

  return {
    text: "#63ff63",
    border: "rgba(110, 255, 110, 0.4)",
    bg: "rgba(8, 55, 8, 0.42)",
    shadow: "0 0 12px rgba(90, 255, 90, 0.22), inset 0 0 10px rgba(90, 255, 90, 0.07)",
  };
}