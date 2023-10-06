import FbImageLibrary from 'react-fb-image-grid'
import Button from './components/Button'
import Facebook from './components/Facebook'
import './App.css'

function App(){
  const images = [
    'https://hips.hearstapps.com/hmg-prod/images/p90475606-highres-rolls-royce-phantom-1677268219.jpg?crop=0.663xw:0.496xh;0.136xw,0.372xh&resize=1200:*',
    'https://i.insider.com/56c8b512dd0895906d8b468a?width=1200&format=jpeg',
    'https://ceoworld.biz/wp-content/uploads/2019/06/La-Voiture-Noire-BUGATTI.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfu3s1QY_mGIFhdsXhzR2gWW-S50_HnE_W1Q&usqp=CAU',
    'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/listicle/hero_image/2020-Bugatti%20Centodieci-1001x565-%282%29.jpg'
  ]

    return (
      <div className="App">
        <header className="App-header">

          <Facebook title='Here is my luxurious car collection' username='Shaheer Ahmed' profilePic='https://t3.ftcdn.net/jpg/03/81/30/16/360_F_381301638_mo8XtnvD4VtKWjNITYhwL3ITRxF4ldaO.jpg'/>

          <div style={{width:800}} >
            <FbImageLibrary 
             images={images}
             />
          </div>
   
          <Button/>

        </header>
      </div>
    );
  }




export default App;
