import React, { useState, useRef } from "react";
import Spinner from "~/components/ui/spinner";

interface ImageUploadProps {
  initialImage?: File | null;
  onImageChange: (file: File | null) => void;
  maxSizeInMB?: number;
  aspectRatio?: "square" | "circle";
  placeholder?: string;
  labels?: {
    uploadLabel?: string;
    uploadSubtext?: string;
    uploadingLabel?: string;
    uploadingSubtext?: string;
    successLabel?: string;
    successSubtext?: string;
  };
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  initialImage = null,
  onImageChange,
  maxSizeInMB = 10,
  aspectRatio = "circle",
  placeholder = "/logo/dp.png",
  labels = {},
}) => {
  const [image, setImage] = useState<File | null>(initialImage);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    uploadLabel = "Upload your profile picture",
    uploadSubtext = "Add a picture to foster trust with potential hires.",
    uploadingLabel = "Uploading",
    uploadingSubtext = "Please wait while your profile picture is being uploaded",
    successLabel = "Profile Picture",
    successSubtext = "Profile picture uploaded successfully"
  } = labels;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size <= maxSizeInMB * 1024 * 1024) {
      setIsUploading(true);
      setTimeout(() => {
        setImage(file);
        onImageChange(file);
        setIsUploading(false);
      }, 1500);
    } else {
      alert(`File size exceeds ${maxSizeInMB}MB`);
    }
  };

  const handleImageRemove = () => {
    setImage(null);
    onImageChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const getContainerClasses = () => {
    const baseClasses =
      "bg-status-warning-light flex items-center justify-center text-xl overflow-hidden";
    return aspectRatio === "circle"
      ? `${baseClasses} rounded-full md:w-32 md:h-32 h-20 w-20 min-w-20`
      : `${baseClasses} rounded-lg w-full aspect-square`;
  };

  return (
    <div className="flex items-center space-x-4">
      <div className={getContainerClasses()}>
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            alt="Uploaded"
            className="w-full h-full object-cover"
          />
        ) : (
          <img src={placeholder} alt="" className="mt-8" />
        )}
      </div>
      <div>
        <div className="flex space-y-1 flex-col">
          <label className="block fs-500-14 text-neutral-black">
            {isUploading 
              ? uploadingLabel 
              : image 
                ? successLabel 
                : uploadLabel
            }
          </label>
          <h2 className="text-neutral-text-secondary fs-400-12">
            {isUploading 
              ? uploadingSubtext
              : image 
                ? successSubtext 
                : uploadSubtext
            }
          </h2>
          <h4 className="text-neutral-text-secondary mb-3 fs-400-12">
            Maximum size {maxSizeInMB}MB.
          </h4>
          <div className="flex items-center gap-2 !mt-3">
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
              disabled={isUploading}
            />
            <label
              htmlFor="image-upload"
              className={` 
              fs-500-14 w-fit px-4 py-2 rounded-full cursor-pointer inline-block transition-colors
              ${
                isUploading
                  ? "bg-neutral-border text-neutral-text-disabled cursor-not-allowed"
                  : image
                  ? "bg-white text-neutral-black border border-neutral-border hover:bg-blue-50"
                  : "bg-brand-secondary text-white hover:bg-blue-700"
              }
            `}
            >
              {isUploading ? (
                <span className="flex items-center justify-center">
                  Uploading
                  <Spinner />
                </span>
              ) : image ? (
                "Replace"
              ) : (
                "Upload"
              )}
            </label>

            {image && !isUploading && (
              <div
                onClick={handleImageRemove}
                className="bg-white text-status-error-pressed border-status-error-pressed border px-4 py-2 rounded-full cursor-pointer hover:bg-destructive-100 inline-block text-sm font-medium transition-colors"
              >
                Remove
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;