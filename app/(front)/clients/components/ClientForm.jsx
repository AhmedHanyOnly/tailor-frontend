export default function ClientForm() {
  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <form className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* اسم العميل */}
        <div>
          <label className="mb-1.5 block text-sm font-medium">اسم العميل</label>
          <input
            placeholder="اسم العميل"
            className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-none focus:ring-3 focus:ring-[var(--color-primary)]"
          />
        </div>

        {/* رقم الهاتف */}
        <div>
          <label className="mb-1.5 block text-sm font-medium">رقم الهاتف</label>
          <input
            placeholder="رقم الهاتف"
            className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-none focus:ring-3 focus:ring-[var(--color-primary)]"
          />
        </div>

        {/* الصنف */}
        <div>
          <label className="mb-1.5 block text-sm font-medium">الصنف</label>
          <input
            placeholder="قميص / بنطال / جاكيت"
            className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-none focus:ring-3 focus:ring-[var(--color-primary)]"
          />
        </div>

        {/* تاريخ التسليم */}
        <div>
          <label className="mb-1.5 block text-sm font-medium">تاريخ التسليم</label>
          <input
            type="date"
            className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-none focus:ring-3 focus:ring-[var(--color-primary)]"
          />
        </div>

        {/* الحالة */}
        <div>
          <label className="mb-1.5 block text-sm font-medium">الحالة</label>
          <select className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-none focus:ring-3 focus:ring-[var(--color-primary)]">
            <option value="جاهز">جاهز</option>
            <option value="قيد التنفيذ">قيد التنفيذ</option>
          </select>
        </div>

        {/* الخياط */}
        <div>
          <label className="mb-1.5 block text-sm font-medium">الخياط</label>
          <input
            placeholder="اسم الخياط"
            className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-none focus:ring-3 focus:ring-[var(--color-primary)]"
          />
        </div>

        {/* زر الحفظ كامل العرض */}
        <div className="md:col-span-2 mt-4">
          <button
            type="submit"
            className="inline-flex items-center justify-center font-medium gap-2 rounded-lg transition px-5 py-3.5 text-sm bg-[var(--color-primary)] text-white shadow-theme-xs hover:bg-[#5f6de0]"
          >
            حفظ العميل
          </button>
        </div>
      </form>
    </div>
  )
}
