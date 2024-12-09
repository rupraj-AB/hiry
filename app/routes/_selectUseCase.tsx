import React, { useState } from "react";
import LinkIcon from "~/assets/icons/LinkIcon";
import Dropdown from "~/components/ui/dropdown";

const MyForm = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [searchableSkill, setSearchableSkill] = useState(null);

  const handleSkillsChange = (options: any) => {
    setSelectedSkills(options);
  };

  const handleSkillChange = (option: any) => {
    setSelectedSkill(option);
  };

  const handleSearchableSkillChange = (option: any) => {
    setSearchableSkill(option);
  };

  const skillOptions = [
    { value: "javascript", label: "JavaScript" },
    { value: "react", label: "React" },
    { value: "nodejs", label: "Node.js" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "csharp", label: "C#" },
    { value: "html", label: "HTML" },
    { value: "c++", label: "c++" },
    { value: "express", label: "Express" },
    { value: "next", label: "Next" },
  ];

  console.log(selectedSkills, "selected skills");

  return (
    <div className="space-y-4">
      <Dropdown
        label="Select Skills"
        placeholder="Select one or more skills"
        options={skillOptions}
        isMulti
        icon={<LinkIcon />}
        value={selectedSkills.map((option: any) => option.value)}
        onChange={handleSkillsChange}
      />

      <Dropdown
        label="Select a Skill"
        placeholder="Select a skill"
        options={skillOptions}
        value={selectedSkill}
        onChange={handleSkillChange}
      />

      <Dropdown
        label="Searchable Skill Select"
        placeholder="Search and select a skill"
        options={skillOptions}
        searchable
        value={searchableSkill}
        onChange={handleSearchableSkillChange}
      />
    </div>
  );
};

export default MyForm;
