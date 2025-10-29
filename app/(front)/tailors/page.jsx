"use client";
import { useState } from "react";
import TailorForm from "./components/Form";
import TailorTable from "./components/Table";
import TailorShow from "./components/Show";

export default function TailorPage() {
  const [mode, setMode] = useState("table");
  const [selectedTailor, setSelectedTailor] = useState(null);

  // بيانات تجريبية للخياطين
  const tailors = [
    {
      id: 1,
      name: "خياط 1",
      phone: "01000000001",
      specialty: "قميص",
      experience: "5 سنوات",
      status: "نشط",
    },
    {
      id: 2,
      name: "خياط 2",
      phone: "01000000002",
      specialty: "بنطال",
      experience: "3 سنوات",
      status: "نشط",
    },
    {
      id: 3,
      name: "خياط 3",
      phone: "01000000003",
      specialty: "جاكيت",
      experience: "7 سنوات",
      status: "متوقف مؤقتاً",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">إدارة الخياطين</h1>

      {mode === "table" && (
        <button
          onClick={() => setMode("form")}
          className="inline-flex items-center justify-center font-medium gap-2 rounded-lg transition px-5 py-3.5 text-sm bg-[var(--color-primary)] text-white shadow-theme-xs hover:bg-[#5f6de0]"
        >
          إضافة خياط
        </button>
      )}

      {/* عرض الفورم */}
      {mode === "form" && (
        <div>
          <button
            onClick={() => setMode("table")}
            className="mb-4 inline-flex items-center justify-center font-medium gap-2 rounded-lg transition px-5 py-3.5 text-sm bg-gray-200 text-gray-700 shadow-sm hover:bg-gray-300"
          >
            العودة للقائمة
          </button>

          <TailorForm />
        </div>
      )}

      {/* عرض المعاينة */}
      {mode === "show" && selectedTailor && (
        <div>
          <button
            onClick={() => setMode("table")}
            className="mb-4 inline-flex items-center justify-center font-medium gap-2 rounded-lg transition px-5 py-3.5 text-sm bg-gray-200 text-gray-700 shadow-sm hover:bg-gray-300"
          >
            العودة للقائمة
          </button>
          <TailorShow
            tailor={selectedTailor}
          />
        </div>
      )}

      {/* عرض الجدول */}
      {mode === "table" && (
        <TailorTable
          tailors={tailors}
          onPreview={(tailor) => {
            setSelectedTailor(tailor);
            setMode("show");
          }}
        />
      )}
    </div>
  );
}
