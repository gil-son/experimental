import React from 'react';

const TopicInfo = ({ topic }) => {
  const topicInfoMap = {
    'Tópico 1': 'Informações sobre o Tópico 1...',
    'Tópico 2': 'Informações sobre o Tópico 2...',
    'Tópico 3': 'Informações sobre o Tópico 3...',
  };

  const topicInfo = topicInfoMap[topic];

  return (
    <div>
      <h2>{topic}</h2>
      <p>{topicInfo}</p>
    </div>
  );
};

export default TopicInfo;

