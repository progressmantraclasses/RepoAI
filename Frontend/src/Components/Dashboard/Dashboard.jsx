import Component1 from '../../AirQuality/Component1.jsx'
import Component2 from '../../AirQuality/Component2.jsx'
import Component3 from '../../AirQuality/Component3.jsx'
import Component4 from '../../AirQuality/Component4.jsx'
import Component5 from '../../AirQuality/Component5.jsx'
import Component6 from '../../AirQuality/Component6.jsx'
import Component7 from  '../../AirQuality/Component7.jsx'
import Component8 from '../../AirQuality/Component8.jsx'


function Dashboard() {
  return (
    <>
    
      <div className="home-row-1 m-5 flex flex-row relative">
        <div className="C1 m-3 rounded-2xl s">
          <Component1 />
        </div>
        <div className="C2 m-3 relative rounded-2xl">
          <Component2 />
        </div>
      </div>
      <div className="home-row-2 flex flex-row relative m-5">
        <div className="C3 m-3 rounded-2xl bg-white">
          <Component3 />
        </div>
        <div className="C4 m-3 rounded-2xl bg-white">
          <Component4 />
        </div>
      </div>
      <div className="home-row-3 flex flex-row relative m-5">
        <div className="C5 m-3 rounded-2xl bg-white">
          <Component5 />
        </div>
        <div className="C6 m-3 rounded-2xl bg-white">
          <Component6 />
        </div>
      </div>
      <div className="home-row-4 flex flex-row relative m-5">
        <div className="C7 m-3 rounded-2xl bg-white">
          <Component7 />
        </div>
      </div>
      <div className="home-row-5 flex flex-row relative m-5">
        <div className="C8 m-3 rounded-2xl bg-white ">
          <Component8 />
        </div>
      </div>
    </>
  );
}

export default Dashboard;