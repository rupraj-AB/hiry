import React, { useState, useRef, useEffect } from "react";
import { FileIcon, UploadIcon } from "lucide-react";
import CrossIcon from "~/assets/icons/CrossIcon";
import TrashIcon from "~/assets/icons/TrashIcon";
import Colors from "~/constants/colors";

interface UploadProps {
  maxSize?: number; // in GB
  accept?: string;
  onChange?: (file: File | null) => void;
  value?: File | null;
  uploadIcon?: React.ReactNode;
  fileType?: string;
}

interface UploadState {
  file: File | null;
  progress: number;
  status: "idle" | "uploading" | "uploaded" | "error";
}

const Upload: React.FC<UploadProps> = ({
  maxSize = 10,
  accept = "*/*",
  onChange,
  value,
  uploadIcon = <UploadIcon />,
  fileType = "file",
}) => {
  const [state, setState] = useState<UploadState>({
    file: value || null,
    progress: 0,
    status: "idle",
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);
  const uploadIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (state.status === "idle") {
      dropZoneRef.current?.classList.add("bg-brand-soft", "border-brand-primary");
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dropZoneRef.current?.classList.remove("bg-brand-soft", "border-brand-primary");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // dropZoneRef.current?.classList.remove("border-brand-primary");

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleFileSelect = (file: File) => {
    if (file.size > maxSize * 1024 * 1024 * 1024) {
      setState((prev) => ({ ...prev, status: "error" }));
      return;
    }

    setState({ file, progress: 0, status: "uploading" });
    onChange?.(file);

    // Simulate upload progress
    let progress = 0;
    // Store the interval in the ref so we can clear it later
    uploadIntervalRef.current = setInterval(() => {
      progress += Math.random() * 10;
      if (progress >= 100) {
        if (uploadIntervalRef.current) {
          clearInterval(uploadIntervalRef.current);
        }
        setState((prev) => ({ ...prev, progress: 100, status: "uploaded" }));
      } else {
        setState((prev) => ({ ...prev, progress }));
      }
    }, 500);
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleRemove = () => {
    setState({ file: null, progress: 0, status: "idle" });
    onChange?.(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
  };

  const handleCancelUpload = () => {
    // Clear the upload interval
    if (uploadIntervalRef.current) {
      clearInterval(uploadIntervalRef.current);
    }

    // Reset the state
    setState({ file: null, progress: 0, status: "idle" });
    onChange?.(null);

    // Clear the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Cleanup effect to ensure interval is cleared if component unmounts
  useEffect(() => {
    return () => {
      if (uploadIntervalRef.current) {
        clearInterval(uploadIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full">
      <h2 className="fs-500-14 mb-2">
        Upload {fileType.charAt(0).toUpperCase() + fileType.slice(1)}
      </h2>
      {state.status === "idle" ? (
        <div
          ref={dropZoneRef}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className="border-2 border-dashed  rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:border-brand-primary transition-colors"
          onClick={handleBrowseClick}
        >
          <div className="mb-3">{uploadIcon}</div>
          <p className="text-center mb-2 fs-400-14-18 text-neutral-text-secondary">
            Drag & drop your {fileType} here or{" "}
            <span className="text-brand-primary fs-500-14">Browse files</span>
          </p>
          <div className="h-[1px] w-full bg-gradient-to-r from-white via-neutral-border to-white"></div>
          <p className="fs-400-12 mt-2 text-neutral-text-secondary">
            {fileType} format - up to {maxSize}GB
          </p>
        </div>
      ) : (
        <div className="border border-neutral-border rounded-lg p-3">
          <div className="flex items-center gap-2">
            <div className="w-11 h-11 border border-neutral-border rounded-lg flex items-center justify-center">
              {state.status === "uploading" && (
                <div className="w-6 h-6 border-4 border-t-transparent border-gradient-to-r from-status-info-light to-status-info-dark rounded-full animate-spin"></div>
              )}
              {state.status === "uploaded" && (
                <div>
                  {state.file?.type.startsWith("video/") ? (
                    <video
                      src={URL.createObjectURL(state.file)}
                      className="w-11 h-11 object-cover rounded-lg"
                      onLoadedMetadata={(e) => {
                        URL.revokeObjectURL((e.target as HTMLVideoElement).src);
                      }}
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full">
                      <FileIcon />
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="flex items-center justify-between w-full flex-1 ">
              <div className="flex mb-1 flex-col">
                <p className="fs-500-14-21 text-neutral-black">
                  {state.file?.name}
                </p>
                {state.status === "uploaded" && (
                  <p className="fs-400-12 text-neutral-text-tertiary">
                    {formatFileSize(state.file?.size || 0)}
                  </p>
                )}
                {state.status === "uploading" && (
                  <div className="flex items-center gap-3">
                    <p className="fs-400-12 text-neutral-text-tertiary">
                      {formatFileSize(state.file?.size || 0)}
                    </p>
                    <div className=" bg-neutral-text-disabled h-1 w-1 rounded-full"></div>
                    <p className="fs-400-12 text-neutral-text-tertiary">
                      {Math.round(state.progress)}% uploading...
                    </p>
                  </div>
                )}
                {state.status === "error" && (
                  <p className="text-sm text-status-error">
                    File size exceeds the maximum limit
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2">
                {state.status === "uploaded" && (
                  <button
                    className="border-status-error-light border rounded-full p-2"
                    onClick={handleRemove}
                  >
                    <TrashIcon />
                  </button>
                )}
                {state.status === "uploading" && (
                  <button
                    className="border-neutral-border border rounded-full p-2"
                    onClick={handleCancelUpload}
                  >
                    <CrossIcon
                      color={Colors.neutral.text.primary}
                      height={16}
                      width={16}
                    />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileInputChange}
        className="hidden"
      />
    </div>
  );
};

export default Upload;
