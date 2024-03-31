import react from "react";
export default function Profile(){
    var days=10;
    var missed=12;
    return(
        <div className="UserProfile">
             <div className="UserDetail">
                <div className="UserProfileDetails">
                <div className="Image"></div>
                <div className="details">
                    <span id="name">Mohd Tauheed</span>
                    <span id="gmail">sheikhtauheed@gmail.com</span>
                    <span id="weight ">Body Weight: 65kg</span>
                    <span id="weight">Height: 150cm</span>
                    <button>Edit Profile</button>
                </div>
                </div>
                <div className="Business-card">
                     <div className="card1">
                         <span>Total Days</span>
                         <span>{days}</span>
                     </div>
                     <div className="card1">
                        <span>Total Calories</span>
                        <span>7666 mg</span>
                     </div>
                     <div className="daysmissed">
                        <span>Missed days</span>
                        <span>{missed}</span>
                     </div>
                </div>
                <div className="subs">
                    <div id="x"><span id="subscrib">Subscription Plan</span><span id="arrow">▼</span></div>
                    <div id="x"><span id="passchange">Change Password</span><span id="arrow">▼</span></div>
                </div>
             </div>
        </div>
    )
}