import FadeInOut from 'src/FadeInOut';
import MainCanvas from './MainCanvas';

function Showcase() {
  return (
    <FadeInOut>
      <FadeInOut>
        <MainCanvas />
      </FadeInOut>
    </FadeInOut>
  );
}

export default Showcase;
