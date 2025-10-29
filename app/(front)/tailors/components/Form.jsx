export default function TailorForm() {
  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <form className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* اسم الخياط */}
        <div>
          <label className="mb-1.5 block text-sm font-medium">اسم الخياط</label>
          <input
            placeholder="اسم الخياط"
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

        {/* التخصص */}
        <div>
          <label className="mb-1.5 block text-sm font-medium">التخصص</label>
          <input
            placeholder="مثال: تفصيل رجالي / نسائي / أطفال"
            className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-none focus:ring-3 focus:ring-[var(--color-primary)]"
          />
        </div>

        {/* سنوات الخبرة */}
        <div>
          <label className="mb-1.5 block text-sm font-medium">
            الخبرة (بالسنوات)
          </label>
          <input
            type="number"
            min="0"
            placeholder="عدد سنوات الخبرة"
            className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-none focus:ring-3 focus:ring-[var(--color-primary)]"
          />
        </div>

        {/* الحالة */}
        <div>
          <label className="mb-1.5 block text-sm font-medium">الحالة</label>
          <select className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-none focus:ring-3 focus:ring-[var(--color-primary)]">
            <option value="نشط">نشط</option>
            <option value="متوقف مؤقتاً">متوقف مؤقتاً</option>
          </select>
        </div>

        {/* زر الحفظ كامل العرض */}
        <div className="md:col-span-2 mt-4">
          <button
            type="submit"
            className="inline-flex items-center justify-center font-medium gap-2 rounded-lg transition px-5 py-3.5 text-sm bg-[var(--color-primary)] text-white shadow-theme-xs hover:bg-[#5f6de0]"
          >
            حفظ الخياط
          </button>
        </div>
      </form>
    </div>
  );
}
