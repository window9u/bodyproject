const ParticipantItem = ({ participant }) => {
  return (
    <div className="participant">
      <div className="participant_thumb"></div>
      <div>
        <div className="participant_name">
          <h1>{participant.name}</h1>
          <h2>{participant.description}</h2>
        </div>
        <div className="participant_btn">
          <button>선택</button>
        </div>
        
      </div>
    </div>
  );
};
export default ParticipantItem;
