import * as Styled from '../MainView.styles';
import { useState, useEffect } from 'react';
import DateInput from '@/components/shared/DateInput/DateInput.component';
import { touchStartEvent } from 'tsparticles-engine';
import toast from 'react-hot-toast';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import getRemainingMilestones from 'helpers/remainingMilestones';

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

  // console.log(birthday);

  const handleChange = (event: any) => {
    setNewFriend({ ...newFriend, name: event.target.value });
  };

  const getFriends = async () => {
    try {
      const { data } = await axios.get('/api/birthday/get_all_birthdays');
      console.log(data);
      setFriends(data);
      // data.map((friend: any) => {
      //   console.log(friend);
      //   var remainingMilestones: any[] = [];
      //   getRemainingMilestones(new Date(friend.birthday), remainingMilestones);
      //   setFriends([...friends, { name: friend.name, remainingMilestones: remainingMilestones }]);
      //   console.log(friends);
      // });
    } catch (err) {
      console.log(err);
    }
  };

  const submitNewFriend = async () => {
    if (!birthday || !newFriend.name) {
      toast.error('A name and birthday is required to add a friend');
    } else if (newFriend.name.length > 8) {
      alert('Name cannot be longer than 8 characters');
    } else {
      try {
        const { data } = await axios.post(
          'http://localhost:8000/api/birthday/create_birthday',
          {
            name: newFriend.name,
            birthday: birthday,
          },
          { withCredentials: true }
        );
        setFriends([...friends, { ...data, remainingMilestones: newFriend.remainingMilestones }]);
        setFriendPending(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    getFriends();
  }, []);

  return (
    <Styled.ViewOptionWrapper>
      <Styled.MainHeader>Friends</Styled.MainHeader>
      <Styled.ViewOptionBodyWrapper friends>
        {/* <Styled.NoFriendsAddFriendWrapper> */}
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
        {/* </Styled.NoFriendsAddFriendWrapper> */}
        <Styled.FriendsList>
          {friends.map((friend: any) => {
            var remainingMilestones: any[] = [];
            getRemainingMilestones(new Date(friend.birthday), remainingMilestones);

            return (
              <Styled.FriendListItem key={uuidv4()}>
                <Styled.FriendName>{friend.name}</Styled.FriendName>
                <Styled.MilestoneDate>{remainingMilestones[0].date}</Styled.MilestoneDate>

                <Styled.MilestoneDate>{remainingMilestones[0].milestone}</Styled.MilestoneDate>
              </Styled.FriendListItem>
            );
          })}
        </Styled.FriendsList>
      </Styled.ViewOptionBodyWrapper>
    </Styled.ViewOptionWrapper>
  );
};

export default FriendsEarthdays;
