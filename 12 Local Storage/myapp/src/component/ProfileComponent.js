import { useLocation } from "react-router-dom";
function ProfileComponent(){
    const location = useLocation();
    return (<>
        <center><h2>Profile</h2>
        Welcome {location.state.email}
        </center>
    </>);
}
export default ProfileComponent;