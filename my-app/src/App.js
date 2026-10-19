import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import GoodsGallery from './components/GoodsGallery';
import './App.css';

function App() {
    return (
        <div>
            <Header />
            <Content />
            <Image />

            <hr className="divider" />

            <GoodsGallery />
        </div>
    );
}

export default App;