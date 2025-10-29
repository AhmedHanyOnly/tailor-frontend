'use client'
import React, { useState } from 'react'

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false)
  const [name, setName] = useState('محمد الخياط')
  const [email, setEmail] = useState('tailor@example.com')
  const [phone, setPhone] = useState('0123456789')

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8">
      <h1
        className="text-3xl font-extrabold mb-6"
        style={{ color: 'var(--color-primary)' }}
      >
        الملف الشخصي
      </h1>

      {/* بطاقة معلومات المستخدم أو النموذج */}
      <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src="/image.webp"
          alt="صورة المستخدم"
          className="w-32 h-32 rounded-full border-4 border-[var(--color-primary)]"
        />

        <div className="flex-1 space-y-2 w-full">
          {!editMode ? (
            <>
              <h2 className="text-2xl font-semibold">{name}</h2>
              <p className="text-gray-600">البريد الإلكتروني: {email}</p>
              <p className="text-gray-600">الهاتف: {phone}</p>
              <button
                onClick={() => setEditMode(true)}
                className="mt-4 px-6 py-2 bg-[var(--color-primary)] text-white rounded-xl hover:bg-[#5f6de0] transition"
              >
                تعديل الملف الشخصي
              </button>
            </>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div>
                <label className="block text-gray-600 font-medium mb-1">الاسم</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">البريد الإلكتروني</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">الهاتف</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* بطاقة الإحصاءات */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <p className="text-gray-500">عدد الطلبات</p>
          <p className="text-2xl font-bold mt-2">120</p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <p className="text-gray-500">العملاء</p>
          <p className="text-2xl font-bold mt-2">85</p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <p className="text-gray-500">تقييم الخدمة</p>
          <p className="text-2xl font-bold mt-2">4.8 / 5</p>
        </div>
      </div>
       <div className="bg-white shadow-lg rounded-2xl p-6">
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ color: "var(--color-primary)" }}
        >
          تغيير كلمة المرور
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <input
            type="password"
            placeholder="كلمة المرور الحالية"
            className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
          <input
            type="password"
            placeholder="كلمة المرور الجديدة"
            className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
          <input
            type="password"
            placeholder="تأكيد كلمة المرور الجديدة"
            className="border p-3 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
          <button className="px-6 py-2 bg-[var(--color-primary)] text-white rounded-xl hover:bg-[#5f6de0] transition col-span-full">
            حفظ التغييرات
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
