import { useState } from "react";

const Home = () => {

    const [pics, setPic] = useState([
        { title: 'Anyone', body: 'Your Choice', author: 'seventeen', id: 1},
        { title: 'Tiger', body: 'Tiger', author: 'hoshi', id: 2},
        { title: 'Good to Me', body: 'You Make My Dawn', author: 'seventeen', id: 3}
    ]);

    return (       
        <div className="menu">
            <div className="blocks">
                <a href="/">Works </a>
            </div>
            <div className="blocks">
                <a href="/">Projects </a>
            </div>
            <div className="blocks">
                <a href="/">Commision info </a>
            </div>
        </div>
     );
}
 
export default Home;