import { useEffect, useState } from 'react'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import Navbar from '../../components/navbar/Navbar'
import './home.scss';
import axios from "axios";


const Home = ({type}) => {
  const [lists,setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGQ4NWFjODI5M2YwZmMwY2Q4Yjk0ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMzg1MDg3NiwiZXhwIjoxNzA0MjgyODc2fQ.T4iGQenfgy3O0Qd5ucpCGo2zimhgnUYIQWFQShvPsbo",
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className='home'>
        <Navbar/>
        <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  )
}

export default Home
