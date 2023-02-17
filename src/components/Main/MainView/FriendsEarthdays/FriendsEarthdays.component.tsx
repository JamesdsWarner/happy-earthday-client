import * as Styled from '../MainView.styles';
import { useState } from 'react';
import DateInput from '@/components/shared/DateInput/DateInput.component';

const FriendsEarthdays = () => {
  const [friends, setFriends] = useState<any[]>([]);
  const [birthday, setBirthday] = useState<Date>(new Date());

  const [newFriend, setNewFriend] = useState({
    name: '',
    birthday: birthday,
    remainingMilestones: [],
  });
  const [friendPending, setFriendPending] = useState(false);

  const showAddFriend = () => {
    setFriendPending(true);
    setNewFriend({
      name: '',
      birthday: new Date(),
      remainingMilestones: [],
    });
  };

  const handleChange = (event: any) => {
    setNewFriend({ ...newFriend, name: event.target.value });
  };

  const submitNewFriend = () => {
    if (!birthday || !newFriend.name) {
      alert('A name and birthday is required to add a friend');
    } else {
      setFriends([...friends, newFriend]);
      setFriendPending(false);
    }
  };

  return (
    <Styled.ViewOptionWrapper>
      <Styled.MainHeader>Friends</Styled.MainHeader>
      <Styled.ViewOptionBodyWrapper>
        {!friends.length && (
          <Styled.NoFriendsMessage>
            Its a bit lonely in here. Why not add some friends?
          </Styled.NoFriendsMessage>
        )}
        {!friendPending && (
          <Styled.AddNewFriend onClick={showAddFriend}>
            Click to add a new friend
          </Styled.AddNewFriend>
        )}
        {friendPending && (
          <Styled.ListItem>
            <Styled.PlusIcon onClick={submitNewFriend}>+</Styled.PlusIcon>
            <Styled.InputFriendName onChange={handleChange} placeholder="Enter name here..." />

            <DateInput
              remainingMilestones={newFriend.remainingMilestones}
              setBirthday={setBirthday}
            />
          </Styled.ListItem>
        )}
        <Styled.FriendsList>
          {friends.map((friend: any) => {
            return (
              <Styled.FriendListItem>
                <Styled.FriendName>{friend.name}</Styled.FriendName>
                <Styled.MilestoneDate>{friend.remainingMilestones[0].date}</Styled.MilestoneDate>

                <Styled.MilestoneDate>
                  {friend.remainingMilestones[0].milestone}
                </Styled.MilestoneDate>
              </Styled.FriendListItem>
            );
          })}
        </Styled.FriendsList>
      </Styled.ViewOptionBodyWrapper>
    </Styled.ViewOptionWrapper>
  );
};

export default FriendsEarthdays;
