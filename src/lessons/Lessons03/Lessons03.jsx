import "./style.css"
import Button from "../../components/Button/Button";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import {lionData, zebraData, normalizeName} from "./data"  

function Lessons03 (){
    const isPrimary = false; 
    
    

return ( <div className = "buttons-container">
    <AnimalCard animalData={lionData} animalName={normalizeName(lionData.name)}> 
    <p>Main character</p>
    <h3>Title</h3>
    </AnimalCard>
    <AnimalCard animalData={zebraData} animalName={normalizeName(zebraData.name)}>
    <p>Main character</p>
    </AnimalCard>
    <Button isPrimaryButton />
    <Button buttonName = 'Send data' isPrimaryButton = {isPrimary} />
    </div>
  );
}

export default Lessons03;