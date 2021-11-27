import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function CyclingText() {
  const DefaultItems = [
    'front-end',
    'gamedev',
    'design',
    'unit testing',
    'some back-end',
    'accessibility',
  ];

  const [listItems, setList] = useState(DefaultItems);
  const [cycleThroughList, setCycleThroughList] = useState(true);

  function showNextItem() {
    const newList = listItems.slice();
    const pushedElement = newList.pop();
    if (pushedElement) {
      newList.unshift(pushedElement);
    }
    setList(newList);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (cycleThroughList) {
        showNextItem();
      }
    }, 3000);
    return () => clearInterval(interval);
  });

  function handleClick() {
    setCycleThroughList(false);
    showNextItem();
  }

  function getOpacity(index: number) {
    switch (index) {
      case 0:
        return 1;
      case 2:
        return 0.25;
      case 1:
        return 0.5;
      default:
        return 0;
    }
  }

  return (
    <button type="button" className="h-28" onClick={handleClick}>
      <ul>
        <AnimatePresence>
          {listItems.map((item, indexs) => (
            <motion.div
              key={item}
              animate={{
                name: 'Dougie',
                opacity: getOpacity(indexs),
                transition: {},
              }}
              initial={{
                opacity: 0,
                position: 'static',
              }}
              layout
              exit={{
                opacity: 0,
                zIndex: -1,
                y: '1rem',
                position: 'absolute',
              }}
              style={{
                opacity: getOpacity(indexs),
              }}
            >
              <li className="text-left">{item}</li>
            </motion.div>
          ))}
        </AnimatePresence>
      </ul>
    </button>
  );
}

export default CyclingText;
