import * as Styled from './DateInput.styles';
import getRemainingMilestones from 'helpers/remainingMilestones';
import { useContext } from 'react';
import { StateContext } from '@/context/GlobalState';
interface PropsFunction {
  // setBirthday: (item: any) => void;
  remainingMilestones?: any;
  white?: any;
  landingDate?: any;
}

const DateInput: React.FC<PropsFunction> = ({
  // setBirthday,
  remainingMilestones,
  white,
}) => {
  const { setLandingDate, landingDate } = useContext(StateContext);

  console.log(landingDate.toISOString().substring(0, 10));

  var now = new Date();
  var maxDate = now.toISOString().substring(0, 10);

  const handleBirthdayChange = (event: any) => {
    // setBirthday(new Date(event.target.value));
    getRemainingMilestones(new Date(event.target.value), remainingMilestones);
    setLandingDate(new Date(event.target.value));
  };
  return (
    <>
      <Styled.DateInput
        onChange={(event) => handleBirthdayChange(event)}
        onKeyDown={(e) => e.preventDefault()}
        max={maxDate}
        type="date"
        white={white}
        value={landingDate ? landingDate.toISOString().substring(0, 10) : ''}
      />
    </>
  );
};

export default DateInput;
