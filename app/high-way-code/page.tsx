import DownloadButton from "@/components/DownloadButton";
import React from "react";

const HighWayCode = () => {
  return (
    <main>
      <section className="h-[60vh] w-full">
        <div className="container h-full flex items-center gap-x-5 justify-center font-[family-name:var(--font-rethink)]">
          <p>Click here to download the Zambian Highway Code</p>
          <DownloadButton
            fileUrl="/zambian-highway-code.pdf"
            fileName="zambian-highway-code.pdf"
          />
        </div>
      </section>
    </main>
  );
};

export default HighWayCode;
