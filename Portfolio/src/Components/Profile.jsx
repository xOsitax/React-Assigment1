import profilePic from "../assets/profilepic.jpg";
import "../Components/Profile.css";
function Profile() {
  let title = "Yessenia";
  let age = 31;
  return (
    <div className="profile-container">
      <img src={profilePic} alt="profile pic" className="img" />
      <h1 className="profile-title">{title}</h1>
      <p className="profile-text">Hello im {age} years old an im a student</p>
    </div>
  );
}
export default Profile;
// This component is responsible for displaying the user's profile information.
