import React, { useState } from "react";

interface IMoodTrackingProps {
  moodHandler: (mood: string) => void;
  mood: string;
}

const MoodTracking: React.FC<IMoodTrackingProps> = ({ moodHandler, mood }) => {
  const [currentMood, setCurrentMood] = useState<string>();

  const onChangeHandler = (mood: string) => {
    setCurrentMood(mood);
    moodHandler(mood);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <label htmlFor="mood" className="mb-2 text-lg font-medium text-gray-700">
        How are you feeling today?
      </label>
      <select
        id="mood"
        className="w-64 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        onChange={(e) => {
          onChangeHandler(e.target.value);
        }}
        value={currentMood || mood}
      >
        <option value="">Select your mood</option>
        <option value="happy">Happy 😊</option>
        <option value="sad">Sad 😢</option>
        <option value="neutral">Neutral 😐</option>
        <option value="anxious">Anxious 😰</option>
        <option value="excited">Excited 😃</option>
        <option value="angry">Angry 😡</option>
      </select>
    </div>
  );
};

export default MoodTracking;
