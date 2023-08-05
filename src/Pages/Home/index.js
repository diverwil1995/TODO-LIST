import Edit from './component/Edit'
import List from './component/List'
import './index.css';

const Home = () => {
    return (
        <div className='app'>
            <Edit className='edit'/>
            <List className='list'/>
        </div>
    )

}
export default Home;