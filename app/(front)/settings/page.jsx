"use client";
import React, { useState } from "react";

const SiteSettingsPage = () => {
  const [form, setForm] = useState({
    site_name: "",
    timezone: "Africa/Cairo",
    company_email: "",
    company_phone: "",
    company_address: "",
    tax_percentage: 15,
    site_logo: null,
    site_favicon: null,
    default_currency: "",
    default_plan: "",
    tax_enabled: false,
    maintenance_mode: false,
    maintenance_message: "",
    registration_enabled: false,
    auto_suspend: false,
    suspend_after_days: 0,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
  };

  return (
    <div className="mx-auto max-w-8xl p-4 md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h2
          className="text-2xl font-bold  text-gray-900 text-center md:text-start"
        >
          إعدادات الموقع
        </h2>
      </div>

      <div className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
        <form
          className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="mb-1.5 block text-sm font-medium">
              اسم الموقع
            </label>
            <input
              name="site_name"
              value={form.site_name}
              onChange={handleChange}
              placeholder="اسم الموقع"
              className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-none focus:ring-3 focus:ring-[var(--color-primary)]"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium">
              المنطقة الزمنية
            </label>
            <input
              name="timezone"
              value={form.timezone}
              disabled
              className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm cursor-not-allowed text-gray-500"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium">
              البريد الإلكتروني
            </label>
            <input
              name="company_email"
              value={form.company_email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-none focus:ring-3 focus:ring-[var(--color-primary)]"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium">
              رقم الهاتف
            </label>
            <input
              name="company_phone"
              value={form.company_phone}
              onChange={handleChange}
              placeholder="رقم الهاتف"
              className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-none focus:ring-3 focus:ring-[var(--color-primary)]"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-1.5 block text-sm font-medium">
              عنوان الشركة
            </label>
            <input
              name="company_address"
              value={form.company_address}
              onChange={handleChange}
              placeholder="العنوان"
              className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-none focus:ring-3 focus:ring-[var(--color-primary)]"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium">الشعار</label>
            <input
              name="site_logo"
              type="file"
              onChange={handleChange}
              className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium">الأيقونة</label>
            <input
              name="site_favicon"
              type="file"
              onChange={handleChange}
              className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium">
              العملة الافتراضية
            </label>
            <select
              name="default_currency"
              value={form.default_currency}
              onChange={handleChange}
              className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:ring-[var(--color-primary)]"
            >
              <option value="" disabled>
                اختر العملة
              </option>
              <option value="EGP">الجنيه المصري</option>
              <option value="SAR">الريال السعودي</option>
              <option value="USD">دولار أمريكي</option>
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium">
              الخطة الافتراضية
            </label>
            <select
              name="default_plan"
              value={form.default_plan}
              onChange={handleChange}
              className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:ring-[var(--color-primary)]"
            >
              <option value="" disabled>
                اختر الخطة
              </option>
              <option value="1">الباقة المجانية</option>
              <option value="2">الباقة البرونزية</option>
              <option value="3">الباقة الفضية 5% عمولة</option>
              <option value="4">الباقة الذهبية 10% عمولة</option>
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium">
              تفعيل الضريبة
            </label>
            <input
              type="checkbox"
              name="tax_enabled"
              checked={form.tax_enabled}
              onChange={handleChange}
              className="w-6 h-6 accent-[var(--color-primary)]"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium">
              نسبة الضريبة (%)
            </label>
            <input
              type="number"
              name="tax_percentage"
              value={form.tax_percentage}
              onChange={handleChange}
              min="1"
              max="100"
              className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-none focus:ring-3 focus:ring-[var(--color-primary)]"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium">
              وضع الصيانة
            </label>
            <input
              type="checkbox"
              name="maintenance_mode"
              checked={form.maintenance_mode}
              onChange={handleChange}
              className="w-6 h-6 accent-[var(--color-primary)]"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-1.5 block text-sm font-medium">
              رسالة الصيانة
            </label>
            <textarea
              name="maintenance_message"
              value={form.maintenance_message}
              onChange={handleChange}
              rows="4"
              className="w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-none focus:ring-3 focus:ring-[var(--color-primary)]"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium">
              تفعيل التسجيل للمتاجر
            </label>
            <input
              type="checkbox"
              name="registration_enabled"
              checked={form.registration_enabled}
              onChange={handleChange}
              className="w-6 h-6 accent-[var(--color-primary)]"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium">
              إيقاف المحلات عند عدم الدفع تلقائياً
            </label>
            <input
              type="checkbox"
              name="auto_suspend"
              checked={form.auto_suspend}
              onChange={handleChange}
              className="w-6 h-6 accent-[var(--color-primary)]"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium">
              عدد الأيام قبل الإيقاف
            </label>
            <input
              type="number"
              name="suspend_after_days"
              value={form.suspend_after_days}
              onChange={handleChange}
              className="h-11 w-full rounded-lg border px-4 py-2.5 text-sm shadow-theme-xs focus:outline-none focus:ring-3 focus:ring-[var(--color-primary)]"
            />
          </div>

          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center font-medium gap-2 rounded-lg transition px-5 py-3.5 text-sm bg-[var(--color-primary)] text-white shadow-theme-xs hover:bg-[#5f6de0]"
            >
              حفظ الإعدادات
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SiteSettingsPage;
