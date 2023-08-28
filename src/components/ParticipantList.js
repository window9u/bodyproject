const ParticipantList = ({ participants }) => {
  return (
    <div>
      {participants.map((participant) => (
        <ParticipantItem key={participant.id} participant={participant} />
      ))}
    </div>
  );
};
export default rticipantList;
