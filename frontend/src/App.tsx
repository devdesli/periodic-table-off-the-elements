import Element from "./element";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      {/* Row 1 */}
      <div className="d-flex gap-2">
        <Element color="green" title="Hydrogen" mass={1.008} />
        <div style={{ flex: 1 }} />
        <Element color="red" title="Helium" mass={4.0026} />
      </div>
      {/* Row 2 */}
      <div className="d-flex gap-2">
        <Element color="brown" title="Lithium" mass={6.94} />
        <Element color="brown" title="Beryllium" mass={9.0122} />
        <div style={{ flex: 2 }} />
        <Element color="green" title="Boron" mass={10.811} />
        <Element color="green" title="Carbon" mass={12.011} />
        <Element color="green" title="Nitrogen" mass={14.007} />
        <Element color="green" title="Oxygen" mass={15.999} />
        <Element color="green" title="Fluorine" mass={18.998} />
        <Element color="red" title="Neon" mass={20.180} />
      </div>
      {/* Row 3 */}
      <div className="d-flex gap-2">
        <Element color="brown" title="Sodium" mass={22.990} />
        <Element color="brown" title="Magnesium" mass={24.305} />
        <div style={{ flex: 2 }} />
        <Element color="brown" title="Aluminum" mass={26.982} />
        <Element color="green" title="Silicon" mass={28.085} />
        <Element color="green" title="Phosphorus" mass={30.974} />
        <Element color="green" title="Sulfur" mass={32.06} />
        <Element color="green" title="Chlorine" mass={35.45} />
        <Element color="red" title="Argon" mass={39.948} />
      </div>
      {/* Row 4 */}
      <div className="d-flex gap-2">
        <Element color="brown" title="Potassium" mass={39.098} />
        <Element color="brown" title="Calcium" mass={40.078} />
        <Element color="brown" title="Scandium" mass={44.956} />
        <Element color="brown" title="Titanium" mass={47.867} />
        <Element color="brown" title="Vanadium" mass={50.942} />
        <Element color="brown" title="Chromium" mass={51.996} />
        <Element color="brown" title="Manganese" mass={54.938} />
        <Element color="brown" title="Iron" mass={55.845} />
        <Element color="brown" title="Cobalt" mass={58.933} />
        <Element color="brown" title="Nickel" mass={58.693} />
        <Element color="brown" title="Copper" mass={63.546} />
        <Element color="brown" title="Zinc" mass={65.38} />
        <Element color="brown" title="Gallium" mass={69.723} />
        <Element color="green" title="Germanium" mass={72.630} />
        <Element color="green" title="Arsenic" mass={74.922} />
        <Element color="green" title="Selenium" mass={78.971} />
        <Element color="green" title="Bromine" mass={79.904} />
        <Element color="red" title="Krypton" mass={83.798} />
      </div>
      {/* Row 5 */}
      <div className="d-flex gap-2">
        <Element color="brown" title="Rubidium" mass={85.468} />
        <Element color="brown" title="Strontium" mass={87.62} />
        <Element color="brown" title="Yttrium" mass={88.906} />
        <Element color="brown" title="Zirconium" mass={91.224} />
        <Element color="brown" title="Niobium" mass={92.906} />
        <Element color="brown" title="Molybdenum" mass={95.95} />
        <Element color="black" title="Technetium" mass={98} />
        <Element color="brown" title="Ruthenium" mass={101.07} />
        <Element color="brown" title="Rhodium" mass={102.91} />
        <Element color="brown" title="Palladium" mass={106.42} />
        <Element color="brown" title="Silver" mass={107.87} />
        <Element color="brown" title="Cadmium" mass={112.41} />
        <Element color="brown" title="Indium" mass={114.82} />
        <Element color="brown" title="Tin" mass={118.71} />
        <Element color="green" title="Antimony" mass={121.76} />
        <Element color="green" title="Tellurium" mass={127.60} />
        <Element color="green" title="Iodine" mass={126.90} />
        <Element color="red" title="Xenon" mass={131.29} />
      </div>
      {/* Row 6 */}
      <div className="d-flex gap-2">
        <Element color="brown" title="Cesium" mass={132.91} />
        <Element color="brown" title="Barium" mass={137.33} />
        <div style={{ width: 60 }} /> {/* Lanthanides placeholder */}
        <Element color="brown" title="Hafnium" mass={178.49} />
        <Element color="brown" title="Tantalum" mass={180.95} />
        <Element color="brown" title="Tungsten" mass={183.84} />
        <Element color="brown" title="Rhenium" mass={186.21} />
        <Element color="brown" title="Osmium" mass={190.23} />
        <Element color="brown" title="Iridium" mass={192.22} />
        <Element color="brown" title="Platinum" mass={195.08} />
        <Element color="brown" title="Gold" mass={196.97} />
        <Element color="blue" title="Mercury" mass={200.59} />
        <Element color="brown" title="Thallium" mass={204.38} />
        <Element color="brown" title="Lead" mass={207.2} />
        <Element color="green" title="Bismuth" mass={208.98} />
        <Element color="black" title="Polonium" mass={209} />
        <Element color="green" title="Astatine" mass={210} />
        <Element color="red" title="Radon" mass={222} />
      </div>
      {/* Row 7 */}
      <div className="d-flex gap-2">
        <Element color="brown" title="Francium" mass={223} />
        <Element color="brown" title="Radium" mass={226} />
        <div style={{ width: 60 }} /> {/* Actinides placeholder */}
        <Element color="black" title="Rutherfordium" mass={267} />
        <Element color="black" title="Dubnium" mass={268} />
        <Element color="black" title="Seaborgium" mass={270} />
        <Element color="black" title="Bohrium" mass={270} />
        <Element color="black" title="Hassium" mass={277} />
        <Element color="black" title="Meitnerium" mass={276} />
        <Element color="black" title="Darmstadtium" mass={281} />
        <Element color="black" title="Roentgenium" mass={282} />
        <Element color="black" title="Copernicium" mass={285} />
        <Element color="black" title="Nihonium" mass={286} />
        <Element color="black" title="Flerovium" mass={289} />
        <Element color="black" title="Moscovium" mass={290} />
        <Element color="black" title="Livermorium" mass={293} />
        <Element color="black" title="Tennessine" mass={294} />
        <Element color="black" title="Oganesson" mass={294} />
      </div>
    </>
  );
}

export default App;
