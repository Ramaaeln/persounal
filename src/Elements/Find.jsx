import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Bamboo from '../assets/bottle/bambo.png';
import Coffe from '../assets/bottle/coffe.png';
import Grass from '../assets/bottle/lemon grass.png';
import Wood from '../assets/bottle/kayu manis.png';

const image = [
  { id: '1', image: `${Bamboo}` },
  { id: '2', image: `${Coffe}` },
  { id: '3', image: `${Grass}` },
  { id: '4', image: `${Wood}` },
  { id: '5', image: `${Grass}` },
  { id: '6', image: `${Coffe}` },
  { id: '7', image: `${Bamboo}` },
];

export default function Find({ Bottle }) {
  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const startDragging = (e) => {
    isDown = true;
    scrollRef.current.classList.add('cursor-grabbing');
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const stopDragging = () => {
    isDown = false;
    scrollRef.current.classList.remove('cursor-grabbing');
  };

  const handleDragging = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') current.scrollLeft -= 300;
    else current.scrollLeft += 300;
  };

  return (
    <div className="h-screen w-full relative">
      <div className="flex justify-center mt-10">
        <h1 className="text-black text-4xl font-bold">FIND YOUR PARFUMES</h1>
      </div>

      {/* Button Kiri */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Button Kanan */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex gap-10 mt-20 mx-10 w-1/2 justify-center overflow-x-auto px-4 cursor-grab"
        onMouseDown={startDragging}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={handleDragging}
      >
        {image.map((data, index) => (
          <img key={index} src={data.image} alt="" className="h-72 w-44 object-cover rounded-xl" />
        ))}
      </div>
    </div>
  );
}
