import React from "react";

interface TagSelectorProps {
  tags: string[];
  selectedTags: string[];
  onSelect: (tag: string) => void;
  label?: string;
}

const TagSelector: React.FC<TagSelectorProps> = ({
  tags,
  selectedTags,
  label,
  onSelect,
}) => {
  return (
    <>
      <p className="fs-500-14 text-neutral-black mb-2">{label}</p>
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
    </>
  );
};

export default TagSelector;
