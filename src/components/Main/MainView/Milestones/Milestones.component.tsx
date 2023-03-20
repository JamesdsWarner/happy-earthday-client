import * as Styled from '../MainView.styles';
import milestones from '../../../../../data/milestones';
import addDays from 'date-fns/addDays';
import { isAfter } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

import { useState } from 'react';
interface PropsFunction {
  birthday: Date;
}

const Milestones: React.FC<PropsFunction> = ({ birthday }) => {
  let remainingMilestones: any[] = [];

  milestones.map((milestone: any, i) => {
    const milestoneDate = addDays(birthday, milestone);
    var isPast = isAfter(new Date(), milestoneDate);

    if (!isPast) {
      remainingMilestones.push({ milestone: milestone, date: milestoneDate.toDateString() });
    }
  });

  //   console.log(remainingMilestones);

  return (
    <Styled.ViewOptionWrapper>
      <Styled.MainHeader>Milestones</Styled.MainHeader>
      <Styled.ViewOptionBodyWrapper >
        <Styled.YourNextMilestoneHeader>
          Your next milestone is...
        </Styled.YourNextMilestoneHeader>
        <Styled.NextMilestoneHeader>
          {remainingMilestones[0].milestone} days
        </Styled.NextMilestoneHeader>
        <Styled.NextMilestoneSubheading>
          on {remainingMilestones[0].date}
        </Styled.NextMilestoneSubheading>
        <Styled.MilestonesListWrapper>
          {milestones.map((milestone: any) => {
            const milestoneDate = addDays(birthday, milestone);
            var isPast = isAfter(new Date(), milestoneDate);
            var isNext = milestone === remainingMilestones[0].milestone;

            return (
              <Styled.ListItem key={uuidv4()} isNext={isNext} isPast={isPast}>
                <Styled.Milestone>{milestone}</Styled.Milestone>
                <Styled.MilestoneDate>{milestoneDate.toDateString()}</Styled.MilestoneDate>
              </Styled.ListItem>
            );
          })}
        </Styled.MilestonesListWrapper>
      </Styled.ViewOptionBodyWrapper>
    </Styled.ViewOptionWrapper>
  );
};

export default Milestones;
