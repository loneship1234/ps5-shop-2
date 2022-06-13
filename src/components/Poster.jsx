import React,{useState} from 'react'
import {BsCheck2Circle} from 'react-icons/bs'
import {ColorExtractor} from 'react-color-extractor';
function Poster({img,textbottom}) {
  const [firstColor, setFirstColor] = useState('');
  const [secondColor, setSecondColor] = useState('');
// console.log(firstColor);
  return (
    <React.Fragment>
      <ColorExtractor maxColors={128} getColors={colors => (console.log(colors),setFirstColor(colors[1]),setSecondColor(colors[0]))}>
      <img src={require('../img/'+img+'.jpg')} className='w-full h-full rounded-[30px]' alt="" />
</ColorExtractor>
      <p style={{bottom:`${textbottom}em`}} className={'  text-white relative rotate-[270deg] right-[11em] text-[10px] uppercase'}>{img}</p>
      <button style={{ background: `linear-gradient(260deg,${firstColor}, ${secondColor})` }} className='relative bottom-16 bg-cover overflow-hidden left-[55px] border-2 flex items-center p-2 px-4 rounded-xl border-none  active:scale-105 transition-all'> <BsCheck2Circle className='-ml-2 w-8 h-5 mt-1'/>recomanded</button>
    </React.Fragment>
  )
}

export default Poster