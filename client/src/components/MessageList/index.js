import React from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

const MessageList = ({ username, messages }) => {
  if (!messages || !messages.length) {
    return <h3 style={{ color: "white" }} className="text-center m-5">No Messages In Your Inbox</h3>;
  }

  return (
    <div>
      <h3>{username}'s Messages</h3>
      {messages &&
        messages.map((message) => (
          <div key={message._id} className="card mb-3">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{message.messageTitle}</Card.Title>
                <Card.Text>{message.messageText}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  {message.username} messaged on {message.createdAt}
                </ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Reply</Card.Link>
                <Card.Link href="#">Delete</Card.Link>
              </Card.Body>
            </Card>
          </div>
        ))}
    </div>
  );
};

export default MessageList;
