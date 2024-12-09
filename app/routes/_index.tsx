import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import Stepper from "~/components/ui/stepper";
import SearchIcon from "~/assets/icons/LinkIcon";
import Colors from "~/constants/colors";
import TagSelector from "~/components/ui/TagSelector";
import Dropdown from "~/components/ui/dropdown";

const Index = () => {
  const steps = [
    { text: "Step 1", icon: <SearchIcon color={Colors.status.info.dark} /> },
    { text: "Step 2", icon: <SearchIcon color={Colors.status.info.dark} /> },
    { text: "Step 3", icon: <SearchIcon color={Colors.status.info.dark} /> },
  ];

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagSelect = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl ">
      <h1 className="text-2xl font-bold mb-6 text-brand-primary">
        Component Showcase
      </h1>

      {/* Input Component States */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Input States</h2>
        <div className="space-y-4">
          <Input name="default" label="Default" placeholder="Default state" />
          <Input name="focused" label="Focused" placeholder="Focused state" />
          <Input
            name="error"
            label="With Error"
            placeholder="Error state"
            error="This field is required"
          />
        </div>
      </div>

      {/* Button Component States */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Button States</h2>
        <Button variant="primary" className="mr-4">
          Primary
        </Button>
        <Button variant="secondary" className="mr-4">
          Secondary
        </Button>
        <Button variant="primary" disabled>
          Disabled
        </Button>
      </div>

      {/* Stepper Component States */}
      <div className="mb-8 space-y-4">
        <h2 className="text-xl font-semibold mb-4">Stepper States</h2>
        <div className="flex gap-10">
          <Stepper steps={steps} activeStep={0} />
          <Stepper steps={steps} activeStep={1} />
          <Stepper steps={steps} activeStep={2} />
        </div>
      </div>

      {/* Tag Selector Component */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Tag Selector</h2>
        <TagSelector
          tags={[
            "Job Posts",
            "Recruiter / Outreach",
            "Affiliate / Friend",
            "Ads / Marketing",
            "Matchmaking",
          ]}
          selectedTags={selectedTags}
          onSelect={handleTagSelect}
        />
      </div>

      {/* dropdown */}

      <div className="mb-48">
        <h2 className="text-xl font-semibold mb-4">Dropdown Selector</h2>
        <Dropdown
          label="Industry"
          value={""}
          onChange={() => {}}
          placeholder="Select industry"
          name="industry"
          options={[
            { value: "technology", label: "Technology" },
            { value: "healthcare", label: "Healthcare" },
            { value: "finance", label: "Finance" },
          ]}
        />
      </div>
    </div>
  );
};

export default Index;
