import Element from "./element";
import Information from "./info";
import "bootstrap/dist/css/bootstrap.min.css";
import "./elements.css";
import "./App.css";

const info = "info";
const mass = 1.008;
const color = "#4e7c3a";

function App() {
  return (
    <>
      <div className="info-container">
        <Information title={info} color={color} mass={mass} />
      </div>
      
      <div className="elements">
        {/* Row 1 */}
        <div className="d-flex gap-2">
          <Element color="#4e7c3a" title="H" mass={1.008} />
          <div style={{ flex: 1 }} />
          <Element color="#b84e6f" title="He" mass={4.0026} />
        </div>
        {/* Row 2 */}
        <div className="d-flex gap-2">
          <Element color="#b88c2a" title="Li" mass={6.94} />
          <Element color="#b88c2a" title="Be" mass={9.0122} />
          <div style={{ flex: 2 }} />
          <Element color="#3a6ea5" title="B" mass={10.811} />
          <Element color="#3a6ea5" title="C" mass={12.011} />
          <Element color="#7bb661" title="N" mass={14.007} />
          <Element color="#7bb661" title="O" mass={15.999} />
          <Element color="#7bb661" title="F" mass={18.998} />
          <Element color="#b84e6f" title="Ne" mass={20.18} />
        </div>
        {/* Row 3 */}
        <div className="d-flex gap-2">
          <Element color="#b88c2a" title="Na" mass={22.99} />
          <Element color="#b88c2a" title="Mg" mass={24.305} />
          <div style={{ flex: 2 }} />
          <Element color="#3a6ea5" title="Al" mass={26.982} />
          <Element color="#3a6ea5" title="Si" mass={28.085} />
          <Element color="#7bb661" title="P" mass={30.974} />
          <Element color="#7bb661" title="S" mass={32.06} />
          <Element color="#7bb661" title="Cl" mass={35.45} />
          <Element color="#b84e6f" title="Ar" mass={39.948} />
        </div>
        {/* Row 4 */}
        <div className="d-flex gap-2">
          <Element color="#b88c2a" title="K" mass={39.098} />
          <Element color="#b88c2a" title="Ca" mass={40.078} />
          <Element color="#7b6ea5" title="Sc" mass={44.956} />
          <Element color="#7b6ea5" title="Ti" mass={47.867} />
          <Element color="#7b6ea5" title="V" mass={50.942} />
          <Element color="#7b6ea5" title="Cr" mass={51.996} />
          <Element color="#7b6ea5" title="Mn" mass={54.938} />
          <Element color="#7b6ea5" title="Fe" mass={55.845} />
          <Element color="#7b6ea5" title="Co" mass={58.933} />
          <Element color="#7b6ea5" title="Ni" mass={58.693} />
          <Element color="#7b6ea5" title="Cu" mass={63.546} />
          <Element color="#7b6ea5" title="Zn" mass={65.38} />
          <Element color="#3a6ea5" title="Ga" mass={69.723} />
          <Element color="#3a6ea5" title="Ge" mass={72.63} />
          <Element color="#7bb661" title="As" mass={74.922} />
          <Element color="#7bb661" title="Se" mass={78.971} />
          <Element color="#7bb661" title="Br" mass={79.904} />
          <Element color="#b84e6f" title="Kr" mass={83.798} />
        </div>
        {/* Row 5 */}
        <div className="d-flex gap-2">
          <Element color="#b88c2a" title="Rb" mass={85.468} />
          <Element color="#b88c2a" title="Sr" mass={87.62} />
          <Element color="#7b6ea5" title="Y" mass={88.906} />
          <Element color="#7b6ea5" title="Zr" mass={91.224} />
          <Element color="#7b6ea5" title="Nb" mass={92.906} />
          <Element color="#7b6ea5" title="Mo" mass={95.95} />
          <Element color="#7b6ea5" title="Tc" mass={98} />
          <Element color="#7b6ea5" title="Ru" mass={101.07} />
          <Element color="#7b6ea5" title="Rh" mass={102.91} />
          <Element color="#7b6ea5" title="Pd" mass={106.42} />
          <Element color="#7b6ea5" title="Ag" mass={107.87} />
          <Element color="#7b6ea5" title="Cd" mass={112.41} />
          <Element color="#3a6ea5" title="In" mass={114.82} />
          <Element color="#3a6ea5" title="Sn" mass={118.71} />
          <Element color="#3a6ea5" title="Sb" mass={121.76} />
          <Element color="#7bb661" title="Te" mass={127.6} />
          <Element color="#7bb661" title="I" mass={126.9} />
          <Element color="#b84e6f" title="Xe" mass={131.29} />
        </div>
        {/* Row 6 */}
        <div className="d-flex gap-2">
          <Element color="#b88c2a" title="Cs" mass={132.91} />
          <Element color="#b88c2a" title="Ba" mass={137.33} />
          <div style={{ width: 60 }} /> {/* Lanthanides placeholder */}
          <Element color="#7b6ea5" title="Hf" mass={178.49} />
          <Element color="#7b6ea5" title="Ta" mass={180.95} />
          <Element color="#7b6ea5" title="W" mass={183.84} />
          <Element color="#7b6ea5" title="Re" mass={186.21} />
          <Element color="#7b6ea5" title="Os" mass={190.23} />
          <Element color="#7b6ea5" title="Ir" mass={192.22} />
          <Element color="#7b6ea5" title="Pt" mass={195.08} />
          <Element color="#f2c849" title="Au" mass={196.97} />
          <Element color="#3a6ea5" title="Hg" mass={200.59} />
          <Element color="#3a6ea5" title="Tl" mass={204.38} />
          <Element color="#3a6ea5" title="Pb" mass={207.2} />
          <Element color="#3a6ea5" title="Bi" mass={208.98} />
          <Element color="#7bb661" title="Po" mass={209} />
          <Element color="#7bb661" title="At" mass={210} />
          <Element color="#b84e6f" title="Rn" mass={222} />
        </div>
        {/* Row 7 */}
        <div className="d-flex gap-2">
          <Element color="#b88c2a" title="Fr" mass={223} />
          <Element color="#b88c2a" title="Ra" mass={226} />
          <div style={{ width: 60 }} /> {/* Actinides placeholder */}
          <Element color="#7b6ea5" title="Rf" mass={267} />
          <Element color="#7b6ea5" title="Db" mass={268} />
          <Element color="#7b6ea5" title="Sg" mass={270} />
          <Element color="#7b6ea5" title="Bh" mass={270} />
          <Element color="#7b6ea5" title="Hs" mass={277} />
          <Element color="#7b6ea5" title="Mt" mass={276} />
          <Element color="#7b6ea5" title="Ds" mass={281} />
          <Element color="#7b6ea5" title="Rg" mass={282} />
          <Element color="#7b6ea5" title="Cn" mass={285} />
          <Element color="#3a6ea5" title="Nh" mass={286} />
          <Element color="#3a6ea5" title="Fl" mass={289} />
          <Element color="#3a6ea5" title="Mc" mass={290} />
          <Element color="#3a6ea5" title="Lv" mass={293} />
          <Element color="#b84e6f" title="Ts" mass={294} />
          <Element color="#b84e6f" title="Og" mass={294} />
        </div>
      </div>
    </>
  );
}

export default App;
