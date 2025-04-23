import React, { useState } from "react";

const stages = ["मूलभूत माहिती", "कागदपत्रे", "प्रमाणपत्र"];

const StageTracker = ({ currentStage }) => {
  return (
    <div className="flex justify-around items-center mb-6">
      {stages.map((stage, index) => (
        <div key={index} className="flex flex-col items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
              index === currentStage
                ? "bg-blue-600"
                : "border-2 border-blue-600 text-blue-600"
            }`}
          >
            {index + 1}
          </div>
          <p className="mt-2 text-sm text-center">{stage}</p>
        </div>
      ))}
    </div>
  );
};

const ApplicationForm = ({ formData, handleChange, nextStage, prevStage }) => (
    <div className="min-h-screen bg-gray-50 p-4 flex justify-center">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow p-6">
        {/* Header */}
        <div className="bg-blue-900 text-white text-center p-2 rounded text-sm md:text-base font-semibold">
        सेवा क्र.1 भाडे - परिपत्रक क्र. १४ अन्यो सहकार विभागाच्या अहवाल नुसार
        झोपडओत्तरमाईझच्या बँक खात्यावर भाडे प्रदान तपशीलाच्या प्रमाणित प्रती
        देणे.
        </div>
        <p className="text-center text-sm text-gray-700 mt-2">
          (महाराष्ट्र लोकसेवा हक्क अधिनियम २०१५ अंतर्गत सेवा मिळविण्याचा नमुना)
        </p>

        {/* Progress / Step Tracker */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-blue-700 font-bold">मूलभूत माहिती</p>
          <div className="border border-black px-4 py-1 text-sm">₹ १०/- फी</div>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-sm">
          {/* Name */}
          <div>
            <label className="font-medium block mb-1">*नाव</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* Date */}
          <div>
            <label className="font-medium block mb-1">*दिनांक</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="dd-mm-yyyy"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="font-medium block mb-1">*मोबाईल नं.</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* Address */}
          <div>
            <label className="font-medium block mb-1">*पत्ता</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* Taluka */}
          <div>
            <label className="font-medium block mb-1">*तालुका</label>
            <input
              type="text"
              name="taluka"
              value={formData.taluka}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="-निवडा-"
            />
          </div>

          {/* Bhukhand */}
          <div>
            <label className="font-medium block mb-1">*भू. क्र</label>
            <input
              type="text"
              name="bhukhandNo"
              value={formData.bhukhandNo}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* Mouje */}
          <div>
            <label className="font-medium block mb-1">*मौजे</label>
            <input
              type="text"
              name="mouje"
              value={formData.mouje}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* District */}
          <div>
            <label className="font-medium block mb-1">*जिल्हा</label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="-निवडा-"
            />
          </div>

          {/* Ward */}
          <div>
          <label className="font-medium block mb-1">
            *सेक्टर क्र./वॉर्ड क्र
          </label>
            <input
              type="text"
              name="wardNo"
              value={formData.wardNo}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* Nagarpalika */}
          <div>
            <label className="font-medium block mb-1">*महानगरपालिका</label>
            <select
              name="nagarpalika"
              value={formData.nagarpalika}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            >
              <option value="">-निवडा-</option>
              <option value="mumbai">मुंबई</option>
              <option value="thane">ठाणे</option>
            </select>
          </div>
        </form>
    </div>
  </div>
);

const DocumentStage = () => (
  <div className="min-h-screen bg-gray-50 p-4 flex justify-center">
    <div className="w-full max-w-6xl bg-white rounded-lg shadow p-6">
      {/* Header */}
      <div className="bg-blue-900 text-white text-center p-2 rounded text-sm md:text-base font-semibold mb-6">
        आवश्यक कागदपत्रे अपलोड करा
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Aadhar Card Upload */}
        <div className="space-y-2">
          <label className="flex items-start text-sm font-medium text-gray-700">
            <span className="text-red-500 mr-1">*</span>
            आधार कार्ड
          </label>
          <div className="relative">
            <input
              type="file"
              className="hidden"
              id="aadharCard"
              accept=".pdf,.jpg,.jpeg,.png"
            />
            <label
              htmlFor="aadharCard"
              className="flex items-center gap-2 w-full border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors group"
            >
              <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
              </div>
              <div className="flex-1 text-sm text-gray-500">
                <span className="font-medium">Choose from files</span>
                <p className="text-xs">PDF, JPG, JPEG or PNG (max. 2MB)</p>
              </div>
            </label>
          </div>
        </div>

        {/* PAN Card Upload */}
        <div className="space-y-2">
          <label className="flex items-start text-sm font-medium text-gray-700">
            <span className="text-red-500 mr-1">*</span>
            पॅन कार्ड
          </label>
          <div className="relative">
            <input
              type="file"
              className="hidden"
              id="panCard"
              accept=".pdf,.jpg,.jpeg,.png"
            />
            <label
              htmlFor="panCard"
              className="flex items-center gap-2 w-full border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors group"
            >
              <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
              </div>
              <div className="flex-1 text-sm text-gray-500">
                <span className="font-medium">Choose from files</span>
                <p className="text-xs">PDF, JPG, JPEG or PNG (max. 2MB)</p>
              </div>
            </label>
          </div>
        </div>

        {/* Signature Upload */}
        <div className="space-y-2 md:col-span-2">
          <label className="flex items-start text-sm font-medium text-gray-700">
            <span className="text-red-500 mr-1">*</span>
            स्वाक्षरी
          </label>
          <div className="relative">
            <input
              type="file"
              className="hidden"
              id="signature"
              accept=".pdf,.jpg,.jpeg,.png"
            />
            <label
              htmlFor="signature"
              className="flex items-center gap-2 w-full border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors group"
            >
              <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
              </div>
              <div className="flex-1 text-sm text-gray-500">
                <span className="font-medium">Choose from files</span>
                <p className="text-xs">PDF, JPG, JPEG or PNG (max. 2MB)</p>
              </div>
            </label>
          </div>
        </div>

        {/* File Upload Guidelines */}
        <div className="md:col-span-2 mt-4 bg-blue-50 p-4 rounded-lg">
          <h3 className="font-medium text-blue-800 mb-2">
            फाइल अपलोड मार्गदर्शक सूचना:
          </h3>
          <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
            <li>फाइल साइज 2MB पेक्षा कमी असावी</li>
            <li>फक्त PDF, JPG, JPEG किंवा PNG फॉरमॅट स्वीकारले जातील</li>
            <li>कागदपत्रे स्पष्ट आणि वाचनीय असावीत</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const CertificateStage = ({ formData }) => (
  <div className="min-h-screen bg-gray-50 p-4 flex justify-center">
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
      {/* Certificate Header */}
      <div className="text-center mb-6">
        <div className="flex justify-between items-start mb-4">
          <div className="text-left">सेवा क्र.१</div>
          <button className="flex items-center text-blue-600 hover:text-blue-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download PDF
          </button>
        </div>
        <p className="text-sm mb-4">
          (महाराष्ट्र लोकसेवा हक्क अधिनियम २०१५ अंतर्गत सेवा मिळविण्याचा नमुना)
        </p>

        {/* Photo Box */}
        <div className="flex justify-end mb-4">
          <div className="border border-gray-400 w-24 h-32 flex items-center justify-center text-gray-400 text-xs">
            ₹ १० चे कोर्ट फी
          </div>
        </div>
      </div>

      {/* Certificate Content */}
      <div className="space-y-6 text-sm">
        <div className="flex flex-col space-y-2">
          <div className="flex">
            <span className="w-24">अर्जदाराचे नाव</span>
            <span className="mx-2">:</span>
            <span className="flex-1 border-b border-gray-300">
              {formData.name || "_____________"}
            </span>
          </div>
          <div className="flex">
            <span className="w-24">पत्ता</span>
            <span className="mx-2">:</span>
            <span className="flex-1 border-b border-gray-300">
              {formData.address || "_____________"}
            </span>
          </div>
          <div className="flex">
            <span className="w-24">मोबाईल क्र.</span>
            <span className="mx-2">:</span>
            <span className="flex-1 border-b border-gray-300">
              {formData.mobile || "_____________"}
            </span>
          </div>
        </div>

        <div className="mt-8">
          <p className="mb-4">प्रति,</p>
          <div className="ml-8 space-y-1">
            <p>मा.विभागीय</p>
            <p>सेवा विभाग</p>
            <p>कृषि विभागन दालन</p>
            <p>कोपरखैरणे, मुंबई-४००७०९</p>
          </div>
        </div>

        <div className="mt-8">
          <p className="font-medium mb-4">
            विषय :- भाडे-परिपत्रक क्र.१ नुसार महसूल विभागाच्या आदेशानुसार
            झोपडपट्टीधारकाच्या बँक खात्यावर भाडे प्रदान तपशीलाच्या प्रमाणित
            प्रती देणेबाबत.
          </p>

          <p className="mb-4">महोदय,</p>

          <div className="space-y-4">
            <p>
              मी निवासी अनुज्ञप्ती क्र.{formData.wardNo || "_______"}{" "}
              {formData.nagarpalika || "_______"} तालुका{" "}
              {formData.taluka || "_______"} जिल्हा{" "}
              {formData.district || "_______"} येथील{" "}
              {formData.mouje || "_______"} मधील गाळा क्र.{" "}
              {formData.bhukhandNo || "_______"} चा दिनांक{" "}
              {formData.date || "_______"} पासून भोगवटादार आहे.
            </p>

            <p>
              आपल्या विभागाने क्र.४१ नुसार झोपडपट्टीधारकाच्या बँक खात्यावर भाडे
              प्रदान तपशीलाच्या प्रमाणित प्रती व महानगरपालिकेच्या
              झोपडपट्टीधारकाच्या बँक खात्यावर भाडे प्रदान तपशीलाच्या प्रमाणित
              प्रती मागणी केली आहे.
            </p>
          </div>
        </div>

        {/* Guidelines */}
        <div className="mt-8 space-y-2 text-sm">
          <p className="font-medium">टीप :-</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>
              सदर अर्जासोबत रु. १०/- किंमतीचे कोर्ट फी स्टॅम्प, विहीत नमुना सर्व
              कागद आवश्यक विभागाकडे सादर करावा.
            </li>
            <li>
              व्यक्तिगत अर्जदाराने स्वतःचा पान क्रमांकीत अर्जदाराच्या
              स्वाक्षरीची पुरावा व इतर प्रमाणपत्र रु. २५/- प्रमाणे स्वाक्षरीत
              करावी.
            </li>
            <li>
              संबंधित कागदपत्रे सत्यता पडताळणी, सर्व माहितीची खात्री झाल्याशिवाय
              त्यावर कारवाई केली जाणार नाहीत.
            </li>
          </ol>
        </div>

        {/* Signature Section */}
        <div className="mt-12 flex justify-end">
          <div className="text-center">
            <div className="w-40 h-20 border-b border-gray-400"></div>
            <p className="mt-2">(अर्जदाराची स्वाक्षरी)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MultiStepForm = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    address: "",
    mobile: "",
    taluka: "",
    bhukhandNo: "",
    mouje: "",
    district: "",
    wardNo: "",
    nagarpalika: "",
  });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const nextStage = () =>
    setCurrentStage((prev) => Math.min(prev + 1, stages.length - 1));
  const prevStage = () => setCurrentStage((prev) => Math.max(prev - 1, 0));

  return (
    <div className="min-h-screen p-4 bg-gray-100 flex justify-center">
      <div className="w-full max-w-4xl bg-white p-6 rounded shadow-md">
        <StageTracker currentStage={currentStage} />

        {currentStage === 0 && (
          <ApplicationForm
            formData={formData}
            handleChange={handleChange}
            nextStage={nextStage}
            prevStage={prevStage}
          />
        )}
        {currentStage === 1 && <DocumentStage />}
        {currentStage === 2 && <CertificateStage formData={formData} />}

        {/* Buttons */}
        <div className="flex flex-wrap justify-between mt-8 gap-4">
          <button
            type="button"
            onClick={prevStage}
            className="border border-black px-6 py-2 rounded"
          >
            BACK
          </button>
          <button
            type="button"
            onClick={prevStage}
            className="bg-yellow-500 text-white px-6 py-2 rounded"
          >
            PREVIEW
          </button>
          <button
            type="button"
            onClick={nextStage}
            className="bg-blue-600 text-white px-6 py-2 rounded"
          >
            NEXT
            </button>
          <button
            type="button"
            className="bg-red-500 text-white px-6 py-2 rounded"
          >
            SUBMIT
            </button>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
