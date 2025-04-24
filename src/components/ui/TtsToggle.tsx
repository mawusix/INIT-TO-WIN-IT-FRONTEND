import React from "react";

interface TtsToggleProps {
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
}

const TtsToggle: React.FC<TtsToggleProps> = ({ enabled, onToggle }) => (
  <label className="flex items-center cursor-pointer gap-2">
    <span className="text-sm font-medium">Text-to-Speech</span>
    <div className="relative">
      <input
        type="checkbox"
        checked={enabled}
        onChange={(e) => onToggle(e.target.checked)}
        className="sr-only" // Hides the default checkbox
      />
      <div className={`w-11 h-6 rounded-full transition-colors ${
        enabled ? 'bg-blue-500' : 'bg-gray-300'
      }`}>
        <div className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-transform transform ${
          enabled ? 'translate-x-5 bg-white' : 'translate-x-0 bg-gray-100'
        }`} />
      </div>
    </div>
  </label>
);

export default TtsToggle;
