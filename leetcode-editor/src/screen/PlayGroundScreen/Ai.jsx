import "./Ai.scss";
const Ai = () => {
  return (
    <div className="chat-container">
      <h2>Chat with AI</h2>
      <p className="subtitle">Pick any one of the chat mode</p>
      <div className="chat-modes">
        <div className="mode-card">
          <div className="icon">🔍</div>
          <p>Find Mistake</p>
        </div>
        <div className="mode-card">
          <div className="icon">💡</div>
          <p>Give Hints</p>
        </div>
        <div className="mode-card">
          <div className="icon">💬</div>
          <p>Discussion</p>
        </div>
      </div>
      <div className="examples">
        <p className="description">
          Our AI already has knowledge about the problem and your solution. You
          can start asking questions right away.
        </p>
        <br></br>
        <p className="description">Examples:</p>
        <br></br>
        <p>What are the pre-requisites to solve the problem?</p>
        <p>Provide me hints to solve the problem?</p>
        <p>Help me debug my code</p>
        <p>Help me understand the problem</p>
        <p>Help me understand the solution</p>
      </div>
    </div>
  );
};
export default Ai;