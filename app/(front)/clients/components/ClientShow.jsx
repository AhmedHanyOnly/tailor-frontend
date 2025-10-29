export default function ClientShow({ client }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-xl mx-auto transform hover:scale-[1.02] transition-all duration-300">
      {/* عنوان */}
      <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6 text-center">
        معاينة العميل
      </h2>

      {/* بيانات العميل */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm sm:text-base">
        <div className="flex flex-col">
          <span className="font-medium text-gray-500 mb-1">الاسم</span>
          <span className="text-gray-800">{client.name}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-gray-500 mb-1">الهاتف</span>
          <span className="text-gray-800">{client.phone}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-gray-500 mb-1">الصنف</span>
          <span className="text-gray-800">{client.item}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-gray-500 mb-1">تاريخ التسليم</span>
          <span className="text-gray-800">{client.date}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-gray-500 mb-1">الحالة</span>
          <span
            className={`mt-1 font-semibold px-3 py-1 inline-block rounded-full text-sm ${
              client.status === 'جاهز' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}
          >
            {client.status}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-gray-500 mb-1">الخياط</span>
          <span className="text-gray-800">{client.tailor}</span>
        </div>
      </div>
    </div>
  )
}
