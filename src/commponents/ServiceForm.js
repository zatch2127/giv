import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceForm = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 p-4 md:p-6 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-lg w-full max-w-6xl rounded-lg overflow-hidden border">
        {/* Subheader */}
        <div className="bg-blue-700 text-white text-sm md:text-base p-3">
          भाडे - परिपत्रक क्र. १४ अन्यो सहकार विभागाच्या अहवाल नुसार
          झोपडओत्तरमाईझ बँक खात्यावर भाडे प्रदान तपशीलाच्या प्रमाणित प्रती देणे.
        </div>

        {/* Content */}
        <div className="p-4">
          <h2 className="text-base md:text-lg font-semibold bg-cyan-100 px-4 py-2 rounded">
            लागणारे कागद पत्र ( कोणतेही एक )
          </h2>
          <ul className="list-disc list-inside px-4 py-2 text-sm md:text-base">
            <li>आधार कार्ड</li>
            <li>पॅन कार्ड</li>
          </ul>

          {/* Table */}
          <div className="overflow-x-auto mt-4">
            <table className="table-auto w-full text-sm border">
              <thead className="bg-purple-200 text-left">
                <tr>
                  <th className="border px-2 py-1">अ. क्र</th>
                  <th className="border px-2 py-1">सेवेचे नाव</th>
                  <th className="border px-2 py-1">
                    सेवेचे पुरवठा किमान निश्चित कालावधी (दिवस)
                  </th>
                  <th className="border px-2 py-1">पदनियुक्त अधिकारी</th>
                  <th className="border px-2 py-1">प्रथम आपिलीय अधिकारी</th>
                  <th className="border px-2 py-1">द्वितीय आपिलीय अधिकारी</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1 text-center">१</td>
                  <td className="border px-2 py-1">
                    भाडे - परिपत्रक क्र. १४ अन्यो सहकार विभागाच्या अहवालानुसार
                    झोपडओत्तरमाईझच्या बँक खात्यावर भाडे प्रदान तपशीलाच्या
                    प्रमाणित प्रती देणे.
                  </td>
                  <td className="border px-2 py-1 text-center">१५</td>
                  <td className="border px-2 py-1">
                    लिपिक, लेखा विभाग, मुंबई महानगर प्रदेश झोपडपट्टी पुनर्वसन
                    प्राधिकरण ठाणे
                  </td>
                  <td className="border px-2 py-1">
                    सहाय्यक लेखा अधिकारी, मुंबई महानगर प्रदेश झोपडपट्टी पुनर्वसन
                    प्राधिकरण, ठाणे
                  </td>
                  <td className="border px-2 py-1">
                    लेखा अधिकारी, मुंबई महानगर प्रदेश झोपडपट्टी पुनर्वसन
                    प्राधिकरण, ठाणे
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Apply Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => navigate("/form")}
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;
