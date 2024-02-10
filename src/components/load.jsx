import PulseLoader from "react-spinners/PulseLoader";
import { useState ,useEffect } from "react";


function Load(props) {
    
    const [loading,setloading] = useState(false);

    useEffect(()=>{
        setloading(props.run);
    },[props])
    return(<div>
        {
        loading?
            <div className="loading">
                <PulseLoader color="#E6392B" />
            </div>
            :
            ""
    }
    </div>)
}

export default Load;