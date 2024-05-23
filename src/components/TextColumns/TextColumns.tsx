import React from 'react';
import './TextColumns.css';

export type TextColumnsData = [string, string][];

interface TextColumnsParams {
  data: TextColumnsData;
}

const TextColumns: React.FC<TextColumnsParams> = ({ data }) => {
  return (
    <div className="text-columns">
      {data.map(([label, text]) => (
        <div className="text-row">
          <div className="text-row-item text-row-item-label">
            <strong>{label}</strong>
          </div>
          <div className="text-row-item">
            <span>{text}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TextColumns;
