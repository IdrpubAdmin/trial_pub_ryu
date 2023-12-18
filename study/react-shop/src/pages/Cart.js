import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editAge, editName } from "../store";

function Cart({ currentTab, shoesData }) {

  let dispatch = useDispatch()

  let user = useSelector((state) => {
    return state.user;
  });
  let stock = useSelector((state) => {
    return state.stock;
  });
  let cartData = useSelector((state) => {
    return state.cartData;
  });

  return (
    <div>
      { user.name }({ user.age })의 장바구니
      <button onClick={()=> {
        dispatch(editAge())
      }}>나이 바꾸기</button>
      <Table>
        <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
        </thead>
        <tbody>
        {
          cartData.map((item) =>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>
                  <button onClick={()=> {
                       dispatch(editName())
                  }}>이름 바꾸기</button>
                </td>
              </tr>
          )
        }

        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
