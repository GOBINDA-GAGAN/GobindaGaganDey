
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  FiArrowLeft,
  FiEye,
  FiDownload,
  FiHeart,
  FiExternalLink,
  FiFileText,
} from "react-icons/fi";

const FILE_ID = "1phPRN1KHUrlQYLcSMqsdTv4NjUY3fxKp";

const previewUrl = `https://drive.google.com/file/d/${FILE_ID}/preview`;
const viewUrl = `https://drive.google.com/file/d/${FILE_ID}/view`;
const downloadUrl = `https://drive.google.com/uc?export=download&id=${FILE_ID}`;

const ResumePage = () => {
  const [likes, setLikes] = useState(128);
  const [liked, setLiked] = useState(false);

  // Demo statistics
  const views = 1240;
  const downloads = 86;

  const handleLike = () => {
    setLikes((count) => count + (liked ? -1 : 1));
    setLiked((previous) => !previous);
  };

  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl border-x border-dashed border-border">
      <div className="mx-auto max-w-3xl px-4 pb-8 pt-10 sm:px-6 sm:pt-14">

        {/* Back Navigation */}
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 mt-10 text-sm text-muted transition-colors hover:text-primary"
        >
          <FiArrowLeft size={15} />
          Back to Portfolio
        </Link>

        {/* Resume Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 flex items-center justify-between gap-4"
        >
          {/* Title */}
          <div className="min-w-0">
            <div className="mb-2 flex items-center gap-2 text-xs text-muted">
              <FiFileText size={14} />
              Professional Profile
            </div>

            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              My Resume
            </h1>

            <p className="mt-2 text-xs text-muted sm:text-sm">
              Software Developer · Full-Stack & AI
            </p>
          </div>

          {/* Top Right: Stats + Actions */}
          <div className="flex shrink-0 flex-col items-end gap-3">

            {/* View, Download & Like Stats */}
            <div className="flex items-center gap-3 text-xs text-muted sm:gap-4">

              <div
                className="flex items-center gap-1.5"
                title="Demo view count"
              >
                <FiEye size={15} />
                <span>{views.toLocaleString("en-IN")}</span>
              </div>

              <div
                className="flex items-center gap-1.5"
                title="Demo download count"
              >
                <FiDownload size={14} />
                <span>{downloads}</span>
              </div>

              <motion.button
                type="button"
                onClick={handleLike}
                whileTap={{ scale: 0.8 }}
                aria-label={liked ? "Unlike resume" : "Like resume"}
                aria-pressed={liked}
                title={liked ? "Unlike" : "Like"}
                className={`flex items-center gap-1.5 transition-colors ${
                  liked
                    ? "text-rose-500"
                    : "text-muted hover:text-rose-500"
                }`}
              >
                <motion.span
                  animate={
                    liked
                      ? {
                          scale: [1, 1.4, 1],
                          rotate: [0, -12, 0],
                        }
                      : { scale: 1, rotate: 0 }
                  }
                  transition={{ duration: 0.35 }}
                >
                  <FiHeart
                    size={15}
                    className={liked ? "fill-current" : ""}
                  />
                </motion.span>

                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={likes}
                    initial={{ opacity: 0, y: -4, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.8 }}
                    transition={{ duration: 0.18 }}
                  >
                    {likes}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            </div>

            {/* View & Download Icon Buttons */}
            <div className="flex items-center gap-2">

              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download resume"
                title="Download Resume"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-transparent bg-gray-100/10  text-muted transition-colors duration-200 
                hover:border-border hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <FiDownload size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Resume Preview */}
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="overflow-hidden rounded-xl border border-border bg-surface"
        >
          {/* Preview Toolbar */}
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex items-center gap-2 text-xs font-medium">
              <FiFileText size={14} />
              Resume Preview
            </div>

            <a
              href={viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Open in Google Drive"
              aria-label="Open PDF in Google Drive"
              className="flex h-7 w-7 items-center justify-center rounded-md text-muted transition-colors hover:bg-background hover:text-primary"
            >
              <FiExternalLink size={14} />
            </a>
          </div>

          {/* PDF Viewer */}
          <iframe
            src={previewUrl}
            title="Gobinda Gagan Dey Resume"
            className="h-[65vh] min-h-[450px] w-full bg-white sm:h-[75vh]"
         
          />

          {/* Preview Footer */}
          <div className="flex items-center justify-between gap-3 border-t border-border px-4 py-3">
            <p className="text-[11px] text-muted sm:text-xs">
              Gobinda Gagan Dey · Software Developer
            </p>

            <a
              href={viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium transition-opacity hover:opacity-70"
            >
              Open PDF
              <FiExternalLink size={12} />
            </a>
          </div>
        </motion.section>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-muted">
          Thanks for taking the time to review my profile.
        </p>
      </div>
    </main>
  );
};

export default ResumePage;
