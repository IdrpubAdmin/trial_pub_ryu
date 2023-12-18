import { Link } from "react-router-dom";
import axios from "axios";

function Main(props) {

  return (
    <>
      <div className="main-bg">
        asdf
      </div>

      <div className="container">
        <div className="row">
          {
            props.shoesData.map(item => {
              return (

                <div className="col-md-4 item" key={item.id}>
                  <Link to={"/detail/"+item.id}>
                    <img src={item.img} alt="" />
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                  </Link>
                </div>
              );
            })
          }
        </div>
        <button onClick={()=>{
          axios.get('https://codingapple1.github.io/shop/data2.json').then(
            (result)=> {
              let copyData = [...props.shoesData, ...result.data]
              props.setShoseData(copyData)
            }
          ).catch(()=>{
            console.log('fail')
          })
        }}>더보기</button>
      </div>
    </>
  );
}

export default Main
