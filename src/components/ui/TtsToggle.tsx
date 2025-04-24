import React from "react";

interface TtsToggleProps {
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
}

const TtsToggle: React.FC<TtsToggleProps> = ({ enabled, onToggle }) => (
  <label>
    <input
      type="checkbox"
      checked={enabled}
      onChange={e => onToggle(e.target.checked)}
    />
    Enable Text-to-Speech
  </label>
);

export default TtsToggle;
