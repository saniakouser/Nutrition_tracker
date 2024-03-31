import axios from "axios";
import react,{useEffect,useState} from 'react';
import img from "../../Images/graph.jpg";
import img2 from "../../Images/progress.jpg";
export default function Dashboard(){
    const [meal,setMeal]=useState('');
    const[carbo,setCarbo]=useState('');
    const[calorie,setCalorie]=useState('');
    const[Protein,setProtein]=useState('');
    const[fat,setFat]=useState('');
    const [Lunch,setLunch]=useState([]);
    const [Breakfast,setBreakfast]=useState([]);
    const [Dinner,setDinner]=useState([]);
    const[edit,setEdit]=useState(-1);
    const[edit1,setEdit1]=useState(-1);
    const[edit2,setEdit2]=useState(-1);
    useEffect(()=>{
        axios.get('http://localhost:3000/Lunch')
        .then(res=>{
            console.log(res)
            setLunch(res.data)})
        .catch(er=>console.log(er));
        axios.get('http://localhost:3000/Breakfast')
        .then(res=>setBreakfast(res.data))
        .catch(er=>console.log(er));
        axios.get('http://localhost:3000/Dinner')
        .then(res=>setDinner(res.data))
        .catch(er=>console.log(er));
    },[]);
    // useEffect(()=>{
    //      axios.get('http://localhost:3000/Breakfast')
    //     .then(res=>setBreakfast(res.data))
    //     .catch(er=>console.log(er));
    // },[]);
    // useEffect(()=>{
    //     axios.get('http://localhost:3000/Dinner')
    //     .then(res=>setDinner(res.data))
    //     .catch(er=>console.log(er));
    // },[]);
    const HandleEdit = () => {
        axios.put(`http://localhost:3000/Breakfast/${edit}`, {
            Meal: meal,
            Carbohydrates: carbo,
            Calorie: calorie,
            Proteins: Protein,
            Fat: fat
        })
        .then(res => {
            const updatedData = res.data.Breakfast;
    
            setMeal(updatedData.Meal);
            setCarbo(updatedData.Carbohydrates);
            setCalorie(updatedData.Calorie);
            setProtein(updatedData.Proteins);
            setFat(updatedData.Fat);
            setEdit(-1);
        })
        .catch(err => {
            console.log(err);
        });
        window.location.reload();
    };
    const HandleEdit1 = () => {
        axios.put(`http://localhost:3000/Lunch/${edit1}`, {
            Meal: meal,
            Carbohydrates: carbo,
            Calorie: calorie,
            Proteins: Protein,
            Fat: fat
        })
        .then(res => {
            const updatedData = res.data.Lunch;
    
            setMeal(updatedData.Meal);
            setCarbo(updatedData.Carbohydrates);
            setCalorie(updatedData.Calorie);
            setProtein(updatedData.Proteins);
            setFat(updatedData.Fat);
            setEdit(-1);
        })
        .catch(err => {
            console.log(err);
        });
        window.location.reload();
    };
    const HandleEdit2 = () => {
        axios.put(`http://localhost:3000/Dinner/${edit2}`, {
            Meal: meal,
            Carbohydrates: carbo,
            Calorie: calorie,
            Proteins: Protein,
            Fat: fat
        })
        .then(res => {
            const updatedData = res.data.Dinner;
    
            setMeal(updatedData.Meal);
            setCarbo(updatedData.Carbohydrates);
            setCalorie(updatedData.Calorie);
            setProtein(updatedData.Proteins);
            setFat(updatedData.Fat);
            setEdit(-1);
        })
        .catch(err => {
            console.log(err);
        });
        window.location.reload();
    };
    
    return(
        <div className="dashboard">
        <div className="nutrition-section">
            <div className="Breakfast">
                <h1>Breakfast:</h1>
                <table>
                <thead>
                   <tr>
                    <th>Meal</th>
                    <th>Carbohydrates</th>
                    <th>Calorie</th>
                    <th>Proteins</th>
                    <th>Fat</th>
                   </tr>
                </thead>
                <tbody>
                {
                    Breakfast.map((x,id)=>(
                    x.id===edit?    
                   <tr key={id}>
                      <td><input type="text" value={meal} onChange={e=>setMeal(e.target.value)}/></td>
                      <td><input type="text" value={carbo} onChange={e=>setCarbo(e.target.value)}/></td>
                      <td><input type="text" value={calorie} onChange={e=>setCalorie(e.target.value)}/></td>
                      <td><input type="text" value={Protein} onChange={e=>setProtein(e.target.value)}/></td>
                      <td><input type="text" value={fat} onChange={e=>setFat(e.target.value)}/></td>
                      <td><button type="submit" onClick={HandleEdit}>Update</button></td>
                   </tr>
                   :<tr key={id}>
                      <td>{x.Meal}</td>
                      <td>{x.Carbohydrates}</td>
                      <td>{x.Calorie}</td>
                      <td>{x.Proteins}</td>
                      <td>{x.Fat}</td>
                      <td><button type="submit" onClick={e=>setEdit(x.id)}>Edit</button></td>
                   </tr>
                    ))
                }  
                </tbody>
                </table>
            </div>
            <div className="Lunch">
                <h1>Lunch:</h1>
                <table>
                <thead>
                   <tr>
                    <th>Meal</th>
                    <th>Carbohydrates</th>
                    <th>Calorie</th>
                    <th>Proteins</th>
                    <th>Fat</th>
                   </tr>
                </thead>
                <tbody>
                     {
                        Lunch.map((x,id)=>(
                    x.id===edit1?    
                   <tr key={id}>
                      <td><input type="text" value={meal} onChange={e=>setMeal(e.target.value)}/></td>
                      <td><input type="text" value={carbo} onChange={e=>setCarbo(e.target.value)}/></td>
                      <td><input type="text" value={calorie} onChange={e=>setCalorie(e.target.value)}/></td>
                      <td><input type="text" value={Protein} onChange={e=>setProtein(e.target.value)}/></td>
                      <td><input type="text" value={fat} onChange={e=>setFat(e.target.value)}/></td>
                      <td><button type="submit" onClick={HandleEdit1}>Update</button></td>
                   </tr>
                   :<tr key={id}>
                      <td>{x.Meal}</td>
                      <td>{x.Carbohydrates}</td>
                      <td>{x.Calorie}</td>
                      <td>{x.Proteins}</td>
                      <td>{x.Fat}</td>
                      <td><button type="submit" onClick={e=>setEdit1(x.id)}>Edit</button></td>
                   </tr>
                        ))
                     }
                </tbody>   
                </table>
            </div>
            <div className="Dinner">
                <h1>Dinner:</h1>
                <table>
                <thead>
                   <tr>
                    <th>Meal</th>
                    <th>Carbohydrates</th>
                    <th>Calori</th>
                    <th>Proteins</th>
                    <th>Fat</th>
                   </tr>
                </thead>
                <tbody>   
                   {
                    Dinner.map((x,id)=>(
                        x.id===edit2?    
                   <tr key={id}>
                      <td><input type="text" value={meal} onChange={e=>setMeal(e.target.value)}/></td>
                      <td><input type="text" value={carbo} onChange={e=>setCarbo(e.target.value)}/></td>
                      <td><input type="text" value={calorie} onChange={e=>setCalorie(e.target.value)}/></td>
                      <td><input type="text" value={Protein} onChange={e=>setProtein(e.target.value)}/></td>
                      <td><input type="text" value={fat} onChange={e=>setFat(e.target.value)}/></td>
                      <td><button type="submit" onClick={HandleEdit2}>Update</button></td>
                   </tr>
                   :<tr key={id}>
                      <td>{x.Meal}</td>
                      <td>{x.Carbohydrates}</td>
                      <td>{x.Calorie}</td>
                      <td>{x.Proteins}</td>
                      <td>{x.Fat}</td>
                      <td><button type="submit" onClick={e=>setEdit2(x.id)}>Edit</button></td>
                   </tr>
                    ))
                   }
                </tbody>
                </table>
            </div>
        </div>
        <div className="Progress-Report">
              <div className="graph">
              <div>
              <h3>Total Intake</h3>
              </div>
              <img src={img}/>
              </div>
              <div className="Stats">
                <div className="Stats1">
                <div id="card">
                    <h3>Total Carbohydrates</h3>
                    <span>400g</span>
                </div>
                <div id="card">
                    <h3>Total Calorie</h3>
                    <span>430g</span>
                </div>
                </div>
                <div className="Stats2">
                <div id="card">
                    <h3>Total Proteins</h3>
                    <span>250g</span>
                </div>
                <div id="card">
                    <h3>Total fats</h3>
                    <span>200g</span>
                </div>
                </div>
              </div>
              <div id="progress">
                <h3>Your Progress Overall</h3>
                <img src={img2}></img>
              </div>
        </div>
        </div>

    )
}