import React from "react";

interface TagSelectorProps {
  tags: string[];
  selectedTags: string[];
  onSelect: (tag: string) => void;
}

const TagSelector: React.FC<TagSelectorProps> = ({
  tags,
  selectedTags,
  onSelect,
}) => {
  return (
    <div className="flex flex-wrap gap-1 items-center">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onSelect(tag)}
          className={`px-3 py-2 rounded-full border hover:shadow-custom-light   fs-400-14-18 ${
            selectedTags.includes(tag)
              ? "bg-brand-soft border-brand-soft text-brand-primary"
              : "bg-white border-neutral-border text-neutral-text-secondary"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagSelector;
