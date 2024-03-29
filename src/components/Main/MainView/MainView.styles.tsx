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

export const ViewOptionBodyWrapper = styled.div<{ friends?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65vw;
  height: 80%;
  /* align-items: center; */
  flex-direction: column;
  position: absolute;
  display: flex;
  border-radius: 35px;
  top: ${(props) => (props.friends ? 53 : 50)}%;
  transform: translateY(-50%);
  margin: auto;
  /* gap: 260px; */
  z-index: 999;
  justify-content: center;
  color: #1f1f1f;

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

export const ListItem = styled.div<{ isPast?: boolean; isNext?: boolean }>`
  color: #1f1f1f;
  font-size: 30px;
  display: flex;
  gap: 30px;
  justify-content: space-between;
  text-decoration: ${(props) => (props.isPast ? 'line-through' : 'none')};
  background-color: ${(props) => (props.isNext ? '#bebebe' : 'none')};
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
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

export const InputFriendName = styled(Milestone).attrs({
  as: 'input',
  maxlength: 9,
})`
  background-color: transparent;
  border: none;
  font-size: 20px;
  padding: 5px 10px 5px 10px;
  color: #1f1f1f;
`;

export const FriendName = styled(Milestone)`
  width: 50px;
`;

export const PlusIcon = styled.div`
  border-radius: 50%;
  background-color: #bebebe;
  width: 40px;
  height: 40px;
  text-align: center;
  align-items: center;
  cursor: pointer;
`;

export const NoFriendsMessage = styled.p`
  margin-bottom: 20px;
  font-weight: 800;
  font-size: 20px;
`;

export const AddNewFriend = styled.h3`
  background-color: #bebebe;
  padding: 10px 15px 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const FriendListItem = styled(ListItem)`
  width: 600px;
`;

export const FriendsList = styled.div`
  margin-top: 10px;
  overflow: scroll;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
`;

export const NoFriendsAddFriendWrapper = styled.div`
  /* margin-top: 60px; */
`;
