import React, { useState } from "react";
import Element from "./element";
import Information from "./info";
import "bootstrap/dist/css/bootstrap.min.css";
import "./elements.css";
import "./App.css";
import "./info.css";
import Menu from "./menu";

const defaultInfo = { title: "H", mass: 1.008, color: "#4e7c3a", name: "Hydrogen"};

function App() {
  const [info, setInfo] = useState(defaultInfo);
  return (
    <>
      <div className="menu">
        <Menu title="Periodic Table Of The Elements" />
      </div>

      <div className="info-container">
        <Information title={info.title} color={info.color} mass={info.mass}   name={info.name ?? "Unknown"} />
      </div>

      <div className="elements">
        {/* Row 1 */}
        <div className="d-flex gap-2">
          <Element
            color="#4e7c3a"
            title="H"
            mass={1.008}
            onHover={() =>
              setInfo({ title: "H", mass: 1.008, color: "#4e7c3a", name: "Hydrogen"})
            }
          />
          <div style={{ flex: 1 }} />
          <Element
            color="#b84e6f"
            title="He"
            mass={4.0026}
            onHover={() =>
              setInfo({ title: "He", mass: 4.0026, color: "#b84e6f", name: "Helium" })
            }
          />
        </div>
        {/* Row 2 */}
        <div className="d-flex gap-2">
          <Element
            color="#b88c2a"
            title="Li"
            mass={6.94}
            onHover={() =>
              setInfo({ title: "Li", mass: 6.94, color: "#b88c2a", name: ""})
            }
          />
          <Element
            color="#b88c2a"
            title="Be"
            mass={9.0122}
            onHover={() =>
              setInfo({ title: "Be", mass: 9.0122, color: "#b88c2a", name: "" })
            }
          />
          <div style={{ flex: 2 }} />
          <Element
            color="#3a6ea5"
            title="B"
            mass={10.811}
            onHover={() =>
              setInfo({ title: "B", mass: 10.811, color: "#3a6ea5", name: "" })
            }
          />
          <Element
            color="#3a6ea5"
            title="C"
            mass={12.011}
            onHover={() =>
              setInfo({ title: "C", mass: 12.011, color: "#3a6ea5", name: "" })
            }
          />
          <Element
            color="#7bb661"
            title="N"
            mass={14.007}
            onHover={() =>
              setInfo({ title: "N", mass: 14.007, color: "#7bb661", name: "" })
            }
          />
          <Element
            color="#7bb661"
            title="O"
            mass={15.999}
            onHover={() =>
              setInfo({ title: "O", mass: 15.999, color: "#7bb661", name: "" })
            }
          />
          <Element
            color="#7bb661"
            title="F"
            mass={18.998}
            onHover={() =>
              setInfo({ title: "F", mass: 18.998, color: "#7bb661", name: "" })
            }
          />
          <Element
            color="#b84e6f"
            title="Ne"
            mass={20.18}
            onHover={() =>
              setInfo({ title: "Ne", mass: 20.18, color: "#b84e6f", name: "" })
            }
          />
        </div>
        {/* Row 3 */}
        <div className="d-flex gap-2">
          <Element
            color="#b88c2a"
            title="Na"
            mass={22.99}
            onHover={() =>
              setInfo({ title: "Na", mass: 22.99, color: "#b88c2a", name: "" })
            }
          />
          <Element
            color="#b88c2a"
            title="Mg"
            mass={24.305}
            onHover={() =>
              setInfo({ title: "Mg", mass: 24.305, color: "#b88c2a", name: "" })
            }
          />
          <div style={{ flex: 2 }} />
          <Element
            color="#3a6ea5"
            title="Al"
            mass={26.982}
            onHover={() =>
              setInfo({ title: "Al", mass: 26.982, color: "#3a6ea5", name: "" })
            }
          />
          <Element
            color="#3a6ea5"
            title="Si"
            mass={28.085}
            onHover={() =>
              setInfo({ title: "Si", mass: 28.085, color: "#3a6ea5", name: "" })
            }
          />
          <Element
            color="#7bb661"
            title="P"
            mass={30.974}
            onHover={() =>
              setInfo({ title: "P", mass: 30.974, color: "#7bb661", name: "" })
            }
          />
          <Element
            color="#7bb661"
            title="S"
            mass={32.06}
            onHover={() =>
              setInfo({ title: "S", mass: 32.06, color: "#7bb661", name: "" })
            }
          />
          <Element
            color="#7bb661"
            title="Cl"
            mass={35.45}
            onHover={() =>
              setInfo({ title: "Cl", mass: 35.45, color: "#7bb661", name: "" })
            }
          />
          <Element
            color="#b84e6f"
            title="Ar"
            mass={39.948}
            onHover={() =>
              setInfo({ title: "Ar", mass: 39.948, color: "#b84e6f", name: "" })
            }
          />
        </div>
        {/* Row 4 */}
        <div className="d-flex gap-2">
          <Element
            color="#b88c2a"
            title="K"
            mass={39.098}
            onHover={() =>
              setInfo({ title: "K", mass: 39.098, color: "#b88c2a", name: "" })
            }
          />
          <Element
            color="#b88c2a"
            title="Ca"
            mass={40.078}
            onHover={() =>
              setInfo({ title: "Ca", mass: 40.078, color: "#b88c2a", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Sc"
            mass={44.956}
            onHover={() =>
              setInfo({ title: "Sc", mass: 44.956, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Ti"
            mass={47.867}
            onHover={() =>
              setInfo({ title: "Ti", mass: 47.867, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="V"
            mass={50.942}
            onHover={() =>
              setInfo({ title: "V", mass: 50.942, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Cr"
            mass={51.996}
            onHover={() =>
              setInfo({ title: "Cr", mass: 51.996, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Mn"
            mass={54.938}
            onHover={() =>
              setInfo({ title: "Mn", mass: 54.938, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Fe"
            mass={55.845}
            onHover={() =>
              setInfo({ title: "Fe", mass: 55.845, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Co"
            mass={58.933}
            onHover={() =>
              setInfo({ title: "Co", mass: 58.933, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Ni"
            mass={58.693}
            onHover={() =>
              setInfo({ title: "Ni", mass: 58.693, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Cu"
            mass={63.546}
            onHover={() =>
              setInfo({ title: "Cu", mass: 63.546, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Zn"
            mass={65.38}
            onHover={() =>
              setInfo({ title: "Zn", mass: 65.38, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#3a6ea5"
            title="Ga"
            mass={69.723}
            onHover={() =>
              setInfo({ title: "Ga", mass: 69.723, color: "#3a6ea5", name: "" })
            }
          />
          <Element
            color="#3a6ea5"
            title="Ge"
            mass={72.63}
            onHover={() =>
              setInfo({ title: "Ge", mass: 72.63, color: "#3a6ea5", name: "" })
            }
          />
          <Element
            color="#7bb661"
            title="As"
            mass={74.922}
            onHover={() =>
              setInfo({ title: "As", mass: 74.922, color: "#7bb661", name: "" })
            }
          />
          <Element
            color="#7bb661"
            title="Se"
            mass={78.971}
            onHover={() =>
              setInfo({ title: "Se", mass: 78.971, color: "#7bb661", name: "" })
            }
          />
          <Element
            color="#7bb661"
            title="Br"
            mass={79.904}
            onHover={() =>
              setInfo({ title: "Br", mass: 79.904, color: "#7bb661", name: "" })
            }
          />
          <Element
            color="#b84e6f"
            title="Kr"
            mass={83.798}
            onHover={() =>
              setInfo({ title: "Kr", mass: 83.798, color: "#b84e6f", name: "" })
            }
          />
        </div>
        {/* Row 5 */}
        <div className="d-flex gap-2">
          <Element
            color="#b88c2a"
            title="Rb"
            mass={85.468}
            onHover={() =>
              setInfo({ title: "Rb", mass: 85.468, color: "#b88c2a", name: "" })
            }
          />
          <Element
            color="#b88c2a"
            title="Sr"
            mass={87.62}
            onHover={() =>
              setInfo({ title: "Sr", mass: 87.62, color: "#b88c2a", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Y"
            mass={88.906}
            onHover={() =>
              setInfo({ title: "Y", mass: 88.906, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Zr"
            mass={91.224}
            onHover={() =>
              setInfo({ title: "Zr", mass: 91.224, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Nb"
            mass={92.906}
            onHover={() =>
              setInfo({ title: "Nb", mass: 92.906, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Mo"
            mass={95.95}
            onHover={() =>
              setInfo({ title: "Mo", mass: 95.95, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Tc"
            mass={98}
            onHover={() => setInfo({ title: "Tc", mass: 98, color: "#7b6ea5", name: "" })}
          />
          <Element
            color="#7b6ea5"
            title="Ru"
            mass={101.07}
            onHover={() =>
              setInfo({ title: "Ru", mass: 101.07, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Rh"
            mass={102.91}
            onHover={() =>
              setInfo({ title: "Rh", mass: 102.91, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Pd"
            mass={106.42}
            onHover={() =>
              setInfo({ title: "Pd", mass: 106.42, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Ag"
            mass={107.87}
            onHover={() =>
              setInfo({ title: "Ag", mass: 107.87, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Cd"
            mass={112.41}
            onHover={() =>
              setInfo({ title: "Cd", mass: 112.41, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#3a6ea5"
            title="In"
            mass={114.82}
            onHover={() =>
              setInfo({ title: "In", mass: 114.82, color: "#3a6ea5", name: "" })
            }
          />
          <Element
            color="#3a6ea5"
            title="Sn"
            mass={118.71}
            onHover={() =>
              setInfo({ title: "Sn", mass: 118.71, color: "#3a6ea5", name: "" })
            }
          />
          <Element
            color="#3a6ea5"
            title="Sb"
            mass={121.76}
            onHover={() =>
              setInfo({ title: "Sb", mass: 121.76, color: "#3a6ea5", name: "" })
            }
          />
          <Element
            color="#7bb661"
            title="Te"
            mass={127.6}
            onHover={() =>
              setInfo({ title: "Te", mass: 127.6, color: "#7bb661", name: "" })
            }
          />
          <Element
            color="#7bb661"
            title="I"
            mass={126.9}
            onHover={() =>
              setInfo({ title: "I", mass: 126.9, color: "#7bb661", name: "" })
            }
          />
          <Element
            color="#b84e6f"
            title="Xe"
            mass={131.29}
            onHover={() =>
              setInfo({ title: "Xe", mass: 131.29, color: "#b84e6f", name: "" })
            }
          />
        </div>
        {/* Row 6 */}
        <div className="d-flex gap-2">
          <Element
            color="#b88c2a"
            title="Cs"
            mass={132.91}
            onHover={() =>
              setInfo({ title: "Cs", mass: 132.91, color: "#b88c2a", name: "" })
            }
          />
          <Element
            color="#b88c2a"
            title="Ba"
            mass={137.33}
            onHover={() =>
              setInfo({ title: "Ba", mass: 137.33, color: "#b88c2a", name: "" })
            }
          />
          <div className="d-flex gap-2">
            <Element color="purple" title=""></Element>
          </div>
          <Element
            color="#7b6ea5"
            title="Hf"
            mass={178.49}
            onHover={() =>
              setInfo({ title: "Hf", mass: 178.49, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Ta"
            mass={180.95}
            onHover={() =>
              setInfo({ title: "Ta", mass: 180.95, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="W"
            mass={183.84}
            onHover={() =>
              setInfo({ title: "W", mass: 183.84, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Re"
            mass={186.21}
            onHover={() =>
              setInfo({ title: "Re", mass: 186.21, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Os"
            mass={190.23}
            onHover={() =>
              setInfo({ title: "Os", mass: 190.23, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Ir"
            mass={192.22}
            onHover={() =>
              setInfo({ title: "Ir", mass: 192.22, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Pt"
            mass={195.08}
            onHover={() =>
              setInfo({ title: "Pt", mass: 195.08, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Au"
            mass={196.97}
            onHover={() =>
              setInfo({ title: "Au", mass: 196.97, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Hg"
            mass={200.59}
            onHover={() =>
              setInfo({ title: "Hg", mass: 200.59, color: "#7b6ea5", name: "Hg" })
            }
          />
          <Element
            color="#3a6ea5"
            title="Tl"
            mass={204.38}
            onHover={() =>
              setInfo({ title: "Tl", mass: 204.38, color: "#3a6ea5", name: "" })
            }
          />
          <Element
            color="#3a6ea5"
            title="Pb"
            mass={207.2}
            onHover={() =>
              setInfo({ title: "Pb", mass: 207.2, color: "#3a6ea5", name: "" })
            }
          />
          <Element
            color="#3a6ea5"
            title="Bi"
            mass={208.98}
            onHover={() =>
              setInfo({ title: "Bi", mass: 208.98, color: "#3a6ea5", name: "" })
            }
          />
          <Element
            color="#3a6ea5"
            title="Po"
            mass={209}
            onHover={() =>
              setInfo({ title: "Po", mass: 209, color: "#7bb661", name: "" })
            }
          />
          <Element
            color="#7bb661"
            title="At"
            mass={210}
            onHover={() =>
              setInfo({ title: "At", mass: 210, color: "#7bb661", name: "" })
            }
          />
          <Element
            color="#b84e6f"
            title="Rn"
            mass={222}
            onHover={() =>
              setInfo({ title: "Rn", mass: 222, color: "#b84e6f", name: "" })
            }
          />
        </div>
        {/* Row 7 */}
        <div className="d-flex gap-2">
          <Element
            color="#b88c2a"
            title="Fr"
            mass={223}
            onHover={() =>
              setInfo({ title: "Fr", mass: 223, color: "#b88c2a", name: "" })
            }
          />
          <Element
            color="#b88c2a"
            title="Ra"
            mass={226}
            onHover={() =>
              setInfo({ title: "Ra", mass: 226, color: "#b88c2a", name: "" })
            }
          />
          <div className="d-flex gap-2">
            <Element color="purple" title=""></Element>
          </div>

          <Element
            color="#7b6ea5"
            title="Rf"
            mass={267}
            onHover={() =>
              setInfo({ title: "Rf", mass: 267, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Db"
            mass={268}
            onHover={() =>
              setInfo({ title: "Db", mass: 268, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Sg"
            mass={270}
            onHover={() =>
              setInfo({ title: "Sg", mass: 270, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Bh"
            mass={270}
            onHover={() =>
              setInfo({ title: "Bh", mass: 270, color: "#7b6ea5", name: ""})
            }
          />
          <Element
            color="#7b6ea5"
            title="Hs"
            mass={277}
            onHover={() =>
              setInfo({ title: "Hs", mass: 277, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Mt"
            mass={276}
            onHover={() =>
              setInfo({ title: "Mt", mass: 276, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Ds"
            mass={281}
            onHover={() =>
              setInfo({ title: "Ds", mass: 281, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Rg"
            mass={282}
            onHover={() =>
              setInfo({ title: "Rg", mass: 282, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#7b6ea5"
            title="Cn"
            mass={285}
            onHover={() =>
              setInfo({ title: "Cn", mass: 285, color: "#7b6ea5", name: "" })
            }
          />
          <Element
            color="#3a6ea5"
            title="Nh"
            mass={286}
            onHover={() =>
              setInfo({ title: "Nh", mass: 286, color: "#3a6ea5", name: "" })
            }
          />
          <Element
            color="#3a6ea5"
            title="Fl"
            mass={289}
            onHover={() =>
              setInfo({ title: "Fl", mass: 289, color: "#3a6ea5", name: "" })
            }
          />
          <Element
            color="#3a6ea5"
            title="Mc"
            mass={290}
            onHover={() =>
              setInfo({ title: "Mc", mass: 290, color: "#3a6ea5", name: "" })
            }
          />
          <Element
            color="#3a6ea5"
            title="Lv"
            mass={293}
            onHover={() =>
              setInfo({ title: "Lv", mass: 293, color: "#3a6ea5", name: "" })
            }
          />
          <Element
            color="#7bb661"
            title="Ts"
            mass={294}
            onHover={() =>
              setInfo({ title: "Ts", mass: 294, color: "#b84e6f", name: "" })
            }
          />
          <Element
            color="#b84e6f"
            title="Og"
            mass={294}
            onHover={() =>
              setInfo({ title: "Og", mass: 294, color: "#b84e6f", name: "" })
            }
          />
        </div>
        <div style={{ height: "60px" }}></div>
        <div className="d-flex gap-2 " style={{ paddingBottom: "10px" }}>
          <Element
            color="purple"
            title="La"
            mass={57}
            onHover={() =>
              setInfo({ title: "La", mass: 57, color: "purple", name: "" })
            }
          ></Element>
          <Element color="purple" title="Ce" mass={57}             onHover={() =>
              setInfo({ title: "Ce", mass: 57, color: "purple", name: "" })
            }></Element>
          <Element color="purple" title="Pr" mass={57}             onHover={() =>
              setInfo({ title: "Pr", mass: 57, color: "purple" , name: ""})
            }></Element>
          <Element color="purple" title="Nd" mass={57}             onHover={() =>
              setInfo({ title: "Nd", mass: 57, color: "purple" , name: ""})
            }></Element>
          <Element color="purple" title="Pm" mass={57}             onHover={() =>
              setInfo({ title: "Pm", mass: 57, color: "purple" , name: ""})
            }></Element>
          <Element color="purple" title="Sm" mass={57}             onHover={() =>
              setInfo({ title: "Sm", mass: 57, color: "purple" , name: ""})
            }></Element>
          <Element color="purple" title="Eu" mass={57}             onHover={() =>
              setInfo({ title: "Eu", mass: 57, color: "purple" , name: ""})
            }></Element>
          <Element color="purple" title="La" mass={57}></Element>
          <Element color="purple" title="La" mass={57}></Element>
          <Element color="purple" title="La" mass={57}></Element>
          <Element color="purple" title="La" mass={57}></Element>
          <Element color="purple" title="La" mass={57}></Element>
          <Element color="purple" title="La" mass={57}></Element>
          <Element color="purple" title="La" mass={57}></Element>
        </div>
        <div className="d-flex gap-2" style={{ paddingBottom: "10px" }}>
          <Element color=" #9370DB" title="La" mass={57}></Element>
          <Element color=" #9370DB" title="Ce" mass={57}></Element>
          <Element color=" #9370DB" title="Pr" mass={57}></Element>
          <Element color=" #9370DB" title="Nd" mass={57}></Element>
          <Element color=" #9370DB" title="Pm" mass={57}></Element>
          <Element color=" #9370DB" title="Sm" mass={57}></Element>
          <Element color=" #9370DB" title="Eu" mass={57}></Element>
          <Element color=" #9370DB" title="La" mass={57}></Element>
          <Element color=" #9370DB" title="La" mass={57}></Element>
          <Element color=" #9370DB" title="La" mass={57}></Element>
          <Element color=" #9370DB" title="La" mass={57}></Element>
          <Element color=" #9370DB" title="La" mass={57}></Element>
          <Element color=" #9370DB" title="La" mass={57}></Element>
          <Element color=" #9370DB" title="La" mass={57}></Element>
        </div>
      </div>
    </>
  );
}

export default App;
