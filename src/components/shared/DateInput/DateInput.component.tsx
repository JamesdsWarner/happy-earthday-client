import * as Styled from './DateInput.styles';
import getRemainingMilestones from 'helpers/remainingMilestones';
interface PropsFunction {
  setBirthday: (item: any) => void;
  remainingMilestones?: any;
  white?: any;
}

const DateInput: React.FC<PropsFunction> = ({ setBirthday, remainingMilestones, white }) => {
  var now = new Date();
  var maxDate = now.toISOString().substring(0, 10);

  const handleBirthdayChange = (event: any) => {
    setBirthday(new Date(event.target.value));
    getRemainingMilestones(new Date(event.target.value), remainingMilestones);
  };
  return (
    <>
      <Styled.DateInput
        onChange={(event) => handleBirthdayChange(event)}
        onKeyDown={(e) => e.preventDefault()}
        max={maxDate}
        type="date"
        white={white}
      />
    </>
  );
};

export default DateInput;
