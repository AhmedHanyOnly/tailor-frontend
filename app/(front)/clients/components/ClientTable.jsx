import { FaEye } from "react-icons/fa";

export default function ClientTable({ clients, onPreview }) {
  const statusColors = {
    جاهز: "bg-green-100 text-green-800",
    "قيد التنفيذ": "bg-yellow-100 text-yellow-800",
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-lg font-bold mb-4 text-[var(--color-primary)] text-center md:text-start">
        قائمة العملاء
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg shadow-md overflow-hidden text-sm sm:text-base">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-3 text-center">الصنف</th>
              <th className="px-4 py-3 text-center">تاريخ التسليم</th>
              <th className="px-4 py-3 text-center">الحالة</th>
              <th className="px-4 py-3 text-center">الخياط</th>
              <th className="px-4 py-3 text-center">معاينة</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, idx) => (
              <tr
                key={client.id}
                className={`transition-all duration-300 ${
                  idx % 2 === 0 ? "bg-gray-50" : "bg-[#f0f7ff]"
                } hover:bg-gray-200`}
              >
                <td className="px-4 py-3 border-b border-gray-200 text-center text-gray-600">
                  {client.item}
                </td>
                <td className="px-4 py-3 border-b border-gray-200 text-center text-gray-600">
                  {client.date}
                </td>
                <td className="px-4 py-3 border-b border-gray-200 text-center">
                  <span
                    className={`px-3 py-1 text-sm font-semibold rounded-full ${
                      statusColors[client.status]
                    }`}
                  >
                    {client.status}
                  </span>
                </td>
                <td className="px-4 py-3 border-b border-gray-200 text-center text-gray-600">
                  {client.tailor}
                </td>
                <td className="px-4 py-3 border-b border-gray-200 text-center">
                  <div className="flex justify-center">
                    <button
                      onClick={() => onPreview(client)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-[var(--color-primary)] text-white shadow-xs hover:bg-[#5f6de0] transition"
                    >
                      <FaEye /> معاينة
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
