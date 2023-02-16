import styled from 'styled-components';

export const MainViewWrapper = styled.div`
  position: relative;
`;

export const ViewOptionWrapper = styled.div`
  width: 65vw;
  height: 90%;
  left: 5vw;
  background-color: #f2f2f2;
  /* align-items: center; */
  flex-direction: column;
  position: absolute;
  display: flex;
  border-radius: 35px;
  top: 50%;
  transform: translateY(-50%);
  margin: auto;
  gap: 260px;
  z-index: 999;
`;

export const MainHeader = styled.h2`
  color: #1f1f1f;
  padding-left: 50px;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 40px;
  width: 100%;
  border-bottom: 2px solid #dcdcdc;
`;

export const ViewOptionBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65vw;
  height: 90%;
  /* align-items: center; */
  flex-direction: column;
  position: absolute;
  display: flex;
  border-radius: 35px;
  top: 50%;
  transform: translateY(-50%);
  margin: auto;
  gap: 260px;
  z-index: 999;
  justify-content: center;

  > * {
    &:first-child {
      top: 42%;
    }
  }
`;

export const ViewOptionAfterTimer = styled.div<{ timerFormat: string }>`
  margin-top: ${(props) => (props.timerFormat === 'Days' ? '11' : 13)}%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const TimerOptions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

export const TimerOption = styled.p<{ timerFormat: string }>`
  color: #1f1f1f;
  font-weight: 600;
  font-size: 20px;
  padding: 10px 15px 10px 15px;
  background-color: ${(props) => (props.children === props.timerFormat ? '#bebebe' : 'none')};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #${(props) => (props.children !== props.timerFormat ? 'dddddd' : 'bebebe')};
  }
`;

export const MilestonesWrapper = styled.div`
  justify-self: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 7px;
  text-align: center;
`;

export const MilestonesListWrapper = styled.div`
  margin-top: 40px;
`;

export const MilestonesListItem = styled.div<{ isPast: boolean }>`
  color: #1f1f1f;
  font-size: 30px;
  display: flex;
  gap: 130px;
  justify-content: space-between;
  text-decoration: ${(props) => (props.isPast ? 'line-through' : 'none')};
`;

export const Milestone = styled.p`
  font-weight: 600;
`;

export const MilestoneDate = styled.p``;

export const YourNextMilestoneHeader = styled.h2`
  color: #1f1f1f;
`;

export const NextMilestoneHeader = styled.h2`
  color: #1f1f1f;
  font-size: 50px;
  font-weight: 900;
`;

export const NextMilestoneSubheading = styled.h2`
  color: #1f1f1f;
`;
