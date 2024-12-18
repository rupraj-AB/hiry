import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import Stepper from "~/components/ui/stepper";
import SearchIcon from "~/assets/icons/LinkIcon";
import Colors from "~/constants/colors";
import TagSelector from "~/components/ui/TagSelector";
import Dropdown from "~/components/ui/dropdown";
import MyForm from "./_selectUseCase";
import Upload from "~/components/ui/Upload";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

import TextArea from "~/components/ui/textArea";
import Accordion from "~/components/ui/accordion";
import ImageUpload from "~/components/ui/imageUploader";
import EnvelopIcon from "~/assets/icons/EnvelopIcon";

const Index = () => {
  const steps = [
    { text: "Step 1", icon: <SearchIcon color={Colors.status.info.dark} /> },
    { text: "Step 2", icon: <SearchIcon color={Colors.status.info.dark} /> },
    { text: "Step 3", icon: <SearchIcon color={Colors.status.info.dark} /> },
  ];
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [CompanyLogo, setCompanyLogo] = useState<File | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagSelect = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl pb-[300px]">
      <h1 className="text-2xl font-bold mb-6 text-brand-primary">
        Component Showcase
      </h1>
      {/* Input Component States */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Input States</h2>
        <div className="space-y-4">
          <Input icon={<EnvelopIcon/>} name="default" label="Default" placeholder="Default state" />
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
        <div className="flex gap-10 sm:flex-row flex-col">
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
          label="How did you hear about us?"
          selectedTags={selectedTags}
          onSelect={handleTagSelect}
        />
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Dropdown Selector</h2>
        <MyForm />
      </div>
      {/* Upload Component */}
      <div className="mb-8 space-y-4">
        <h2 className="text-xl font-semibold mb-4">Upload Component</h2>
        <div className="">
          <Upload maxSize={10} accept="video/*" fileType="video" />
        </div>
      </div>
      {/* TextArea Component */}
      <div className="mb-8 space-y-4">
        <h2 className="text-xl font-semibold mb-4">TextArea Component</h2>
        <div className=" space-y-4">
          <TextArea
            label="Description"
            placeholder="Enter your description"
            value=""
            onChange={(value) => console.log(value)}
            maxCharacters={200}
          />
          <TextArea
            label="Message with Error"
            placeholder="Type your message"
            error="This field is required"
            value="Some invalid text"
            onChange={(value) => console.log(value)}
          />
          <TextArea
            label="With Different Rows"
            placeholder="This textarea "
            value=""
            onChange={(value) => console.log(value)}
            minRows={3}
            maxRows={6}
            maxCharacters={150}
          />
        </div>
      </div>
      {/* Modal */}

      <div className="my-8">
        <ImageUpload
          onImageChange={() => {}}
          labels={{
            uploadLabel: "Choose Profile Picture",
            uploadSubtext: "Upload an image to personalize your profile",
            uploadingLabel: "Processing",
            uploadingSubtext: "Your image is being uploaded",
            successLabel: "Image Uploaded",
            successSubtext: "Your profile picture is set",
          }}
        />
      </div>


      <h2 className="text-xl font-semibold my-4">Modal Component</h2>
      <Dialog>
        <DialogTrigger>
          <Button>Open Modal</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <h2 className="text-xl font-semibold mb-4 mt-12">Accordion Component</h2>
      <Accordion
        header="Introduction Checklist"
        content={
          <div>
            <p>
              Feel free to tell us about any relevant job experience you've had.
              We recommend you to cover topics like:
            </p>
            <ul>
              <li>
                Share your core skills, main areas of expertise, and any
                standout experience relevant to your work.
              </li>
              <li>
                Highlight what makes you unique—this could be a skill, a
                quality, or your approach to work.
              </li>
              <li>
                Talk about your working process, communication style, and how
                you handle feedback or collaboration.
              </li>
              
            </ul>

            <ul>
              <li>
                Share your core skills, main areas of expertise, and any
                standout experience relevant to your work.
              </li>
              <li>
                Highlight what makes you unique—this could be a skill, a
                quality, or your approach to work.
              </li>
              <li>
                Talk about your working process, communication style, and how
                you handle feedback or collaboration.
              </li>
              
            </ul>

            <ul>
              <li>
                Share your core skills, main areas of expertise, and any
                standout experience relevant to your work.
              </li>
              <li>
                Highlight what makes you unique—this could be a skill, a
                quality, or your approach to work.
              </li>
              <li>
                Talk about your working process, communication style, and how
                you handle feedback or collaboration.
              </li>
              
            </ul>
          </div>
        }
      />
    </div>
  );
};

export default Index;
