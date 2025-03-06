import ouiArrowLeft from '../../assets/icons/ouiArrowLeft.svg';
import ouiArrowRight from '../../assets/icons/ouiArrowRight.svg';

type Props = {
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
  maxNumber: number;
  activeNumber: number;
}

export const Pagination: React.FC<Props> = ({ setActiveItem, maxNumber, activeNumber }) => {
  const handleLeftClick = () => {
    setActiveItem(prev => {
      if (prev === 0) {
        return maxNumber;
      } else {
        return prev - 1;
      }
    })
  };

  const handleRightClick = () => {
    setActiveItem(prev => {
      if (prev === maxNumber) {
        return 0;
      } else {
        return prev + 1;
      }
    })
  };

  return (
    <div className='pagination'>
      <img src={ouiArrowLeft} alt='Arrow Left' onClick={handleLeftClick} />
      <p className='headline-5'>{`${activeNumber + 1} / ${maxNumber + 1}`}</p>
      <img src={ouiArrowRight} alt='Arrow Right' onClick={handleRightClick} />
    </div>
  )
};
