import * as Styled from '../MainView.styles';
import milestones from '../../../../../data/milestones';
import addDays from 'date-fns/addDays';
import { isAfter } from 'date-fns';

interface PropsFunction {
  birthday: Date;
}

const Milestones: React.FC<PropsFunction> = ({ birthday }) => {
  return (
    <Styled.ViewOptionWrapper>
      <Styled.MainHeader>Milestones</Styled.MainHeader>
      <Styled.ViewOptionBodyWrapper>
        <Styled.MilestonesListWrapper>
          {milestones.map((milestone) => {
            const milestoneDate = addDays(birthday, milestone);
            var isPast = isAfter(new Date(), milestoneDate);

            return (
              <Styled.MilestonesListItem isPast={isPast}>
                <Styled.Milestone>{milestone}</Styled.Milestone>
                <Styled.MilestoneDate>{milestoneDate.toDateString()}</Styled.MilestoneDate>
              </Styled.MilestonesListItem>
            );
          })}
        </Styled.MilestonesListWrapper>
      </Styled.ViewOptionBodyWrapper>
    </Styled.ViewOptionWrapper>
  );
};

export default Milestones;
