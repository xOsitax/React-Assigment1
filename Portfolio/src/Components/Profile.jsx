import profilePic from "../assets/profilepic.jpg";
import "../Components/Profile.css";
function Profile() {
  let title = "Yessenia";
  let age = 31;
  let isStudent = true;
  return (
    <div className="profile-container">
      <img src={profilePic} alt="profile pic" className="img" />
      <h1 className="profile-title">{title}</h1>
      <p className="profile-text">
        Hello im {age} years old and I{""}
        {isStudent ? "am a student" : "am not a student"}
      </p>
    </div>
  );
}
export default Profile;
// This component is responsible for displaying the user's profile information.
