import milestones from 'data/milestones';
import addDays from 'date-fns/addDays';
import isAfter from 'date-fns/isAfter';

const getRemainingMilestones = (birthday: any, remainingMilestones?: any) =>
  milestones.map((milestone: any, i) => {
    const milestoneDate = addDays(birthday, milestone);
    var isPast = isAfter(new Date(), milestoneDate);

    if (!isPast && remainingMilestones) {
      remainingMilestones.push({ milestone: milestone, date: milestoneDate.toDateString() });
    }
  });

export default getRemainingMilestones;
