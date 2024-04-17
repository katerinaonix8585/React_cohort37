import "./style.css";
import catImage from "./cat.jpg";

function ProfileCard (){
    
    return <div className="profile-card">
    
    <img src={catImage} alt="avatar"></img>
    
    <div>
    <div class="row">
      <div class="column">
        <div class="title">Имя и Фамилия:</div>
      </div>
      <div class="column">
        <div>Кот Барс</div>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <div class="title">Род деятельности: </div>
      </div>
      <div class="column">
        <div>Домашний питомец</div>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <div class="title">Хобби:</div>
      </div>
      <div class="column">
        <div>Сон</div>
      </div>
    </div>
    </div>
  
   </div>
}

export default ProfileCard;