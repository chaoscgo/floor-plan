import Kitchen from '../Kitchen/Kitchen.jsx';
import HalfBath from '../HalfBath/HalfBath.jsx';
import FullBath from '../FullBath/FullBath.jsx';
import LivingRoom from '../LivingRoom/LivingRoom.jsx';
import Bedroom1 from '../Bedroom1/Bedroom1.jsx';
import Bedroom2 from '../Bedroom2/Bedroom2.jsx';
import Bedroom3 from '../Bedroom3/Bedroom3.jsx';

const FloorPlan = () => {
    return (
        <div>
          <Kitchen />
          <HalfBath />
          <LivingRoom />
          <Bedroom1 />
          <Bedroom2 />
          <FullBath />
          <Bedroom3 />
        </div>
    )
}

export default FloorPlan;