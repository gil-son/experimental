import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import TopicInfo from '../TopicInfo'; // Certifique-se de criar este componente

const TopicList = () => {
  const topics = ['Tópico 1', 'Tópico 2', 'Tópico 3']; // Adicione seus tópicos aqui
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="d-flex">
      <ListGroup className="mr-3">
        {topics.map((topic, index) => (
          <ListGroup.Item
            key={index}
            action
            onClick={() => handleTopicClick(topic)}
          >
            {topic}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className="ml-3">
        {selectedTopic && <TopicInfo topic={selectedTopic} />}
      </div>
    </div>
  );
};

export default TopicList;
