import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import SearchIcon from "~/assets/icons/LinkIcon";

export const meta: MetaFunction = () => {
  return [
    { title: "Component Testing" },
    { name: "description", content: "Testing all component states" },
  ];
};

export default function Index() {
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="p-8 container mx-auto">
      <h1 className="text-2xl font-bold mb-8">Component Testing</h1>

      {/* Button Components Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Button Components</h2>
        <div className="space-y-4">
          <div className="flex gap-4 items-center">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="link">Link Style</Button>
          </div>

          <div className="flex gap-4 items-center max-w-sm">
            <Button fullWidth disabled>
              Disabled
            </Button>
          </div>
          <div className="flex gap-4 items-center max-w-sm">
            <Button icon={<SearchIcon />} fullWidth variant="secondary">
              Login
            </Button>
          </div>

          {/* <div className="flex gap-4 items-center">
            <Button icon={<SearchIcon />}>Left Icon</Button>
            <Button icon={<SearchIcon />} iconPosition="right">Right Icon</Button>
          </div> */}

          <div className="w-full max-w-sm">
            <Button fullWidth>Full Width Button</Button>
          </div>
        </div>
      </section>

      {/* Input Components Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Input Components</h2>
        <div className="space-y-4 max-w-md">
          <Input
            label="Basic Input"
            value={inputValue}
            onChange={setInputValue}
            placeholder="Type something..."
          />

          <Input
            label="Required Input with Error"
            value={inputValue}
            onChange={setInputValue}
            required
            error="This field is required"
            placeholder="Required field"
          />

          <Input
            label="Search Input with Icon"
            value={searchValue}
            onChange={setSearchValue}
            icon={<SearchIcon />}
            placeholder="Search..."
          />

          <Input
            label="Clearable Input"
            value={searchValue}
            onChange={setSearchValue}
            clearable
            placeholder="Type to see clear button..."
          />

          <Input
            label="Input with Info"
            value={inputValue}
            onChange={setInputValue}
            info="This is a helpful information message"
            placeholder="Type something..."
          />
        </div>
      </section>
    </div>
  );
}
